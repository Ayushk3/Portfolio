import React, { useState } from 'react';
import image1 from '../assets/image1.jpg';
import image2 from '../assets/image2.png';

const projects = [
  {
    image: image1,
    about: 'StudyNotion is a fully functional EdTech platform that enables users to create, consume, and rate educational content. The platform is built using the MERN stack, which includes ReactJS, NodeJS, MongoDB, and ExpressJS.',
    techStack: 'React, Tailwind, MongoDB, Express, NodeJS',
    tags: ['Web Development'],
    link: 'https://study-notion-git-master-ayushs-projects-7f5a16d3.vercel.app',
  },
  {
    image: image2,
    about: 'Reckona AI is a web application for exploring various machine learning models and their applications. It provides an intuitive interface for users to experiment with different datasets and algorithms.',
    techStack: 'Python, React, Tailwind, MongoDB, Express, NodeJS',
    tags: ['Web Development', 'Machine Learning'],
    link: 'https://reckona4ai.netlify.app/',
  },
  // Add more projects here
];

const allTags = ['Machine Learning', 'Web Development'];

const Projects = () => {
  const [selectedTag, setSelectedTag] = useState('');
  const [expanded, setExpanded] = useState({});

  const toggleExpand = (index) => {
    setExpanded((prevState) => ({
      ...prevState,
      [index]: !prevState[index]
    }));
  };

  const filteredProjects = selectedTag
    ? projects.filter(project => project.tags.includes(selectedTag))
    : projects;

  return (
    <section id="projects" className="my-8">
      <h1 className="lg:text-[4vw] md:text-[5.5vw] text-[6.5vw] font-bold">Projects</h1>
      <div className="my-4">
        <div className="flex space-x-2">
          {allTags.map(tag => (
            <button
              key={tag}
              onClick={() => setSelectedTag(selectedTag === tag ? '' : tag)}
              className={`px-4 py-2 border rounded-lg transition duration-300 ${
                selectedTag === tag ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 mt-4">
        {filteredProjects.map((project, index) => {
          const isExpanded = expanded[index];
          const words = project.about.split(' ');
          const isLongDescription = words.length > 16;
          const shortDescription = isLongDescription ? words.slice(0, 16).join(' ') + '...' : project.about;

          return (
            <div key={index} className="border p-4 rounded-lg">
              <img src={project.image} alt={`Project ${index + 1}`} className="w-full h-48 object-cover rounded-md" />
              <p className="mt-2 text-sm text-red-400">{project.techStack}</p>
              <div className="mt-2 flex flex-wrap gap-2">
                {project.tags.map((tag, idx) => (
                  <span key={idx} className="text-xs font-semibold text-blue-500 bg-blue-100 px-2 py-1 rounded">
                    {tag}
                  </span>
                ))}
              </div>
              <p className="mt-2">
                {isExpanded ? project.about : shortDescription}
                {isLongDescription && (
                  <button
                    onClick={() => toggleExpand(index)}
                    className="text-blue-500 ml-2"
                  >
                    {isExpanded ? 'Show Less' : 'Read More'}
                  </button>
                )}
              </p>
              <a href={project.link} className="text-blue-500 mt-2 block">View Project</a>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
