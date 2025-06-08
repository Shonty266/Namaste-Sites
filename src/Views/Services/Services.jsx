import React from 'react';

const Services = () => {
  const services = [
    {
      title: 'Website Development',
      description: 'From simple landing pages to complex web applications, we bring fresh perspectives and modern solutions.',
      icon: '🌐',
      tags: ['React', 'Next.js', 'Tailwind']
    },
    {
      title: 'UI/UX Design',
      description: 'Clean, intuitive designs that focus on user experience and conversion optimization.',
      icon: '🎨',
      tags: ['Figma', 'User-Centered']
    },
    {
      title: 'Logo Design',
      description: 'Create a memorable brand identity with our modern and versatile logo designs. Perfect for startups and small businesses.',
      icon: '✨',
      tags: ['Adobe', 'Branding']
    },
   
    {
      title: 'Custom Development',
      description: 'Small to medium-scale custom solutions that help businesses start their digital journey.',
      icon: '💻',
      tags: ['Flexible', 'Scalable']
    }
  ];

  return (
    <section className="py-20 bg-[#121212] text-gray-100">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold text-purple-400 tracking-wider uppercase">Young & Ambitious</span>
          <h2 className="text-4xl font-bold mt-2 mb-4">Our Services</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A young team with fresh ideas and modern tech stack. We might be new, 
            but our passion and dedication make us the perfect partner for your next project.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="group bg-[#1e1e2e] p-8 rounded-lg hover:shadow-lg hover:shadow-purple-900/20 transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-20 h-20 bg-purple-500/10 rounded-bl-full transform translate-x-10 -translate-y-10 group-hover:translate-x-8 group-hover:-translate-y-8 transition-transform duration-300"></div>
              
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-2xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-400 mb-4">{service.description}</p>
              
              <div className="flex flex-wrap gap-2 mt-4">
                {service.tags.map((tag, tagIndex) => (
                  <span 
                    key={tagIndex}
                    className="text-xs px-2 py-1 bg-purple-900/30 text-purple-300 rounded-full"
                  >
                    {tag}
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

export default Services;