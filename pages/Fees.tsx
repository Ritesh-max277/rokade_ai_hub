import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Building2, Check } from 'lucide-react';

const Fees: React.FC = () => {
  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">फीस रचना (Fees Structure)</h1>
          <p className="text-slate-400">आम्ही शिक्षणाला परवडणारे बनवले आहे.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          
          {/* Village Plan */}
          <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-green-500/10 rounded-full -mr-16 -mt-16 blur-2xl"></div>
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-green-500/20 rounded-lg">
                <MapPin className="h-8 w-8 text-green-400" />
              </div>
              <h2 className="text-2xl font-bold text-white">गावाकडची मुले (Village Plan)</h2>
            </div>
            <div className="mb-6">
              <span className="text-4xl font-bold text-white">₹500</span>
              <span className="text-slate-400"> / महिना</span>
            </div>
            <p className="text-slate-400 mb-6 border-b border-slate-700 pb-6">
              पूर्ण कोर्स (१० महिने): <strong>₹5,000</strong>
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-2 text-slate-300"><Check className="h-5 w-5 text-green-400"/> ऑफलाइन/ऑनलाइन क्लासेस</li>
              <li className="flex items-center gap-2 text-slate-300"><Check className="h-5 w-5 text-green-400"/> वैयक्तिक मार्गदर्शन</li>
              <li className="flex items-center gap-2 text-slate-300"><Check className="h-5 w-5 text-green-400"/> सर्टिफिकेट मिळेल</li>
            </ul>
            <Link to="/enroll" className="block text-center w-full py-3 border border-green-500 text-green-400 hover:bg-green-500 hover:text-white rounded-lg font-bold transition-all">
              निवडा
            </Link>
          </div>

          {/* City Plan */}
          <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700 relative overflow-hidden">
             <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full -mr-16 -mt-16 blur-2xl"></div>
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-blue-500/20 rounded-lg">
                <Building2 className="h-8 w-8 text-blue-400" />
              </div>
              <h2 className="text-2xl font-bold text-white">शहरातील मुले (City Plan)</h2>
            </div>
            <div className="mb-6">
              <span className="text-4xl font-bold text-white">₹800</span>
              <span className="text-slate-400"> / महिना</span>
            </div>
            <p className="text-slate-400 mb-6 border-b border-slate-700 pb-6">
              पूर्ण कोर्स (१० महिने): <strong>₹8,000</strong>
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-2 text-slate-300"><Check className="h-5 w-5 text-blue-400"/> ॲडव्हान्स लॅब सुविधा</li>
              <li className="flex items-center gap-2 text-slate-300"><Check className="h-5 w-5 text-blue-400"/> तज्ञ शिक्षकांचे मार्गदर्शन</li>
              <li className="flex items-center gap-2 text-slate-300"><Check className="h-5 w-5 text-blue-400"/> प्रोजेक्ट किट्स सपोर्ट</li>
            </ul>
            <Link to="/enroll" className="block text-center w-full py-3 border border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white rounded-lg font-bold transition-all">
              निवडा
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Fees;