import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BookOpen, Award, Calendar } from 'lucide-react';

const Dashboard: React.FC = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('rokade_user');
    if (!storedUser) {
      navigate('/login');
      return;
    }
    setUser(JSON.parse(storedUser));
  }, [navigate]);

  if (!user) return null;

  return (
    <div className="py-12 bg-slate-900 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold mb-2">नमस्ते, {user.name}! 👋</h1>
        <p className="text-slate-400 mb-8">तुमच्या प्रगतीचा आढावा (Your Progress)</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-slate-800 p-6 rounded-xl border border-slate-700">
            <div className="flex items-center gap-4 mb-2">
              <div className="p-2 bg-blue-500/20 rounded-lg">
                <BookOpen className="text-blue-400 h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold text-white">अभ्यासक्रम</h3>
            </div>
            <p className="text-2xl font-bold">Python Basics</p>
            <div className="mt-4 w-full bg-slate-700 rounded-full h-2.5">
              <div className="bg-blue-600 h-2.5 rounded-full" style={{width: '45%'}}></div>
            </div>
            <p className="text-xs text-slate-400 mt-2">45% पूर्ण</p>
          </div>

          <div className="bg-slate-800 p-6 rounded-xl border border-slate-700">
             <div className="flex items-center gap-4 mb-2">
              <div className="p-2 bg-purple-500/20 rounded-lg">
                <Calendar className="text-purple-400 h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold text-white">पुढील क्लास</h3>
            </div>
            <p className="text-xl font-bold">उद्या, सायं. 5:00</p>
            <p className="text-sm text-slate-400">Topic: Loops in Python</p>
          </div>

          <div className="bg-slate-800 p-6 rounded-xl border border-slate-700">
             <div className="flex items-center gap-4 mb-2">
              <div className="p-2 bg-yellow-500/20 rounded-lg">
                <Award className="text-yellow-400 h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold text-white">सर्टिफिकेट</h3>
            </div>
            <p className="text-slate-400 text-sm">कोर्स पूर्ण झाल्यावर येथे सर्टिफिकेट दिसेल.</p>
          </div>
        </div>

        <div className="bg-slate-800/50 p-8 rounded-xl border border-slate-700 text-center">
            <h3 className="text-xl font-bold mb-4">सूचना</h3>
            <p className="text-slate-400">सध्या तुमच्यासाठी कोणतेही नवीन अपडेट्स नाहीत. वर्गात वेळेवर हजर राहा!</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;