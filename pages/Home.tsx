import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { dbService } from '../services/dbService';
import { GalleryImage } from '../types';

const Home: React.FC = () => {
  const [galleryImages, setGalleryImages] = useState<GalleryImage[]>([]);

  useEffect(() => {
    // Load images from service (localStorage)
    setGalleryImages(dbService.getGalleryImages());
  }, []);

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative py-24 lg:py-36 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 animate-gradient">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[120px] -z-10" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl lg:text-7xl font-bold tracking-tight mb-6 leading-tight">
            भविष्यातील शिक्षणाची <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
              अद्ययावत तयारी
            </span>
          </h1>
          
          <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
            Rokade AI Hub मध्ये तुमचे स्वागत आहे! आम्ही ५ वी ते १२ वी च्या विद्यार्थ्यांसाठी कोडिंग, AI आणि रोबोटिक्सचे शिक्षण देतो.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/programs"
              className="w-full sm:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-full font-bold transition-all hover:scale-105 shadow-lg shadow-blue-500/30 flex items-center justify-center gap-2"
            >
              अभ्यासक्रम पहा <ArrowRight className="h-5 w-5" />
            </Link>
            <Link
              to="/enroll"
              className="w-full sm:w-auto px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white rounded-full font-bold transition-all border border-slate-600 hover:border-blue-400"
            >
              प्रवेश घ्या (Register)
            </Link>
          </div>
        </div>
      </section>

      {/* About / Vision */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur-lg opacity-30"></div>
              <img 
                src="https://picsum.photos/id/3/800/600" 
                alt="Demo Class" 
                className="relative rounded-2xl shadow-2xl border border-slate-700 animate-float"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6 text-white">आमचे ध्येय (Vision)</h2>
              <p className="text-slate-400 text-lg mb-6">
                ग्रामीण आणि शहरी भागातील प्रत्येक विद्यार्थ्याला तंत्रज्ञानाचे ज्ञान मिळावे आणि ते भविष्यातील आव्हानांसाठी तयार व्हावेत. प्रॅक्टिकल प्रोजेक्ट्स आणि सोप्या भाषेत शिक्षण हे आमचे वैशिष्ट्य आहे.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-slate-300">
                  <CheckCircle className="text-green-500 h-5 w-5" /> १०,०००+ विद्यार्थ्यांना प्रशिक्षित करण्याचे लक्ष
                </li>
                <li className="flex items-center gap-3 text-slate-300">
                  <CheckCircle className="text-green-500 h-5 w-5" /> माफक दरात उच्च दर्जाचे शिक्षण
                </li>
                <li className="flex items-center gap-3 text-slate-300">
                  <CheckCircle className="text-green-500 h-5 w-5" /> मातृभाषेतून (मराठी/English) सोपे मार्गदर्शन
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-12">गॅलरी (Gallery)</h2>
          
          {galleryImages.length === 0 ? (
            <p className="text-slate-500">फोटो लवकरच अपलोड केले जातील...</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {galleryImages.map((img) => (
                <div key={img.id} className="bg-slate-800 rounded-xl overflow-hidden shadow-lg border border-slate-700 hover:border-pink-500 transition-all group relative">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img 
                      src={img.url} 
                      alt={img.alt} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                    />
                  </div>
                </div>
              ))}
            </div>
          )}

          <div className="mt-8">
            <a href="https://instagram.com/rokade_ai_hub" target="_blank" rel="noopener noreferrer" className="text-pink-400 hover:text-pink-300 font-medium inline-flex items-center gap-2">
              Instagram वर फॉलो करा <ArrowRight className="h-4 w-4"/>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;