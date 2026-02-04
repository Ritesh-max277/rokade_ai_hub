import React from 'react';
import { Target, Lightbulb, Rocket, CheckCircle, Linkedin, User, Star, Heart } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="py-20 bg-slate-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
            About Rokade AI Hub
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Empowering the next generation with future-ready skills in AI and Technology.
          </p>
        </div>

        {/* Who We Are */}
        <div className="mb-20">
          <div className="bg-slate-800/50 p-8 rounded-3xl border border-slate-700 relative">
             <div className="absolute top-0 right-0 p-8 opacity-10">
                <Rocket className="h-32 w-32 text-blue-500" />
             </div>
             <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
               <User className="h-8 w-8 text-blue-400" /> Who We Are
             </h2>
             <p className="text-slate-300 text-lg leading-relaxed mb-4">
               Rokade AI Hub is a modern AI and technology learning platform created to help school and college students understand future technologies in a simple and practical way.
             </p>
             <p className="text-slate-300 text-lg leading-relaxed">
               We focus on teaching <span className="text-blue-400 font-semibold">Artificial Intelligence, Python Programming and Machine Learning</span> with real-world examples so students can learn skills that are useful for their careers.
             </p>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {/* Mission */}
          <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700 hover:border-blue-500 transition-colors">
            <div className="w-14 h-14 bg-blue-500/20 rounded-xl flex items-center justify-center mb-6">
              <Target className="h-8 w-8 text-blue-400" />
            </div>
            <h2 className="text-2xl font-bold text-white mb-4">Our Mission</h2>
            <p className="text-slate-400 leading-relaxed">
              Our mission is to make AI and technology education easy, affordable and accessible for every student, especially those from rural and small-town areas.
            </p>
            <p className="text-slate-400 leading-relaxed mt-2">
              We believe that every student should get equal opportunities to learn future-ready skills.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700 hover:border-purple-500 transition-colors">
            <div className="w-14 h-14 bg-purple-500/20 rounded-xl flex items-center justify-center mb-6">
              <Lightbulb className="h-8 w-8 text-purple-400" />
            </div>
            <h2 className="text-2xl font-bold text-white mb-4">Our Vision</h2>
            <p className="text-slate-400 leading-relaxed">
              Our vision is to create a strong learning community where students become confident, skilled and job-ready in AI and emerging technologies.
            </p>
            <p className="text-slate-400 leading-relaxed mt-2">
              We aim to empower the next generation with knowledge that helps them grow academically and professionally.
            </p>
          </div>
        </div>

        {/* What We Offer & Why Choose Us */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
           {/* What We Offer */}
           <div>
              <h2 className="text-2xl font-bold text-white mb-8 border-l-4 border-blue-500 pl-4">What We Offer</h2>
              <div className="space-y-4">
                {[
                  "AI Basics for Beginners",
                  "Python Programming",
                  "Machine Learning Concepts",
                  "Practical Projects & Hands-on Learning",
                  "Student-friendly Teaching",
                  "Workshops & Career Guidance"
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-4 bg-slate-800/40 p-4 rounded-lg border border-slate-700/50">
                    <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0" />
                    <span className="text-slate-200">{item}</span>
                  </div>
                ))}
              </div>
           </div>

           {/* Why Choose Us */}
           <div>
              <h2 className="text-2xl font-bold text-white mb-8 border-l-4 border-purple-500 pl-4">Why Choose Rokade AI Hub?</h2>
              <div className="space-y-4">
                 {[
                  "Simple and easy explanations",
                  "Focus on practical learning",
                  "Student-friendly environment",
                  "Affordable courses",
                  "Modern AI-based learning approach"
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-4 bg-slate-800/40 p-4 rounded-lg border border-slate-700/50">
                    <Star className="h-5 w-5 text-yellow-400 flex-shrink-0" />
                    <span className="text-slate-200">{item}</span>
                  </div>
                ))}
              </div>
           </div>
        </div>

        {/* Our Commitment */}
        <div className="bg-gradient-to-r from-blue-900/40 to-purple-900/40 p-8 rounded-2xl border border-blue-500/30 text-center mb-20">
          <Heart className="h-10 w-10 text-red-400 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-white mb-4">Our Commitment</h2>
          <p className="text-slate-300 text-lg max-w-3xl mx-auto">
            At Rokade AI Hub, we are committed to guiding students step by step, helping them build strong foundations in technology and preparing them for future opportunities.
          </p>
        </div>

        {/* Founder Section */}
        <div className="max-w-3xl mx-auto">
          <div className="bg-slate-800 rounded-3xl p-1 border border-slate-700">
            <div className="bg-slate-900/50 rounded-[22px] p-8 md:p-12 text-center">
              <div className="w-32 h-32 mx-auto bg-gradient-to-br from-blue-500 to-purple-600 rounded-full p-1 mb-6 shadow-xl shadow-blue-500/20">
                 <div className="w-full h-full bg-slate-800 rounded-full flex items-center justify-center overflow-hidden">
                    <img 
                      src="https://image2url.com/r2/default/images/1770132308876-bea97bf5-e785-4e34-b0c2-5b89ac8ae43e.jpeg" 
                      alt="Ritesh Rokade"
                      className="w-full h-full object-cover" 
                    />
                 </div>
              </div>
              
              <h2 className="text-3xl font-bold text-white mb-2">Ritesh Rokade</h2>
              <p className="text-blue-400 font-medium mb-6">Founder & Lead Instructor</p>
              
              <p className="text-slate-400 mb-8 max-w-lg mx-auto">
                "My goal is to simplify technology for everyone. I believe that with the right guidance, any student can master AI and shape the future."
              </p>

              <a 
                href="https://www.linkedin.com/in/ritesh-rokade" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#0077b5] hover:bg-[#006396] text-white px-8 py-3 rounded-full font-bold transition-transform hover:scale-105 shadow-lg"
              >
                <Linkedin className="h-5 w-5" /> Connect on LinkedIn
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default About;