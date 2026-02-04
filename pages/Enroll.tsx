import React from 'react';

const Enroll: React.FC = () => {
  return (
    <div className="py-20 bg-slate-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold mb-4">प्रवेश अर्ज (Enrollment Form)</h1>
          <p className="text-slate-400">खालील फॉर्म भरून आपली जागा निश्चित करा.</p>
        </div>

        <div className="bg-white rounded-lg overflow-hidden shadow-2xl h-[800px]">
          {/* 
            INSTRUCTION TO USER: 
            Replace the 'src' attribute below with your actual Google Form Embed URL.
            1. Go to your Google Form
            2. Click Send -> < > (Embed)
            3. Copy the URL from the 'src'
          */}
          <iframe 
            src="https://docs.google.com/forms/d/e/1FAIpQLSeLbdhGBaD3OE1rQOYPLFfn-DCjRKpvPBT9GeLhV6un8HkBIA/viewform?embedded=true" 
            width="100%" 
            height="100%" 
            frameBorder="0" 
            marginHeight={0} 
            marginWidth={0}
            title="Enrollment Form"
          >
            Loading…
          </iframe>
        </div>
        
        <div className="text-center mt-8 text-slate-500 text-sm">
          फॉर्म भरण्यात अडचण येत असल्यास, आम्हाला WhatsApp वर संपर्क करा.
        </div>
      </div>
    </div>
  );
};

export default Enroll;