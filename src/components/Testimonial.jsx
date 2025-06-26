import React from 'react';

const testimonials = [
  {
    name: 'Mrs. Johnson',
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
    text: "GreatKidsPlatform has completely changed the way my son learns. He's more engaged and curious than ever before!",
  },
  {
    name: 'Mr. Adewale',
    avatar: 'https://randomuser.me/api/portraits/men/36.jpg',
    text: "I love the creative approach to learning. My daughter looks forward to every session and talks about it all day.",
  },
  {
    name: 'Mrs. Chen',
    avatar: 'https://randomuser.me/api/portraits/women/65.jpg',
    text: "As a parent, I feel confident knowing my child is using a safe, educational, and fun platform. Thank you!",
  },
  {
    name: 'Mr. Silva',
    avatar: 'https://randomuser.me/api/portraits/men/75.jpg',
    text: "The platform blends education and fun so well. My child’s confidence has grown in such a short time.",
  },
  {
    name: 'Mrs. Fatima',
    avatar: 'https://randomuser.me/api/portraits/women/25.jpg',
    text: "We’ve tried other platforms, but GreatKidsPlatform truly stands out. The learning tools are amazing.",
  },
  {
    name: 'Mr. Thompson',
    avatar: 'https://randomuser.me/api/portraits/men/60.jpg',
    text: "The interactive features are a game-changer. My twins are learning together and loving every moment.",
  },
];

const Testimonial = () => {
  return (
    <section className="bg-gray-100 py-16 px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-600 mb-12">
        What Parents Are Saying
      </h2>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition duration-300"
          >
            <div className="flex items-center gap-4 mb-4">
              <img
                src={testimonial.avatar}
                alt={testimonial.name}
                className="w-12 h-12 rounded-full object-cover border-2 border-blue-400"
              />
              <p className="text-blue-600 font-semibold">{testimonial.name}</p>
            </div>
            <p className="text-gray-700 italic">"{testimonial.text}"</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonial;
