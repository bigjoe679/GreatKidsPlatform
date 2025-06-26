import React, { useState } from 'react';

const faqs = [
  {
    question: 'What services do you offer?',
    answer: 'We offer a wide range of digital services including web development, mobile apps, and cloud solutions.',
  },
  {
    question: 'How can I contact support?',
    answer: 'You can contact support through our contact form or by emailing support@example.com.',
  },
  {
    question: 'Do you provide custom solutions?',
    answer: 'Yes, we tailor our services to meet the specific needs of each client.',
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 px-6 bg-gray-100">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Image */}
        <div>
          <img
            src="https://t3.ftcdn.net/jpg/02/03/50/40/360_F_203504070_OnVn9dmKntiU2Mc1xxky2W0VqnWRyMXD.jpg"
            alt="FAQ illustration"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        {/* FAQ Section */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-blue-500">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full text-left px-4 py-3 font-medium text-lg focus:outline-none"
                >
                  {faq.question}
                </button>
                {openIndex === index && (
                  <div className="px-4 pb-4 text-gray-700">{faq.answer}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
