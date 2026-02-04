import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { dbService } from '../services/dbService';
import { UserRole } from '../types';
import { Brain, Lock, User as UserIcon } from 'lucide-react';

const Login: React.FC = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    const cleanUsername = formData.username.trim();

    // Simulate Network Delay for animation feel
    setTimeout(() => {
      const user = dbService.findUserByUsername(cleanUsername);
      
      if (user && user.password === formData.password) {
        if (user.role === UserRole.ADMIN) {
          localStorage.setItem('rokade_user', JSON.stringify(user));
          navigate('/admin');
          window.location.reload(); 
        } else {
          setError('विद्यार्थी लॉगिन सध्या बंद आहे. फक्त ॲडमिन प्रवेश करू शकतात.');
          setLoading(false);
        }
      } else {
        setError('युजरनेम किंवा पासवर्ड चुकीचा आहे.');
        setLoading(false);
      }
    }, 1500);
  };

  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-slate-900 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-slate-900 to-blue-900 animate-gradient opacity-50 z-0"></div>

      {/* Floating Card */}
      <div className="max-w-md w-full space-y-8 bg-slate-800/80 backdrop-blur-xl p-8 rounded-2xl border border-slate-700 shadow-2xl z-10 animate-float">
        <div className="text-center">
          <div className="mx-auto h-16 w-16 bg-gradient-to-tr from-blue-500 to-purple-500 rounded-full flex items-center justify-center animate-pulse shadow-lg shadow-blue-500/40">
            <Lock className="h-8 w-8 text-white" />
          </div>
          <h2 className="mt-6 text-3xl font-extrabold text-white">
            ॲडमिन लॉगिन
          </h2>
          <p className="mt-2 text-sm text-slate-400">
            फक्त ॲडमिन (Ritesh Rokade) साठी प्रवेश
          </p>
        </div>
        
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          {error && <div className="text-red-400 text-sm text-center bg-red-500/10 p-2 rounded border border-red-500/20">{error}</div>}
          
          <div className="space-y-4">
            <div>
              <label className="text-sm text-slate-300 mb-1 block font-medium">युजरनेम (Username)</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <UserIcon className="h-5 w-5 text-slate-500" />
                </div>
                <input
                  type="text"
                  required
                  className="appearance-none rounded-lg block w-full pl-10 px-4 py-3 border border-slate-600 bg-slate-900/50 placeholder-slate-500 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all hover:border-slate-500 focus:-translate-y-1 focus:shadow-lg"
                  placeholder="admin"
                  value={formData.username}
                  onChange={(e) => setFormData({...formData, username: e.target.value})}
                />
              </div>
            </div>
            <div>
              <label className="text-sm text-slate-300 mb-1 block font-medium">पासवर्ड (Password)</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-slate-500" />
                </div>
                <input
                  type="password"
                  required
                  className="appearance-none rounded-lg block w-full pl-10 px-4 py-3 border border-slate-600 bg-slate-900/50 placeholder-slate-500 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all hover:border-slate-500 focus:-translate-y-1 focus:shadow-lg"
                  placeholder="••••••••"
                  value={formData.password}
                  onChange={(e) => setFormData({...formData, password: e.target.value})}
                />
              </div>
            </div>
          </div>

          <div>
            <button
              type="submit"
              disabled={loading}
              className={`group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-bold rounded-lg text-white 
              ${loading ? 'bg-blue-800 cursor-wait' : 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 transform hover:-translate-y-0.5 hover:shadow-lg hover:shadow-blue-500/30'} 
              transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 focus:ring-offset-slate-900`}
            >
              {loading ? (
                <span className="flex items-center gap-2">
                  <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  प्रक्रिया सुरू आहे...
                </span>
              ) : "लॉगिन करा"}
            </button>
          </div>
        </form>
        
        <div className="text-center mt-4">
           <p className="text-xs text-slate-500 mt-4">
             Username: <strong>admin</strong> | Password: <strong>Rokadeaihub</strong>
           </p>
        </div>
      </div>
    </div>
  );
};

export default Login;