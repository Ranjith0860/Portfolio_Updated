import React, { useState } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Code2, BookOpen, Award, Briefcase, ChevronDown } from 'lucide-react';

function App() {
  const [activeTab, setActiveTab] = useState('about');
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const projects = [
    {
      title: 'E-Commerce Website',
      tech: 'HTML, CSS, JavaScript, Django',
      description: 'Developed a full-stack e-commerce site with user authentication, product catalog, and payment integration.',
      features: ['User registration', 'Shopping cart', 'Order tracking']
    },
    {
      title: 'Weather Forecasting App',
      tech: 'Python, Flask, OpenWeatherMap API',
      description: 'Built a responsive app that fetches real-time weather updates for any location.'
    },
    {
      title: 'Portfolio Website',
      tech: 'HTML, CSS, JavaScript',
      description: 'Designed and deployed a personal portfolio site to showcase skills and projects.'
    }
  ];

  const certifications = [
    {
      name: 'Python for Everybody (Coursera)',
      link: 'https://www.coursera.org/account/accomplishments/verify/YOUR_CERTIFICATE_ID'
    },
    {
      name: 'JavaScript Algorithms and Data Structures (freeCodeCamp)',
      link: 'https://www.freecodecamp.org/certification/YOUR_USERNAME/javascript-algorithms-and-data-structures'
    },
    {
      name: 'Web Development Bootcamp (Udemy)',
      link: 'https://www.udemy.com/certificate/YOUR_CERTIFICATE_ID'
    },
    {
      name: 'Responsive Web Design Certification (freeCodeCamp)',
      link: 'https://www.freecodecamp.org/certification/YOUR_USERNAME/responsive-web-design'
    }
  ];

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <div className="relative inline-block mb-8">
            <img
              src="https://i.ibb.co/Jk4gR9X/ranjith-profile.jpg"
              alt="Ranjith Kumar"
              className="w-32 h-32 rounded-full mx-auto border-4 border-blue-500 hover:border-blue-400 transition-all duration-300 animate-float object-cover"
            />
            <div className="absolute inset-0 rounded-full animate-pulse-blue"></div>
          </div>
          
          <h1 
            className="text-5xl font-bold mb-4 animate-fade-in cursor-pointer hover:text-blue-400 transition-colors duration-300"
            onClick={() => toggleSection('name')}
          >
            Ranjith Kumar
            <ChevronDown className={`inline-block ml-2 w-6 h-6 transform transition-transform duration-300 ${expandedSection === 'name' ? 'rotate-180' : ''}`} />
          </h1>
          
          {expandedSection === 'name' && (
            <div className="slide-down bg-gray-800 p-4 rounded-lg mb-4">
              <p className="text-gray-300">
                Hello! I'm Ranjith, a passionate B.Tech student with a love for creating innovative solutions through code.
                I specialize in full-stack development and enjoy tackling complex problems.
              </p>
            </div>
          )}

          <h2 className="text-2xl text-blue-400 mb-4 hover:text-blue-300 transition-colors duration-300">
            B.Tech Student | Aspiring Full-Stack Developer
          </h2>
          <p className="text-gray-300 text-lg mb-8 hover:text-white transition-colors duration-300">
            "Passionate about creating robust, scalable, and user-friendly applications."
          </p>
          
          <div className="flex justify-center space-x-4 mb-12">
            <button 
              onClick={() => window.open('https://github.com/YOUR_USERNAME')} 
              className="transform hover:scale-110 hover:rotate-6 transition-all duration-300 bg-gray-800 p-3 rounded-full hover:bg-gray-700 group"
            >
              <Github className="w-6 h-6 group-hover:text-blue-400 transition-colors duration-300" />
            </button>
            <button 
              onClick={() => window.open('https://linkedin.com/in/YOUR_USERNAME')} 
              className="transform hover:scale-110 hover:rotate-6 transition-all duration-300 bg-gray-800 p-3 rounded-full hover:bg-gray-700 group"
            >
              <Linkedin className="w-6 h-6 group-hover:text-blue-400 transition-colors duration-300" />
            </button>
            <button 
              onClick={() => window.location.href = 'mailto:ranjithkumar@example.com'} 
              className="transform hover:scale-110 hover:rotate-6 transition-all duration-300 bg-gray-800 p-3 rounded-full hover:bg-gray-700 group"
            >
              <Mail className="w-6 h-6 group-hover:text-blue-400 transition-colors duration-300" />
            </button>
          </div>
        </div>

        <div className="flex justify-center space-x-4 mb-12">
          {['about', 'skills', 'projects', 'certifications'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`nav-button px-6 py-2 rounded-full transition-all duration-300 transform hover:scale-105 ${
                activeTab === tab
                  ? 'bg-blue-500 text-white shadow-lg hover:bg-blue-600'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white'
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        <div className="max-w-4xl mx-auto">
          {activeTab === 'about' && (
            <div className="animate-fade-in">
              <div className="bg-gray-800 rounded-lg p-8 mb-8 transform hover:scale-[1.02] transition-all duration-300 hover:shadow-xl">
                <h3 className="text-2xl font-bold mb-4 flex items-center cursor-pointer hover:text-blue-400 transition-colors duration-300"
                    onClick={() => toggleSection('about')}>
                  <Code2 className="mr-2" /> About Me
                  <ChevronDown className={`ml-2 w-5 h-5 transform transition-transform duration-300 ${expandedSection === 'about' ? 'rotate-180' : ''}`} />
                </h3>
                <div className={`overflow-hidden transition-all duration-300 ${expandedSection === 'about' ? 'max-h-96' : 'max-h-20'}`}>
                  <p className="text-gray-300 leading-relaxed">
                    I'm a B.Tech student passionate about full-stack development. With a strong foundation in both front-end and back-end technologies,
                    I enjoy creating user-friendly applications that solve real-world problems. I'm constantly learning and improving my skills through
                    projects and online courses.
                  </p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'skills' && (
            <div className="animate-fade-in grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-800 rounded-lg p-6 transform hover:scale-[1.02] transition-all duration-300 hover:shadow-xl">
                <h3 className="text-xl font-bold mb-4 hover:text-blue-400 transition-colors duration-300">Programming Languages</h3>
                <div className="flex flex-wrap gap-2">
                  {['Python', 'HTML', 'CSS', 'JavaScript'].map((skill) => (
                    <span key={skill} className="bg-blue-500 px-3 py-1 rounded-full text-sm hover:bg-blue-600 transform hover:scale-105 transition-all duration-300 cursor-default">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div className="bg-gray-800 rounded-lg p-6 transform hover:scale-[1.02] transition-all duration-300 hover:shadow-xl">
                <h3 className="text-xl font-bold mb-4 hover:text-blue-400 transition-colors duration-300">Frameworks</h3>
                <div className="flex flex-wrap gap-2">
                  {['Flask', 'Django', 'React'].map((skill) => (
                    <span key={skill} className="bg-blue-500 px-3 py-1 rounded-full text-sm hover:bg-blue-600 transform hover:scale-105 transition-all duration-300 cursor-default">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'projects' && (
            <div className="animate-fade-in grid grid-cols-1 md:grid-cols-2 gap-6">
              {projects.map((project, index) => (
                <div key={index} className="bg-gray-800 rounded-lg p-6 transform hover:scale-[1.02] transition-all duration-300 hover:shadow-xl group">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-blue-400 transition-colors duration-300">{project.title}</h3>
                  <p className="text-blue-400 text-sm mb-3 group-hover:text-blue-300 transition-colors duration-300">{project.tech}</p>
                  <p className="text-gray-300 mb-4 group-hover:text-white transition-colors duration-300">{project.description}</p>
                  {project.features && (
                    <ul className="list-disc list-inside text-gray-300">
                      {project.features.map((feature, i) => (
                        <li key={i} className="group-hover:text-white transition-colors duration-300">{feature}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          )}

          {activeTab === 'certifications' && (
            <div className="animate-fade-in">
              <div className="bg-gray-800 rounded-lg p-8 hover:shadow-xl transition-all duration-300">
                <h3 className="text-2xl font-bold mb-6 flex items-center hover:text-blue-400 transition-colors duration-300">
                  <Award className="mr-2" /> Certifications
                </h3>
                <div className="grid grid-cols-1 gap-4">
                  {certifications.map((cert, index) => (
                    <a
                      key={index}
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gray-700 rounded-lg p-4 transform hover:scale-[1.02] transition-all duration-300 hover:bg-gray-600 group flex items-center justify-between"
                    >
                      <p className="text-gray-300 group-hover:text-white transition-colors duration-300">{cert.name}</p>
                      <ExternalLink className="w-5 h-5 text-blue-400 group-hover:text-blue-300" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;