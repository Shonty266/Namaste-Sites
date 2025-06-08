import React, { useState } from 'react'

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all')

  const projects = [
    {
      title: "Modern E-Commerce",
      description: "A sleek online store with seamless checkout experience",
      image: "/portfolio/ecommerce.jpg",
      category: "web",
      tags: ["Next.js", "Tailwind", "Stripe"],
      demoLink: "#",
      type: "Demo Project"
    },
    {
      title: "Restaurant Website",
      description: "Interactive menu and reservation system",
      image: "/portfolio/restaurant.jpg",
      category: "web",
      tags: ["React", "Firebase", "Framer Motion"],
      demoLink: "#",
      type: "Demo Project"
    },
    {
      title: "Brand Identity Design",
      description: "Modern logo and brand identity for a tech startup",
      image: "/portfolio/brand.jpg",
      category: "design",
      tags: ["Branding", "Logo", "Identity"],
      demoLink: "#",
      type: "Logo Design"
    },
    {
      title: "Personal Portfolio",
      description: "Minimalist portfolio for creative professionals",
      image: "/portfolio/portfolio.jpg",
      category: "design",
      tags: ["React", "Tailwind", "GSAP"],
      demoLink: "#",
      type: "Template"
    },
    {
      title: "Agency Landing Page",
      description: "Converting landing page with modern animations",
      image: "/portfolio/agency.jpg",
      category: "web",
      tags: ["React", "Tailwind", "Three.js"],
      demoLink: "#",
      type: "Demo Project"
    },
    {
      title: "Logo Collection",
      description: "A collection of minimalist logo designs for various industries",
      image: "/portfolio/logos.jpg",
      category: "design",
      tags: ["Logo Design", "Branding", "Minimal"],
      demoLink: "#",
      type: "Logo Design"
    }
  ]

  const filterProjects = (category) => {
    setActiveFilter(category)
  }

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter)

  return (
    <section className="py-20 bg-[#121212] text-gray-100">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-sm font-semibold text-purple-400 tracking-wider uppercase">Our Work</span>
          <h2 className="text-4xl font-bold mt-2 mb-4">Featured Projects</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Explore our demo projects that showcase our technical capabilities and design aesthetics.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex justify-center gap-4 mb-12">
          {['all', 'web', 'design'].map((filter) => (
            <button
              key={filter}
              onClick={() => filterProjects(filter)}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                activeFilter === filter
                  ? 'bg-gradient-to-r from-purple-500 to-teal-500 text-white'
                  : 'bg-gray-800/50 text-gray-400 hover:text-white'
              }`}
            >
              {filter.charAt(0).toUpperCase() + filter.slice(1)}
            </button>
          ))}
        </div>

        {/* Projects Grid - Updated with smaller cards and 4 columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg bg-[#1e1e2e] hover:shadow-lg hover:shadow-purple-900/20 transition-all duration-300"
            >
              {/* Project Image - Smaller aspect ratio */}
              <div className="relative aspect-[3/2] overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-[#1e1e2e] to-transparent z-10"></div>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-2 right-2 px-2 py-0.5 bg-purple-500/20 backdrop-blur-sm rounded-full text-[10px] text-purple-300 border border-purple-500/20">
                  {project.type}
                </div>
              </div>

              {/* Project Info - More compact */}
              <div className="p-3">
                <h3 className="text-base font-semibold mb-1">{project.title}</h3>
                <p className="text-xs text-gray-400 mb-2 line-clamp-2">{project.description}</p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-1 mb-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="text-[10px] px-1.5 py-0.5 bg-purple-900/30 text-purple-300 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* View Project Button */}
                <a
                  href={project.demoLink}
                  className="inline-flex items-center gap-1 text-xs font-medium text-purple-400 hover:text-purple-300 transition-colors"
                >
                  View Project
                  <svg
                    className="w-3 h-3 transform group-hover:translate-x-0.5 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
      
      </div>
    </section>
  )
}

export default Portfolio