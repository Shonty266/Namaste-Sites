import React from 'react';
import '../../Fonts.css'

const Services = () => {
  const services = [
    {
  title: 'Website Development',
  description: 'From simple landing pages to complex web applications, we bring fresh perspectives and modern solutions.',
  icon: '🌐',
  tags: ['Responsive', 'SEO-Friendly', 'Fast Load']
},

    {
  title: 'UI/UX Design',
  description: 'We craft user-friendly and visually appealing UI/UX designs for both websites and mobile apps, ensuring seamless user experiences.',
  icon: '🎨',
  tags: ['Figma', 'Prototyping', 'Responsive Design']
},

    {
      title: 'Logo Design',
      description: 'Create a memorable brand identity with our modern and versatile logo designs. Perfect for startups and small businesses.',
      icon: '✨',
      tags: ['Adobe', 'Branding']
    },
    {
      title: 'Custom Software Development',
      description: 'Small to medium-scale custom software solutions powered by AI that help businesses start their digital journey.',
      icon: '💻',
      tags: ['Web Apps', 'Scalable', 'Secure', 'AI Features']
    }
  ];

  return (
    <section className="py-20 bg-[#121212] text-gray-100 font-clash">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
  <span className="text-sm font-['ClashDisplay-Bold'] text-purple-400 uppercase tracking-widest">Our Services</span>
  <h2 className="text-4xl font-['ClashDisplay-SemiBold'] mt-2">Crafting Solutions That Drive Success</h2>
  <p className="font-['ClashDisplay-Regular'] text-gray-400 max-w-2xl mx-auto">
    From sleek, responsive web design to powerful SEO strategies, our services are built to help your business stand out and grow.
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
              <h3 className="text-2xl font-['ClashDisplay-Semibold'] mb-3">{service.title}</h3>
              <p className="font-['ClashDisplay-Regular'] text-gray-400 mb-4">{service.description}</p>
              
              <div className="flex flex-wrap gap-2 mt-4">
                {service.tags.map((tag, tagIndex) => (
                  <span 
                    key={tagIndex}
                    className="font-['ClashDisplay-Medium'] text-xs px-2 py-1 bg-purple-900/30 text-purple-300 rounded-full"
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