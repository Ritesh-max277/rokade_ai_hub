import React, { useState, useEffect } from 'react';
import { Lock, Database, Users, Image as ImageIcon, Trash2, Plus, RefreshCw, Key, ShieldCheck } from 'lucide-react';
import { dbService } from '../services/dbService';
import { User, GalleryImage, UserRole } from '../types';
import { useNavigate } from 'react-router-dom';

const AdminDashboard: React.FC = () => {
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [students, setStudents] = useState<User[]>([]);
  const [galleryImages, setGalleryImages] = useState<GalleryImage[]>([]);
  
  // Gallery Form
  const [newImageUrl, setNewImageUrl] = useState('');
  const [newImageAlt, setNewImageAlt] = useState('');

  // Password Change Form
  const [newPassword, setNewPassword] = useState('');
  const [passwordMsg, setPasswordMsg] = useState('');

  useEffect(() => {
    // Check if user is logged in as admin
    const storedUser = localStorage.getItem('rokade_user');
    if (storedUser) {
      const user = JSON.parse(storedUser);
      if (user.role !== UserRole.ADMIN) {
        navigate('/'); // Redirect non-admins
        return;
      }
      setCurrentUser(user);
    } else {
      navigate('/login');
      return;
    }

    loadData();
  }, [navigate]);

  const loadData = () => {
    const allUsers = dbService.getAllUsers();
    setStudents(allUsers.filter(u => u.role === UserRole.STUDENT));
    setGalleryImages(dbService.getGalleryImages());
  };

  const handleAddImage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newImageUrl) return;

    const newImage: GalleryImage = {
      id: Date.now().toString(),
      url: newImageUrl,
      alt: newImageAlt || 'Gallery Image'
    };

    dbService.addGalleryImage(newImage);
    setNewImageUrl('');
    setNewImageAlt('');
    loadData(); // Refresh list
    alert('फोटो यशस्वीरित्या जोडला! (Photo Added)');
  };

  const handleDeleteImage = (id: string) => {
    if (window.confirm('तुम्हाला नक्की हा फोटो काढायचा आहे का? (Are you sure?)')) {
      dbService.removeGalleryImage(id);
      loadData();
    }
  };

  const handleChangePassword = (e: React.FormEvent) => {
    e.preventDefault();
    if (!currentUser) return;

    if (newPassword.length < 4) {
      setPasswordMsg('पासवर्ड किमान ४ अक्षरांचा असावा.');
      return;
    }

    const success = dbService.updateUserPassword(currentUser.username, newPassword);
    if (success) {
      setPasswordMsg('✅ पासवर्ड यशस्वीरित्या बदलला! (Password Changed)');
      setNewPassword('');
    } else {
      setPasswordMsg('❌ पासवर्ड बदलण्यात त्रुटी आली.');
    }
  };

  if (!currentUser) return null;

  return (
    <div className="py-12 bg-slate-900 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex items-center justify-between mb-8 border-b border-slate-700 pb-4">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-gradient-to-tr from-blue-600 to-purple-600 rounded-full shadow-lg">
               <ShieldCheck className="h-8 w-8 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-white">ॲडमिन डॅशबोर्ड</h1>
              <p className="text-slate-400 text-sm">Welcome, {currentUser.name}</p>
            </div>
          </div>
          <button onClick={loadData} className="p-2 bg-slate-800 rounded-full hover:bg-slate-700 border border-slate-600 transition-transform hover:rotate-180 duration-500">
            <RefreshCw className="h-5 w-5 text-slate-300" />
          </button>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          
          {/* Student Count */}
          <div className="bg-slate-800 p-6 rounded-xl border border-slate-700 flex items-center gap-4 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-20 h-20 bg-blue-500/10 rounded-full -mr-10 -mt-10 blur-xl group-hover:bg-blue-500/20 transition-all"></div>
            <div className="p-3 bg-blue-500/20 rounded-lg">
              <Users className="h-8 w-8 text-blue-400" />
            </div>
            <div>
              <p className="text-slate-400 text-sm">एकूण विद्यार्थी (Registered)</p>
              <p className="text-4xl font-bold text-white mt-1">{students.length}</p>
            </div>
          </div>

          {/* Gallery Count */}
          <div className="bg-slate-800 p-6 rounded-xl border border-slate-700 flex items-center gap-4 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-20 h-20 bg-pink-500/10 rounded-full -mr-10 -mt-10 blur-xl group-hover:bg-pink-500/20 transition-all"></div>
            <div className="p-3 bg-pink-500/20 rounded-lg">
              <ImageIcon className="h-8 w-8 text-pink-400" />
            </div>
            <div>
              <p className="text-slate-400 text-sm">गॅलरी फोटोज</p>
              <p className="text-4xl font-bold text-white mt-1">{galleryImages.length}</p>
            </div>
          </div>

          {/* Database Link */}
          <div className="bg-slate-800 p-6 rounded-xl border border-slate-700 flex items-center gap-4">
             <div className="p-3 bg-green-500/20 rounded-lg">
              <Database className="h-8 w-8 text-green-400" />
            </div>
            <div>
               <p className="text-slate-400 text-sm">Google Sheets Database</p>
               <a href="https://docs.google.com/spreadsheets/u/0/" target="_blank" className="text-green-400 text-sm hover:underline font-semibold mt-1 block">
                 View Data →
               </a>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* --- LEFT COLUMN --- */}
          <div className="space-y-8">
            
            {/* Gallery Management */}
            <div className="bg-slate-800 rounded-xl border border-slate-700 overflow-hidden shadow-lg">
              <div className="p-6 border-b border-slate-700 bg-slate-800/50">
                <h2 className="text-xl font-bold text-white flex items-center gap-2">
                  <ImageIcon className="h-5 w-5 text-pink-400" /> गॅलरी मॅनेजमेंट (Gallery)
                </h2>
                <p className="text-xs text-slate-400 mt-1">येथे तुम्ही वेबसाइटवरील फोटो बदलू शकता.</p>
              </div>
              
              <div className="p-6">
                {/* Add Image Form */}
                <form onSubmit={handleAddImage} className="mb-6 space-y-4 bg-slate-900/50 p-4 rounded-lg border border-slate-700">
                  <h3 className="text-sm font-semibold text-slate-300">नवीन फोटो अपलोड करा (URL):</h3>
                  <div>
                    <input
                      type="url"
                      required
                      placeholder="https://example.com/image.jpg"
                      className="w-full bg-slate-800 border border-slate-600 rounded px-3 py-2 text-white text-sm focus:border-blue-500 outline-none"
                      value={newImageUrl}
                      onChange={(e) => setNewImageUrl(e.target.value)}
                    />
                  </div>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      placeholder="फोटोचे नाव (Alt Text)"
                      className="flex-1 bg-slate-800 border border-slate-600 rounded px-3 py-2 text-white text-sm focus:border-blue-500 outline-none"
                      value={newImageAlt}
                      onChange={(e) => setNewImageAlt(e.target.value)}
                    />
                    <button type="submit" className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded flex items-center gap-2 text-sm font-bold">
                      <Plus className="h-4 w-4" /> जोडा
                    </button>
                  </div>
                </form>

                {/* Image List (Scrollable) */}
                <h3 className="text-sm font-semibold text-slate-300 mb-3">सध्याचे फोटोज (Delete करण्यासाठी लाल बटन दाबा):</h3>
                <div className="grid grid-cols-2 gap-4 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
                  {galleryImages.map(img => (
                    <div key={img.id} className="relative group rounded-lg overflow-hidden border border-slate-700 shadow-md">
                      <img 
                        src={img.url} 
                        alt={img.alt} 
                        className="w-full h-32 object-cover"
                      />
                      {/* Delete Overlay */}
                      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <button 
                          onClick={() => handleDeleteImage(img.id)}
                          className="bg-red-600 hover:bg-red-700 text-white px-3 py-1.5 rounded-full flex items-center gap-2 text-xs font-bold shadow-lg transform scale-90 group-hover:scale-100 transition-transform"
                        >
                          <Trash2 className="h-4 w-4" /> डिलीट करा
                        </button>
                      </div>
                      <div className="absolute bottom-0 w-full bg-black/70 text-[10px] text-white p-1 truncate text-center">
                        {img.alt}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Change Password Section */}
            <div className="bg-slate-800 rounded-xl border border-slate-700 overflow-hidden shadow-lg">
              <div className="p-6 border-b border-slate-700 bg-slate-800/50">
                <h2 className="text-xl font-bold text-white flex items-center gap-2">
                  <Key className="h-5 w-5 text-yellow-400" /> पासवर्ड बदला (Change Password)
                </h2>
              </div>
              <div className="p-6">
                <form onSubmit={handleChangePassword} className="flex flex-col gap-4">
                   <div>
                     <label className="text-sm text-slate-400 mb-1 block">नवीन पासवर्ड (New Password)</label>
                     <input 
                       type="text" 
                       value={newPassword}
                       onChange={(e) => setNewPassword(e.target.value)}
                       placeholder="नवीन पासवर्ड टाका"
                       className="w-full bg-slate-900 border border-slate-600 rounded px-3 py-2 text-white focus:border-yellow-500 outline-none"
                     />
                   </div>
                   <button type="submit" className="bg-yellow-600 hover:bg-yellow-500 text-white py-2 rounded font-bold transition-colors">
                     अपडेट करा
                   </button>
                   {passwordMsg && <p className="text-sm font-semibold animate-pulse">{passwordMsg}</p>}
                </form>
              </div>
            </div>

          </div>

          {/* --- RIGHT COLUMN --- */}
          <div>
            {/* Student List */}
            <div className="bg-slate-800 rounded-xl border border-slate-700 overflow-hidden shadow-lg h-full">
              <div className="p-6 border-b border-slate-700 bg-slate-800/50 flex justify-between items-center">
                <h2 className="text-xl font-bold text-white flex items-center gap-2">
                  <Users className="h-5 w-5 text-blue-400" /> विद्यार्थ्यांची यादी
                </h2>
                <span className="text-xs bg-blue-900 text-blue-200 px-2 py-1 rounded">
                  Total: {students.length}
                </span>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead className="bg-slate-900/80 text-slate-400 text-sm sticky top-0">
                    <tr>
                      <th className="p-4">नाव (Name)</th>
                      <th className="p-4">युजरनेम</th>
                      <th className="p-4">तारीख</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-700">
                    {students.length === 0 ? (
                      <tr>
                        <td colSpan={3} className="p-8 text-center text-slate-500">
                          अद्याप कोणत्याही विद्यार्थ्याने नोंदणी केलेली नाही.
                        </td>
                      </tr>
                    ) : (
                      students.map(student => (
                        <tr key={student.id} className="hover:bg-slate-700/50 transition-colors">
                          <td className="p-4">
                            <div className="font-medium text-white">{student.name}</div>
                            <div className="text-xs text-slate-500">{student.email}</div>
                          </td>
                          <td className="p-4 text-blue-300 font-mono text-sm">{student.username}</td>
                          <td className="p-4 text-slate-400 text-sm">
                            {new Date(student.createdAt).toLocaleDateString('en-IN')}
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;