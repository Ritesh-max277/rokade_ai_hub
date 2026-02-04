import React from 'react';
import { Link } from 'react-router-dom';
import { Code2, Laptop, Database, PenTool } from 'lucide-react';

const Programs: React.FC = () => {
  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">आमचे अभ्यासक्रम (Programs)</h1>
          <p className="text-slate-400">वयोगटानुसार डिझाइन केलेले विशेष कोर्सेस.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Grade 5-7 */}
          <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700 hover:border-blue-500 transition-all hover:shadow-2xl hover:-translate-y-2">
            <div className="w-14 h-14 bg-blue-500/20 rounded-xl flex items-center justify-center mb-6">
              <PenTool className="h-8 w-8 text-blue-400" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">वर्ग ५ ते ७ (Beginners)</h3>
            <p className="text-slate-400 mb-6 text-sm">लहान मुलांसाठी कोडिंगची पहिली पायरी.</p>
            <ul className="space-y-3 mb-8 text-slate-300">
              <li className="flex gap-2">🔹 Scratch Programming</li>
              <li className="flex gap-2">🔹 Basic Logic Building</li>
              <li className="flex gap-2">🔹 लहान गेम्स बनवणे</li>
              <li className="flex gap-2">🔹 गणिताची कोडी सोडवणे</li>
            </ul>
            <Link to="/enroll" className="block text-center w-full py-3 bg-slate-700 hover:bg-blue-600 text-white rounded-lg font-semibold transition-colors">
              प्रवेश घ्या
            </Link>
          </div>

          {/* Grade 8-10 */}
          <div className="bg-slate-800 rounded-2xl p-8 border-2 border-blue-500/50 shadow-blue-500/20 shadow-lg transform scale-105 relative z-10">
            <div className="absolute top-0 right-0 bg-blue-500 text-white text-xs px-3 py-1 rounded-bl-lg font-bold">POPULAR</div>
            <div className="w-14 h-14 bg-purple-500/20 rounded-xl flex items-center justify-center mb-6">
              <Laptop className="h-8 w-8 text-purple-400" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">वर्ग ८ ते १० (Intermediate)</h3>
            <p className="text-slate-400 mb-6 text-sm">वेब आणि सॉफ्टवेअर डेव्हलपमेंटची ओळख.</p>
            <ul className="space-y-3 mb-8 text-slate-300">
              <li className="flex gap-2">🔹 Python Basics</li>
              <li className="flex gap-2">🔹 HTML / CSS (Web Design)</li>
              <li className="flex gap-2">🔹 Mini Projects</li>
              <li className="flex gap-2">🔹 कॅल्क्युलेटर ॲप बनवणे</li>
            </ul>
            <Link to="/enroll" className="block text-center w-full py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white rounded-lg font-bold transition-colors">
              प्रवेश घ्या
            </Link>
          </div>

          {/* Grade 11-12 */}
          <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700 hover:border-blue-500 transition-all hover:shadow-2xl hover:-translate-y-2">
            <div className="w-14 h-14 bg-pink-500/20 rounded-xl flex items-center justify-center mb-6">
              <Database className="h-8 w-8 text-pink-400" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">वर्ग ११ ते १२ (Advanced)</h3>
            <p className="text-slate-400 mb-6 text-sm">AI आणि डेटा सायन्सचे प्रॅक्टिकल ज्ञान.</p>
            <ul className="space-y-3 mb-8 text-slate-300">
              <li className="flex gap-2">🔹 Advanced Python</li>
              <li className="flex gap-2">🔹 AI Basics & ML</li>
              <li className="flex gap-2">🔹 डेटा सायन्स प्रोजेक्ट्स</li>
              <li className="flex gap-2">🔹 रोबोटिक्स ओळख</li>
            </ul>
            <Link to="/enroll" className="block text-center w-full py-3 bg-slate-700 hover:bg-blue-600 text-white rounded-lg font-semibold transition-colors">
              प्रवेश घ्या
            </Link>
          </div>

        </div>

        <div className="mt-16 bg-slate-800/50 p-6 rounded-xl text-center border border-slate-700">
          <p className="text-slate-300">
            💡 <strong>टीप:</strong> सर्व अभ्यासक्रम प्रोजेक्ट-बेस्ड (Project Based Learning) आहेत. विद्यार्थ्यांच्या स्पर्धा देखील घेतल्या जातात.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Programs;