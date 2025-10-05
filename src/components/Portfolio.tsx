import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, ExternalLink, Calendar, MapPin } from 'lucide-react';

const Portfolio = () => {
  const [currentProject, setCurrentProject] = useState(0);

  const projects = [
    {
      title: "Modern Residential Complex",
      location: "Lucena City, Quezon",
      year: "2023",
      category: "Residential",
      image: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      description: "Luxury 3-story residential complex with modern amenities and sustainable design features."
    },
    {
      title: "Commercial Office Building",
      location: "Tayabas City, Quezon",
      year: "2023",
      category: "Commercial",
      image: "https://images.pexels.com/photos/1642125/pexels-photo-1642125.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      description: "Contemporary office building with eco-friendly materials and energy-efficient systems."
    },
    {
      title: "Custom Family Home",
      location: "Sariaya, Quezon",
      year: "2022",
      category: "Residential",
      image: "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      description: "Beautiful custom-designed family home with swimming pool and landscaped gardens."
    },
    {
      title: "Industrial Warehouse",
      location: "Candelaria, Quezon",
      year: "2022",
      category: "Industrial",
      image: "https://images.pexels.com/photos/1662159/pexels-photo-1662159.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      description: "Large-scale warehouse facility with modern loading docks and storage systems."
    },
    {
      title: "Luxury Swimming Pool",
      location: "Lucena City, Quezon",
      year: "2023",
      category: "Swimming Pool",
      image: "https://images.pexels.com/photos/261410/pexels-photo-261410.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      description: "Resort-style swimming pool with infinity edge and integrated landscaping."
    },
    {
      title: "Road Infrastructure",
      location: "Tayabas City, Quezon",
      year: "2023",
      category: "Infrastructure",
      image: "https://images.pexels.com/photos/7876050/pexels-photo-7876050.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      description: "Concrete road construction project improving community accessibility and connectivity."
    }
  ];

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-slate-800 mx-auto mb-6"></div>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Modern Designs, Solid Execution. Explore our portfolio of completed projects 
            showcasing quality craftsmanship and innovative solutions.
          </p>
        </div>

        {/* Featured Project Carousel */}
        <div className="relative mb-16">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="grid md:grid-cols-2">
              <div className="relative">
                <img 
                  src={projects[currentProject].image}
                  alt={projects[currentProject].title}
                  className="w-full h-96 object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-slate-800 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {projects[currentProject].category}
                  </span>
                </div>
              </div>
              
              <div className="p-8 flex flex-col justify-center">
                <h3 className="text-3xl font-bold text-slate-800 mb-4">
                  {projects[currentProject].title}
                </h3>
                
                <div className="flex items-center space-x-6 mb-6 text-slate-600">
                  <div className="flex items-center space-x-2">
                    <MapPin size={18} />
                    <span>{projects[currentProject].location}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Calendar size={18} />
                    <span>{projects[currentProject].year}</span>
                  </div>
                </div>
                
                <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                  {projects[currentProject].description}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <button 
                      onClick={prevProject}
                      className="w-12 h-12 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors"
                    >
                      <ChevronLeft size={20} />
                    </button>
                    <span className="text-slate-600">
                      {currentProject + 1} / {projects.length}
                    </span>
                    <button 
                      onClick={nextProject}
                      className="w-12 h-12 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors"
                    >
                      <ChevronRight size={20} />
                    </button>
                  </div>
                  
                  <button className="flex items-center space-x-2 text-slate-700 hover:text-slate-900 font-medium transition-colors">
                    <span>View Details</span>
                    <ExternalLink size={18} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Project Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {projects.slice(0, 6).map((project, index) => (
            <div 
              key={index}
              className="group cursor-pointer"
              onClick={() => setCurrentProject(index)}
            >
              <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow overflow-hidden">
                <div className="relative">
                  <img 
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="bg-black/70 text-white px-2 py-1 rounded text-xs font-medium">
                      {project.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-slate-800 mb-2 group-hover:text-slate-900 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-600 text-sm mb-2">{project.location}</p>
                  <p className="text-slate-500 text-xs">{project.year}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <p className="text-lg text-slate-600 mb-6">
            Ready to start your own project? Let's discuss your vision.
          </p>
          <button 
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-slate-800 hover:bg-slate-900 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
          >
            Start Your Project
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;