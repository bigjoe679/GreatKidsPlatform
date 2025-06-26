// Dashboard.jsx
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth, db } from '../firebase';
import {
  collection,
  onSnapshot,
  updateDoc,
  doc,
  increment,
  getDoc,
  getDocs,
  setDoc,
  deleteDoc,
  addDoc
} from 'firebase/firestore';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

const Dashboard = () => {
  const navigate = useNavigate();
  const [candidates, setCandidates] = useState(null);
  const [votedCandidate, setVotedCandidate] = useState(null);
  const [user, setUser] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [newCandidate, setNewCandidate] = useState({ name: '', image: '' });

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, 'votes'), (snapshot) => {
      const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setCandidates(data);
    });

    const fetchUserData = async () => {
      const currentUser = auth.currentUser;
      setUser(currentUser);

      if (currentUser) {
        const adminSnap = await getDoc(doc(db, 'admins', currentUser.uid));
        setIsAdmin(adminSnap.exists());

        const voteSnap = await getDoc(doc(db, 'userVotes', currentUser.uid));
        if (voteSnap.exists()) {
          setVotedCandidate(voteSnap.data().candidateId);
        }
      }
    };

    fetchUserData();
    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate('/login');
    } catch (error) {
      console.error('Logout Error:', error);
    }
  };

  const handleVote = async (candidateId) => {
    if (!user) return alert('You must be logged in to vote.');

    const voteRef = doc(db, 'userVotes', user.uid);
    const voteSnap = await getDoc(voteRef);

    if (voteSnap.exists()) return alert('You have already voted.');

    try {
      await updateDoc(doc(db, 'votes', candidateId), { votes: increment(1) });
      await setDoc(voteRef, { candidateId, votedAt: new Date() });
      setVotedCandidate(candidateId);
    } catch (error) {
      console.error('Vote error:', error);
    }
  };

  const resetVotes = async () => {
    if (!window.confirm('Are you sure you want to reset all votes to 0?')) return;
    const snapshot = await getDocs(collection(db, 'votes'));
    snapshot.forEach(async (docSnap) => {
      await updateDoc(doc(db, 'votes', docSnap.id), { votes: 0 });
    });
    const votesSnap = await getDocs(collection(db, 'userVotes'));
    votesSnap.forEach(async (snap) => await deleteDoc(doc(db, 'userVotes', snap.id)));
    setVotedCandidate(null);
  };

  const deleteCandidate = async (id) => {
    if (!window.confirm('Delete this candidate?')) return;
    await deleteDoc(doc(db, 'votes', id));
  };

  const handleAddCandidate = async () => {
    if (!newCandidate.name || !newCandidate.image) return alert('Fill in all fields');
    try {
      await addDoc(collection(db, 'votes'), { ...newCandidate, votes: 0 });
      setNewCandidate({ name: '', image: '' });
    } catch (error) {
      console.error('Add candidate error:', error);
    }
  };

  return (
    <div className="min-h-screen bg-green-50 px-4 py-8 flex flex-col items-center">
      <div className="bg-white p-6 rounded-2xl shadow-md w-full max-w-6xl text-center">
        <h1 className="text-3xl font-bold mb-4 text-green-700">Pageant Voting Dashboard 👑</h1>
        <p className="mb-6 text-gray-600">Cast your vote for your favorite contestant below!</p>

        {candidates === null ? (
          <p className="text-gray-500">Loading candidates...</p>
        ) : candidates.length === 0 ? (
          <p className="text-gray-500">No candidates available yet.</p>
        ) : (
          <>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {candidates.map((candidate) => (
                <div key={candidate.id} className="border p-4 rounded-xl shadow-sm bg-gray-50 relative">
                  <img
                    src={candidate.image}
                    alt={candidate.name}
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  <h3 className="text-xl font-semibold mb-2">{candidate.name}</h3>
                  <p className="text-sm mb-2 text-gray-700">Votes: {candidate.votes}</p>
                  <button
                    onClick={() => handleVote(candidate.id)}
                    disabled={votedCandidate !== null}
                    className={`w-full py-2 rounded-xl font-medium transition duration-200 ${
                      votedCandidate !== null
                        ? 'bg-gray-400 cursor-not-allowed text-white'
                        : 'bg-purple-600 hover:bg-purple-700 text-white'
                    }`}
                  >
                    {votedCandidate === candidate.id ? 'Your Vote ✓' : 'Vote'}
                  </button>

                  {isAdmin && (
                    <button
                      onClick={() => deleteCandidate(candidate.id)}
                      className="absolute top-2 right-2 text-xs text-red-600 hover:underline"
                    >
                      Delete
                    </button>
                  )}
                </div>
              ))}
            </div>

            <div className="w-full mt-10">
              <h2 className="text-xl font-semibold mb-4">Live Vote Chart</h2>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={candidates} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
                  <XAxis dataKey="name" />
                  <YAxis allowDecimals={false} />
                  <Tooltip />
                  <Bar dataKey="votes" fill="#4c1d95" radius={[10, 10, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </>
        )}

        {isAdmin && (
          <>
            <div className="mt-10">
              <h3 className="text-lg font-semibold mb-2">Add New Candidate</h3>
              <input
                type="text"
                placeholder="Name"
                value={newCandidate.name}
                onChange={(e) => setNewCandidate({ ...newCandidate, name: e.target.value })}
                className="border p-2 rounded mb-2 w-full"
              />
              <input
                type="text"
                placeholder="Image URL"
                value={newCandidate.image}
                onChange={(e) => setNewCandidate({ ...newCandidate, image: e.target.value })}
                className="border p-2 rounded mb-2 w-full"
              />
              <button
                onClick={handleAddCandidate}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              >
                Add Candidate
              </button>
            </div>

            {candidates?.length > 0 && (
              <button
                onClick={resetVotes}
                className="mt-6 bg-yellow-500 text-white py-2 px-6 rounded-xl hover:bg-yellow-600 transition"
              >
                Reset All Votes
              </button>
            )}
          </>
        )}

        <button
          onClick={handleLogout}
          className="mt-8 bg-red-600 text-white py-2 px-6 rounded-xl hover:bg-red-700 transition"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
