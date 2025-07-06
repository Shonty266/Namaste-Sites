import React, { useState } from 'react'
import ContactModal from '../Contact/ContactModal'
import '../../Fonts.css'

const About = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)

  const values = [
    {
      title: "Innovation First",
      description: "We stay ahead of technological trends to deliver cutting-edge solutions.",
      icon: "💡"
    },
    {
      title: "Client-Centric",
      description: "Your success is our priority. We work closely with you to achieve your goals.",
      icon: "🤝"
    },
    {
      title: "Quality Driven",
      description: "We maintain high standards in every project we undertake.",
      icon: "⭐"
    }
  ];

  const stats = [
    { number: '100+', label: 'Hours of Development' },
    { number: '5+', label: 'Projects Completed' },
    { number: '4+', label: 'Team Members' },
    { number: '24/7', label: 'Support Available' }
  ];

  return (
    <section className="py-20 bg-[#121212] text-gray-100 font-clash">
      <div className="container mx-auto px-6">
        {/* Header */}
       <div className="text-center mb-16">
  <span className="text-sm font-['ClashDisplay-Semibold'] text-purple-400 tracking-wider uppercase">
    About Us
  </span>
  <h2 className="text-4xl font-['ClashDisplay-SemiBold'] mt-2 mb-4">
    Creative Minds for Modern Website Solutions
  </h2>
  <p className="font-['ClashDisplay-Regular'] text-gray-400 max-w-2xl mx-auto">
    We are a passionate team delivering modern website design, project solutions, and creative digital experiences.
  </p>
</div>


        {/* Stats Section - New */}
        <div className="mb-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="text-center p-6 rounded-xl bg-[#1e1e2e] border border-gray-800 hover:border-purple-500/30 transition-all duration-300"
              >
                <div className="text-3xl font-['ClashDisplay-Bold'] bg-gradient-to-r from-purple-400 to-teal-400 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-sm font-clash-medium text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-4 mb-10">
          <div className="p-6 rounded-xl bg-[#1e1e2e] border border-gray-800 hover:border-purple-500/30 transition-colors">
            <h3 className="text-xl font-clash-semibold mb-4 bg-gradient-to-r from-purple-400 to-teal-400 bg-clip-text text-transparent">
              Our Mission
            </h3>
            <p className="font-clash-regular text-gray-400">
              To empower businesses with cutting-edge web solutions that drive growth 
              and enhance digital presence, making technology accessible and impactful.
            </p>
          </div>
          <div className="p-6 rounded-xl bg-[#1e1e2e] border border-gray-800 hover:border-teal-500/30 transition-colors">
            <h3 className="text-xl font-clash-semibold mb-4 bg-gradient-to-r from-purple-400 to-teal-400 bg-clip-text text-transparent">
              Our Vision
            </h3>
            <p className="font-clash-regular text-gray-400">
              To become a leading force in web development, known for innovative solutions 
              and exceptional client satisfaction across diverse industries.
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {values.map((value, index) => (
            <div
              key={index}
              className="p-6 rounded-xl bg-[#1e1e2e] border border-gray-800 hover:border-purple-500/30 transition-colors"
            >
              <div className="text-3xl mb-4">{value.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
              <p className="text-gray-400">{value.description}</p>
            </div>
          ))}
        </div>

        {/* Call to Action - Updated */}
        <div className="mt-16 text-center">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Ready to Start Your Project?</h3>
            <p className="text-gray-400 mb-8">
              Let's collaborate to bring your digital vision to life with our innovative solutions
              and passionate team of developers.
            </p>
            <div className="inline-block p-px bg-gradient-to-r from-purple-500 to-teal-500 rounded-lg">
              <button 
                onClick={() => setIsContactModalOpen(true)}
                className="cursor-pointer block px-8 py-4 bg-[#1e1e2e] rounded-lg hover:bg-[#1e1e2e]/80 transition-colors"
              >
                <span className="text-lg font-medium">Get in Touch</span>
                <p className="text-sm text-gray-400 mt-1">
                  Free consultation and project estimate
                </p>
              </button>
            </div>
          </div>
        </div>

        {/* Add ContactModal */}
        <ContactModal 
          isOpen={isContactModalOpen}
          onClose={() => setIsContactModalOpen(false)}
        />
      </div>
    </section>
  )
}

export default About