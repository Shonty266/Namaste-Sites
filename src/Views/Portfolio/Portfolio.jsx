import React from 'react'
import '../../Fonts.css'
import belmondImg from '../../Images/portfolio/Belmond.svg'
import furnitureImg from '../../Images/portfolio/Furniture.svg'
import goGlobeImg from '../../Images/portfolio/Go Globe.svg'
import homeVoyageImg from '../../Images/portfolio/Home Voyage.svg'
import smartCubeImg from '../../Images/portfolio/Smart Cube.svg'
import billEaseImg from '../../Images/portfolio/Bill Ease.svg'

const Portfolio = () => {
  const projects = [
    {
      title: "BillEase Website",
      description: "A sleek landing page for generating and downloading professional receipts with ease. Features modern UI and seamless functionality.",
      image: billEaseImg,
      category: "web",
      tags: ["HTML", "Tailwind CSS", "GSAP", "JavaScript"],
      demoLink: "https://bill-easee.netlify.app/",
      type: "Website"
    },
    {
      title: "Smart Cube Website",
      description: "Modern education platform featuring interactive learning resources, personalized tutoring, and seamless user experience.",
      image: smartCubeImg,
      category: "web",
      tags: ["HTML", "Tailwind CSS", "GSAP", "JavaScript", "Three.js"],
      demoLink: "https://smart-cube.netlify.app/",
      type: "Website, Logo Design"
    },
    {
      title: "Home Voyage Website",
      description: "Premium real estate platform showcasing property listings with modern design and smooth animations.",
      image: homeVoyageImg,
      category: "web",
      tags: ["HTML", "Tailwind CSS", "GSAP", "JavaScript"],
      demoLink: "https://homevoyage.netlify.app/",
      type: "Website"
    },
    {
      title: "Go Globe Template",
      description: "Interactive travel platform with modern UI/UX design, featuring dynamic content and engaging user interactions.",
      image: goGlobeImg,
      category: "web",
      tags: ["React", "Tailwind CSS", "JavaScript", "GSAP", "Swiper"],
      demoLink: "https://go-globe.netlify.app/",
      type: "Web App, Logo Design"
    },
    {
      title: "Furniture Website",
      description: "Elegant e-commerce landing page showcasing furniture collections with smooth animations and responsive design.",
      image: furnitureImg,
      category: "web",
      tags: ["HTML", "Tailwind CSS", "JavaScript", "GSAP", "Swiper"],
      demoLink: "https://furnituress.netlify.app/",
      type: "Website"
    },
    {
      title: "Belmond Hotel Website",
      description: "Luxury hotel website featuring elegant design, seamless booking experience, and immersive visual content.",
      image: belmondImg,  
      category: "web",
      tags: ["HTML", "Tailwind CSS", "GSAP", "JavaScript"],
      demoLink: "https://belmond-hotel.netlify.app/",
      type: "Website"
    }
  ]

  return (
    <section className="py-20 bg-[#121212] text-gray-100 font-clash">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-sm font-['ClashDisplay-Semibold'] text-purple-400 tracking-wider uppercase">
            Our Work
          </span>
          <h2 className="text-4xl font-['ClashDisplay-SemiBold'] mt-2 mb-4">
            Showcasing What We Build
          </h2>
          <p className="font-['ClashDisplay-Regular'] text-gray-400 max-w-2xl mx-auto">
            Take a look at some of our highlighted projects — crafted with creativity, built with precision, and tailored to solve real-world problems.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg bg-[#1e1e2e] hover:shadow-lg hover:shadow-purple-900/20 transition-all duration-300 flex flex-col pb-4"
            >
              {/* Project Image */}
              <div className="relative aspect-[3/2] overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-[#1e1e2e] to-transparent z-10"></div>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-2 right-2 px-2 py-0.5 bg-purple-500/60 font-bold text-purple-100 backdrop-blur-sm rounded-full text-[12px] border border-purple-500/20">
                  {project.type}
                </div>
              </div>

              {/* Project Info */}
              <div className="p-3 flex flex-col flex-grow">
                <h3 className="text-base font-['ClashDisplay-Semibold'] mb-1">{project.title}</h3>
                <p className="font-['ClashDisplay-Regular'] text-xs text-gray-400 line-clamp-2">{project.description}</p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-1 mb-2 mt-4">
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
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-medium text-purple-400 hover:text-purple-300 transition-colors mt-4"
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
      </div>
    </section>
  )
}

export default Portfolio