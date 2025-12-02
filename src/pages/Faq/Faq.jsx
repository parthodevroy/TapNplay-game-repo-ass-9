import React from "react";

const Faq = () => {
  const faqs = [
    { q: "How to join tournaments?", a: "Create an account and register from the tournaments page." },
    { q: "Is TapNPlay free to use?", a: "Yes! All basic features are completely free." },
    { q: "How to improve rank?", a: "Play matches, win games and earn XP." },
  ];

  return (
    <div className="max-w-4xl mx-auto py-16 text-white">
      <h1 className="text-4xl font-bold text-center mt-4 mb-8">❓ Frequently Asked Questions</h1>

      <div className="space-y-6">
        {faqs.map((f, i) => (
          <div key={i} className="bg-black/40 p-6 rounded-xl border border-amber-400">
            <h2 className="text-xl font-bold text-amber-400">{f.q}</h2>
            <p className="text-gray-300 mt-2">{f.a}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
