import React, { useState } from 'react';
import { Github, Linkedin, Mail, ExternalLink, User, Briefcase, Code2, Send, Database, Globe, Server } from 'lucide-react';
import { motion } from 'framer-motion';

function App() {
  const [activeProject, setActiveProject] = useState<number | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  const featuredProjects = [
    {
      name: "Freelancer Platform",
      description: "A comprehensive freelance work management platform with integrated payment systems, time tracking, and project management features. Enables seamless collaboration between clients and freelancers.",
      image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&q=80&w=500",
      technologies: ["Java", "Angular", "PostgreSQL", "Spring Boot", "Docker"],
      features: [
        "Secure payment processing",
        "Real-time messaging",
        "Project milestone tracking",
        "Time tracking and reporting",
        "Rating and review system"
      ]
    },
    {
      name: "First Goal First Club",
      description: "Advanced Football Academy Management System that tracks player development, manages training schedules, and provides performance analytics for young athletes.",
      image: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?auto=format&fit=crop&q=80&w=500",
      technologies: ["Java", "MongoDB", "React", "Node.js", "Express"],
      features: [
        "Player performance tracking",
        "Training schedule management",
        "Attendance monitoring",
        "Progress reports",
        "Parent portal"
      ]
    },
    {
      name: "Zab Connections",
      description: "Innovative platform connecting US and Indian businesses for import/export operations, featuring customs documentation management and logistics tracking.",
      image: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&q=80&w=500",
      technologies: ["Angular", "Java", "PostgreSQL", "Spring Security", "Redis"],
      features: [
        "Document verification",
        "Shipment tracking",
        "Customs compliance",
        "Business matching",
        "Market analysis tools"
      ]
    },
    {
      name: "Server Infrastructure",
      description: "Enterprise-grade VPS and email hosting infrastructure, providing reliable hosting solutions for businesses with high availability requirements.",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=500",
      technologies: ["Linux", "Docker", "Kubernetes", "Nginx", "PostgreSQL"],
      features: [
        "99.9% uptime guarantee",
        "Automated backups",
        "DDoS protection",
        "Email hosting",
        "24/7 monitoring"
      ]
    }
  ];

  const otherProjects = [
    {
      name: "Cre Audit",
      description: "Real Estate Data Management Project with advanced analytics and reporting capabilities.",
      technologies: ["Java", "Angular", "MongoDB", "Express"],
      features: [
        "Property valuation",
        "Market analysis",
        "Document management",
        "Automated reporting"
      ]
    },
    {
      name: "Throq Test",
      description: "Comprehensive testing and defect management system for software development teams.",
      technologies: ["Java", "PostgreSQL", "React", "Spring Boot"],
      features: [
        "Test case management",
        "Defect tracking",
        "Automated testing",
        "Performance monitoring"
      ]
    },
    {
      name: "Datamug",
      description: "Data Analytics and Large-scale Graphical Mapping platform for business intelligence.",
      technologies: ["Angular", "MongoDB", "Node.js", "D3.js"],
      features: [
        "Interactive visualizations",
        "Real-time analytics",
        "Custom reporting",
        "Data integration"
      ]
    },
    {
      name: "Mail Applications",
      description: "Enterprise email solution with advanced domain verification and mailbox management.",
      technologies: ["Java", "PostgreSQL", "Docker", "Postfix"],
      features: [
        "DKIM verification",
        "Spam protection",
        "Backup solutions",
        "Admin dashboard"
      ]
    },
    {
      name: "BookMyslot",
      description: "Smart scheduling system for managing appointments and resource booking.",
      technologies: ["Angular", "Java", "MongoDB", "Spring Boot"],
      features: [
        "Calendar integration",
        "Automated reminders",
        "Resource management",
        "Payment processing"
      ]
    },
    {
      name: "Bike Rent",
      description: "Modern bike rental management system with real-time availability tracking.",
      technologies: ["Java", "PostgreSQL", "React", "Node.js"],
      features: [
        "Real-time inventory",
        "Online booking",
        "Payment integration",
        "Maintenance tracking"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header/Hero Section */}
      <header className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="max-w-6xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">Full Stack Developer</h1>
            <p className="text-xl text-blue-100 mb-4">Building robust web applications and managing server infrastructure</p>
            <p className="text-lg text-blue-100 mb-8">Specializing in Java, Angular, PostgreSQL, and MongoDB</p>
            <div className="flex justify-center space-x-4">
              <a href="#" className="p-2 hover:text-blue-200 transition-colors">
                <Github size={24} />
              </a>
              <a href="#" className="p-2 hover:text-blue-200 transition-colors">
                <Linkedin size={24} />
              </a>
              <a href="#" className="p-2 hover:text-blue-200 transition-colors">
                <Mail size={24} />
              </a>
            </div>
          </motion.div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        {/* Technologies Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8">Core Technologies</h2>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-4 gap-6"
          >
            <motion.div variants={itemVariants} className="bg-white p-6 rounded-lg shadow-lg">
              <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Code2 className="text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Backend</h3>
              <ul className="text-gray-600 space-y-2">
                <li>Java</li>
                <li>Spring Boot</li>
                <li>Node.js</li>
                <li>Express</li>
              </ul>
            </motion.div>

            <motion.div variants={itemVariants} className="bg-white p-6 rounded-lg shadow-lg">
              <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Globe className="text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Frontend</h3>
              <ul className="text-gray-600 space-y-2">
                <li>Angular</li>
                <li>React</li>
                <li>TypeScript</li>
                <li>HTML/CSS</li>
              </ul>
            </motion.div>

            <motion.div variants={itemVariants} className="bg-white p-6 rounded-lg shadow-lg">
              <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Database className="text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Databases</h3>
              <ul className="text-gray-600 space-y-2">
                <li>PostgreSQL</li>
                <li>MongoDB</li>
                <li>Redis</li>
                <li>MySQL</li>
              </ul>
            </motion.div>

            <motion.div variants={itemVariants} className="bg-white p-6 rounded-lg shadow-lg">
              <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Server className="text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">DevOps</h3>
              <ul className="text-gray-600 space-y-2">
                <li>Docker</li>
                <li>Kubernetes</li>
                <li>Linux</li>
                <li>CI/CD</li>
              </ul>
            </motion.div>
          </motion.div>
        </section>

        {/* Featured Projects Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8">Featured Projects</h2>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {featuredProjects.map((project, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
                onMouseEnter={() => setActiveProject(index)}
                onMouseLeave={() => setActiveProject(null)}
              >
                <div className="relative">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-48 object-cover"
                  />
                  {activeProject === index && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="absolute inset-0 bg-black bg-opacity-75 p-4 text-white overflow-auto"
                    >
                      <h4 className="font-semibold mb-2">Key Features:</h4>
                      <ul className="list-disc list-inside text-sm">
                        {project.features.map((feature, idx) => (
                          <li key={idx}>{feature}</li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-500 mb-2">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <a
                    href="#"
                    className="inline-flex items-center text-blue-600 hover:text-blue-700"
                  >
                    View Project <ExternalLink className="ml-1" size={16} />
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Other Projects Grid */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8">Other Projects</h2>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {otherProjects.map((project, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white p-6 rounded-lg shadow-lg"
              >
                <h3 className="text-lg font-semibold mb-2">{project.name}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-500 mb-2">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-500 mb-2">Key Features:</h4>
                  <ul className="list-disc list-inside text-sm text-gray-600">
                    {project.features.map((feature, idx) => (
                      <li key={idx}>{feature}</li>
                    ))}
                  </ul>
                </div>
                <a
                  href="#"
                  className="inline-flex items-center text-blue-600 hover:text-blue-700"
                >
                  Learn More <ExternalLink className="ml-1" size={16} />
                </a>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Contact Section */}
        <section className="mb-20">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
            <div className="flex flex-col md:flex-row md:space-x-8">
              <div className="flex-1 mb-8 md:mb-0">
                <p className="text-gray-600 mb-6">
                  Interested in working together? Let's discuss your project and see how I can help.
                </p>
                <div className="space-y-4">
                  <a
                    href="#"
                    className="flex items-center text-gray-600 hover:text-blue-600"
                  >
                    <Mail className="mr-2" size={20} />
                    email@example.com
                  </a>
                  <a
                    href="#"
                    className="flex items-center text-gray-600 hover:text-blue-600"
                  >
                    <Linkedin className="mr-2" size={20} />
                    LinkedIn Profile
                  </a>
                  <a
                    href="#"
                    className="flex items-center text-gray-600 hover:text-blue-600"
                  >
                    <Github className="mr-2" size={20} />
                    GitHub Profile
                  </a>
                </div>
              </div>
              <div className="flex-1">
                <form className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    Send Message <Send className="ml-2" size={16} />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white">
        <div className="max-w-6xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <p>&copy; 2024 Portfolio. All rights reserved.</p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-blue-400">
                <Github size={20} />
              </a>
              <a href="#" className="hover:text-blue-400">
                <Linkedin size={20} />
              </a>
              <a href="#" className="hover:text-blue-400">
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;