import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, LogOut, ShieldCheck, Instagram, MessageCircle, Linkedin } from 'lucide-react';
import { UserRole } from '../types';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [user, setUser] = useState<any>(null);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem('rokade_user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, [location]);

  const handleLogout = () => {
    localStorage.removeItem('rokade_user');
    setUser(null);
    navigate('/');
  };

  const NavLink = ({ to, label, mobile = false }: { to: string; label: string; mobile?: boolean }) => (
    <Link
      to={to}
      className={`${
        mobile ? 'block py-3 text-lg border-b border-slate-800' : 'text-base font-medium transition-colors hover:text-blue-400'
      } ${location.pathname === to ? 'text-blue-400' : 'text-slate-300'}`}
      onClick={() => setIsMenuOpen(false)}
    >
      {label}
    </Link>
  );

  return (
    <div className="min-h-screen flex flex-col bg-slate-900 text-slate-100 font-sans">
      {/* Navbar */}
      <nav className="fixed w-full z-50 bg-slate-900/90 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="flex items-center space-x-3">
              <img 
                src="https://image2url.com/r2/default/images/1770133474868-26e78d08-d8ae-473f-a219-64f57553ed84.png" 
                alt="Rokade AI Hub Logo" 
                className="h-10 w-10 rounded-full object-cover border border-slate-600" 
              />
              <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
                Rokade AI Hub
              </span>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <NavLink to="/" label="मुख्य पृष्ठ" />
              <NavLink to="/programs" label="अभ्यासक्रम" />
              <NavLink to="/fees" label="फीस" />
              <NavLink to="/enroll" label="प्रवेश घ्या" />
              
              {user ? (
                <div className="flex items-center space-x-4 ml-4">
                  {user.role === UserRole.ADMIN ? (
                     <Link to="/admin" className="px-4 py-2 bg-purple-600/20 text-purple-300 rounded-full border border-purple-600/50 flex items-center gap-2 hover:bg-purple-600/30">
                       <ShieldCheck className="h-4 w-4" /> ॲडमिन डॅशबोर्ड
                     </Link>
                  ) : (
                    <Link to="/dashboard" className="text-sm font-semibold text-blue-400 hover:underline">
                      डॅशबोर्ड
                    </Link>
                  )}
                  
                  <button
                    onClick={handleLogout}
                    className="p-2 text-slate-400 hover:text-red-400 transition-colors"
                    title="Logout"
                  >
                    <LogOut className="h-5 w-5" />
                  </button>
                </div>
              ) : (
                <Link
                  to="/login"
                  className="px-5 py-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-medium text-sm transition-all shadow-lg hover:shadow-blue-500/25 transform hover:-translate-y-0.5"
                >
                  लॉगिन
                </Link>
              )}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-slate-300 hover:text-white p-2"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-slate-900 border-b border-slate-800 absolute w-full px-4 pt-2 pb-4 shadow-xl">
            <div className="flex flex-col space-y-2">
              <NavLink to="/" label="मुख्य पृष्ठ" mobile />
              <NavLink to="/programs" label="अभ्यासक्रम" mobile />
              <NavLink to="/fees" label="फीस" mobile />
              <NavLink to="/enroll" label="प्रवेश घ्या" mobile />
              {user ? (
                <div className="pt-4 border-t border-slate-800">
                   {user.role === UserRole.ADMIN ? (
                      <Link to="/admin" className="block py-2 text-purple-400 font-bold" onClick={() => setIsMenuOpen(false)}>ॲडमिन डॅशबोर्ड</Link>
                   ) : (
                      <Link to="/dashboard" className="block py-2 text-blue-400" onClick={() => setIsMenuOpen(false)}>माझा डॅशबोर्ड</Link>
                   )}
                   <button onClick={handleLogout} className="block w-full text-left py-2 text-red-400">
                     बाहेर पडणे (Logout)
                   </button>
                </div>
              ) : (
                <Link
                  to="/login"
                  className="mt-4 block w-full text-center py-3 rounded-lg bg-blue-600 text-white font-bold"
                  onClick={() => setIsMenuOpen(false)}
                >
                  लॉगिन करा
                </Link>
              )}
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="flex-grow pt-16">
        {children}
      </main>

      {/* WhatsApp Floating Button */}
      <a 
        href="https://wa.me/918010733617" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-500 p-4 rounded-full shadow-lg hover:bg-green-600 transition-transform hover:scale-110 flex items-center justify-center animate-bounce"
        style={{ animationDuration: '3s' }}
      >
        <MessageCircle className="h-8 w-8 text-white" />
      </a>

      {/* Footer */}
      <footer className="bg-slate-950 border-t border-slate-900 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
            <div>
              <div className="flex items-center justify-center md:justify-start space-x-3 mb-4">
                 <img 
                    src="https://image2url.com/r2/default/images/1770133474868-26e78d08-d8ae-473f-a219-64f57553ed84.png" 
                    alt="Rokade AI Hub Logo" 
                    className="h-8 w-8 rounded-full object-cover" 
                 />
                 <span className="text-xl font-bold text-white">Rokade AI Hub</span>
              </div>
              <p className="text-slate-400 text-sm">
                शालेय मुलांसाठी कोडिंग आणि AI चे आधुनिक शिक्षण.
              </p>
            </div>
            
            <div>
              <h3 className="text-white font-semibold mb-4">संपर्क</h3>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><a href="https://wa.me/918010733617" className="hover:text-green-400 flex items-center justify-center md:justify-start gap-2"><MessageCircle className="h-4 w-4"/> +91 8010733617</a></li>
                <li>Email: info@rokadeaihub.com</li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">सोशल मीडिया</h3>
              <div className="flex justify-center md:justify-start space-x-4">
                <a href="https://instagram.com/rokade_ai_hub" target="_blank" rel="noopener noreferrer" className="text-pink-500 hover:text-pink-400">
                  <Instagram className="h-6 w-6" />
                </a>
                <a href="https://www.linkedin.com/in/ritesh-rokade" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-400">
                  <Linkedin className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-slate-900 text-center text-slate-600 text-sm">
            &copy; {new Date().getFullYear()} Rokade AI Hub. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;