import React, { useState } from 'react';

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Wird gesendet...");
    
    const formData = new FormData(event.target);
    formData.append("access_key", "d8d02693-af4a-4c5f-bfd3-389e2e52c79f");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("✅ Nachricht erfolgreich gesendet!");
      event.target.reset();
      setTimeout(() => setResult(""), 5000); // Nachricht nach 5 Sekunden ausblenden
    } else {
      setResult("❌ Fehler beim Senden. Bitte versuche es erneut.");
    }
  };

  return (
    <div name='contact' className='w-full min-h-screen bg-slate-900 text-gray-300 py-20'>
      <div className='max-w-[600px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8 text-center'>
          <p className='text-4xl font-bold inline border-b-4 border-cyan-500'>
            Kontakt
          </p>
          <p className='text-gray-400 py-4'>
            Schreib mir eine Nachricht - ich melde mich zurück!
          </p>
        </div>

        <form onSubmit={onSubmit} className='flex flex-col gap-4'>
          <input
            className='bg-slate-800 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500 text-white'
            type='text'
            placeholder='Name'
            name='name'
            required
          />
          <input
            className='bg-slate-800 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500 text-white'
            type='email'
            placeholder='E-Mail'
            name='email'
            required
          />
          <textarea
            className='bg-slate-800 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500 text-white'
            name='message'
            rows='6'
            placeholder='Deine Nachricht...'
            required
          ></textarea>

          <button
            type='submit'
            className='text-white bg-gradient-to-r from-cyan-500 to-blue-500 px-6 py-3 my-4 mx-auto w-fit rounded-md hover:scale-105 transition-transform duration-300 font-semibold'
          >
            Absenden
          </button>

          {result && (
            <p className='text-center text-lg font-semibold animate-pulse'>
              {result}
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default Contact;

