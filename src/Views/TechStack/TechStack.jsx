import React from 'react';
import '../../Fonts.css';

const TechStack = () => {
  const technologies = [
    {
      category: "Frontend",
      icon: "⚛️",
      tools: ["React", "Next.js", "TailwindCSS", "GSAP", "Three.js", "Framer Motion"],
      gradient: "from-blue-400 to-cyan-400"
    },
    {
      category: "Development",
      icon: "🛠️",
      tools: ["JavaScript", "TypeScript", "Node.js", "Git", "Python"],
      gradient: "from-purple-400 to-pink-400"
    },
    {
      category: "Design",
      icon: "🎨",
      tools: ["Figma", "Adobe XD", "Photoshop", "Illustrator"],
      gradient: "from-teal-400 to-green-400"
    },
    {
      category: "Tools",
      icon: "🔧",
      tools: ["VS Code", "GitHub", "Vercel", "Netlify"],
      gradient: "from-orange-400 to-yellow-400"
    }
  ];

  return (
    <section className="py-20 bg-[#121212] text-gray-100">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-sm font-['ClashDisplay-Bold'] text-purple-400 uppercase tracking-widest">
            Tech Stack
          </span>
          <h2 className="text-4xl font-['ClashDisplay-SemiBold'] mt-2">
            Technologies We Master
          </h2>
          <p className="font-['ClashDisplay-Regular'] text-gray-400 max-w-2xl mx-auto mt-4">
            Leveraging cutting-edge technologies to build modern, scalable, and performant solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {technologies.map((tech, index) => (
            <div 
              key={index}
              className="group bg-[#1e1e2e] p-8 rounded-lg hover:shadow-lg hover:shadow-purple-900/20 transition-all duration-300 relative overflow-hidden border border-gray-800/50 hover:border-purple-500/30"
            >
              <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${tech.gradient} opacity-10 rounded-bl-full transform translate-x-12 -translate-y-12 group-hover:translate-x-8 group-hover:-translate-y-8 transition-transform duration-300`}></div>
              
              <div className="text-3xl mb-4">{tech.icon}</div>
              <h3 className={`text-xl font-['ClashDisplay-Semibold'] mb-4 bg-gradient-to-r ${tech.gradient} bg-clip-text text-transparent`}>
                {tech.category}
              </h3>
              
              <div className="flex flex-wrap gap-2">
                {tech.tools.map((tool, toolIndex) => (
                  <span 
                    key={toolIndex}
                    className="font-['ClashDisplay-Medium'] text-sm px-3 py-1 bg-purple-900/20 text-purple-300 rounded-full hover:bg-purple-900/30 transition-colors cursor-default"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;