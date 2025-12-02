import React, { useState } from 'react';
import { motion } from 'framer-motion';



const faqs = [
  {
    q: 'How do I create a support ticket?',
    a: 'Click the "Create Ticket" button in the contact form, fill out the details and hit Submit. Our team will respond within 24 hours.'
  },
  {
    q: 'I didn\'t receive my order — what should I do?',
    a: 'Check your tracking link first. If there\'s an issue, raise a delivery ticket with your order ID and we will investigate.'
  },
  {
    q: 'How can I apply for a refund?',
    a: 'Open a payment support ticket with proof of purchase and a short explanation. Refunds are processed within 7 business days after approval.'
  },
  {
    q: 'Can I contact support by phone?',
    a: 'Yes — you can use the phone number at the bottom of the site, or start a live chat during business hours.'
  }
];

const Support=()=> {
  const [openIdx, setOpenIdx] = useState(null);
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState(null);

  const toggleFAQ = (i) => setOpenIdx(openIdx === i ? null : i);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!form.name || !form.email || !form.subject || !form.message) {
      setSuccess({ ok: false, msg: 'Please fill all fields.' });
      return;
    }
    setSending(true);
    setSuccess(null);
    try {
      
      await new Promise((r) => setTimeout(r, 900));
      setSending(false);
      setSuccess({ ok: true, msg: 'Ticket created — our support team will contact you soon.' });
      setForm({ name: '', email: '', subject: '', message: '' });
    } catch (err) {
      setSending(false);
      setSuccess({ ok: false, msg: 'Something went wrong. Try again later.' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#080808] via-[#0b0b0b] to-[#0f1724] text-gray-100">
      
      <header className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <p className="inline-block bg-green-600 text-black px-3 py-1 rounded-full text-xs font-semibold">Support Center</p>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">We\'re here to help — fast, personal support</h1>
            <p className="text-gray-300 max-w-xl">Facing an issue? Search our FAQs, create a ticket, or start live chat. We support orders, payments, technical help and account issues.</p>

            <div className="flex gap-3">
              <a href="#contact" className="px-5 py-3 rounded-lg bg-green-600 text-black font-semibold shadow-lg">Create Ticket</a>
              <a href="#faqs" className="px-5 py-3 rounded-lg border border-gray-700 hover:border-gray-500">Read FAQs</a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="bg-gradient-to-tr from-[#0b1220] to-[#12212f] rounded-3xl p-6 shadow-2xl">
              <img src="https://images.pexels.com/photos/4050299/pexels-photo-4050299.jpeg" alt="support" className="w-full h-72 object-cover rounded-2xl" />
            </div>

            <div className="absolute -bottom-6 left-6 w-80 p-4 bg-[#07121a] rounded-2xl shadow-xl border border-gray-800">
              <p className="text-sm text-gray-400">Live support</p>
              <h3 className="font-bold text-lg">Chat with our team</h3>
              <p className="text-sm text-gray-400">Mon — Fri, 9am — 6pm</p>
              <button className="mt-3 w-full bg-green-600 text-black py-2 rounded-lg font-semibold">Start Live Chat</button>
            </div>
          </motion.div>
        </div>
      </header>

     
      <section className="max-w-6xl mx-auto px-6 py-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { title: 'Orders & Shipping', desc: 'Track orders, change delivery, missing packages', icon: '📦' },
          { title: 'Payments & Refunds', desc: 'Payment issues, refunds and receipts', icon: '💳' },
          { title: 'Technical Help', desc: 'Bugs, crashes, login problems', icon: '🛠️' }
        ].map((card, i) => (
          <motion.div key={i} whileHover={{ y: -6 }} className="bg-[#07121a] p-6 rounded-2xl shadow-lg border border-gray-800">
            <div className="text-3xl">{card.icon}</div>
            <h4 className="font-bold text-xl mt-3">{card.title}</h4>
            <p className="text-gray-400 mt-2">{card.desc}</p>
            <div className="mt-4">
              <a href="#contact" className="text-green-500 font-semibold">Create Ticket →</a>
            </div>
          </motion.div>
        ))}
      </section>

      
      <main className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Contact Form */}
        <motion.div id="contact" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="lg:col-span-2 bg-[#07121a] rounded-3xl p-8 shadow-xl border border-gray-800">
          <h2 className="text-2xl font-bold mb-2">Create a Support Ticket</h2>
          <p className="text-gray-400 mb-6">Tell us what\'s happening and we\'ll be in touch — usually within one business day.</p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input name="name" value={form.name} onChange={handleChange} placeholder="Full name" className="bg-[#0b1216] border border-gray-800 rounded-lg px-4 py-3 focus:outline-none" />
              <input name="email" value={form.email} onChange={handleChange} placeholder="Email address" className="bg-[#0b1216] border border-gray-800 rounded-lg px-4 py-3 focus:outline-none" />
            </div>

            <input name="subject" value={form.subject} onChange={handleChange} placeholder="Subject" className="w-full bg-[#0b1216] border border-gray-800 rounded-lg px-4 py-3 focus:outline-none" />

            <textarea name="message" value={form.message} onChange={handleChange} rows="6" placeholder="Describe your issue..." className="w-full bg-[#0b1216] border border-gray-800 rounded-lg px-4 py-3 focus:outline-none" />

            <div className="flex items-center gap-4">
              <button type="submit" disabled={sending} className="bg-green-600 text-black px-6 py-3 rounded-lg font-semibold shadow">{sending ? 'Sending...' : 'Create Ticket'}</button>

              <button type="button" onClick={() => setForm({ name: '', email: '', subject: '', message: '' })} className="px-4 py-2 rounded-lg border border-gray-700">Clear</button>

              {success && (
                <p className={`ml-auto text-sm ${success.ok ? 'text-green-400' : 'text-red-400'}`}>{success.msg}</p>
              )}
            </div>
          </form>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-[#0b0f12] px-4 py-3 rounded-lg border border-gray-800">
              <p className="text-xs text-gray-400">Estimated response</p>
              <p className="font-bold text-lg mt-1">Within 24 hours</p>
            </div>
            <div className="bg-[#0b0f12] px-4 py-3 rounded-lg border border-gray-800">
              <p className="text-xs text-gray-400">Support hours</p>
              <p className="font-bold text-lg mt-1">Mon–Fri • 09:00 – 18:00</p>
            </div>
          </div>
        </motion.div>

       
        <aside className="bg-[#07121a] rounded-3xl p-6 shadow-lg border border-gray-800">
          <h3 className="text-xl font-bold mb-4">Frequently Asked</h3>

          <div className="space-y-3">
            {faqs.map((f, i) => (
              <div key={i} className="border border-gray-800 rounded-lg overflow-hidden">
                <button onClick={() => toggleFAQ(i)} className="w-full text-left px-4 py-3 flex justify-between items-center">
                  <div>
                    <div className="font-semibold">{f.q}</div>
                    <div className="text-xs text-gray-400 mt-1">{openIdx === i ? 'Hide answer' : 'Show answer'}</div>
                  </div>
                  <div className={`transform transition-transform ${openIdx === i ? 'rotate-180' : ''}`}>⬇️</div>
                </button>

                <motion.div initial={{ height: 0 }} animate={{ height: openIdx === i ? 'auto' : 0 }} transition={{ duration: 0.25 }} className="px-4">
                  {openIdx === i && <p className="pb-4 text-gray-300">{f.a}</p>}
                </motion.div>
              </div>
            ))}
          </div>

          <div className="mt-6">
            <h4 className="font-semibold">Still need help?</h4>
            <p className="text-gray-400 text-sm">Start a live chat or call our support line.</p>
            <div className="mt-3">
              <button className="w-full bg-green-600 text-black py-2 rounded-lg font-semibold">Start Live Chat</button>
              <p className="mt-3 text-sm text-gray-400">Phone: +1 (555) 888-0022</p>
            </div>
          </div>
        </aside>
      </main>

      
      <footer className="mt-12">
        <div className="max-w-6xl mx-auto px-6 py-10 bg-gradient-to-t from-[#07121a] to-transparent rounded-t-3xl border-t border-gray-800">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <h4 className="text-2xl font-bold">Need urgent support?</h4>
              <p className="text-gray-400">Call us now or start an emergency chat and we\'ll prioritize you.</p>
            </div>
            <div className="flex gap-4">
              <a href="tel:+15558880022" className="px-5 py-3 rounded-lg bg-red-600 font-semibold">Call Now</a>
              <a href="#contact" className="px-5 py-3 rounded-lg bg-green-600 text-black font-semibold">Create Ticket</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
export default Support