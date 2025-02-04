import React, { useState, useEffect } from 'react';

const Projects = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const projects = [
    { title: 'JobHub', img: "/jobhub.png", description: "A platfrom for both jobseekers and recruiters.To easily find jobs filter by location,Jobtype and experience etc.. And more features", StackUsed: "MERN", githubLink: "https://github.com/aswiniiiiiiiii/jobportal-frontend/tree/main/src", liveDemo: "https://jobhubproject.vercel.app/" },
    { title: 'Parallax in React', img: "/parallax.png", description: "A parallax website built using React and JavaScript creates an interactive, dynamic scrolling effect that enhances the user experience.", StackUsed: "React,Javascript", githubLink: "https://github.com/aswiniiiiiiiii/Travel.com", liveDemo: "https://travel-com-tau.vercel.app/" },
    { title: 'Todo', img: "/todo.png", description: "A to-do website built with React and JSON Server for data storage allows users to manage tasks efficiently with persistent storage. ", StackUsed: "React,Javascript,JSON Server", githubLink: "https://github.com/aswiniiiiiiiii/todoApp/tree/main/src", liveDemo: "https://todo-app-aswini.vercel.app/" },
    { title: 'Chat Application', img: "/chat.png", StackUsed: "React,Javascript,websocket.io", description: "ChatApplication,used websocket.io for live interactions", githubLink: "https://github.com/aswiniiiiiiiii/todoApp/tree/main/src", liveDemo: "https://todo-app-aswini.vercel.app/" },
    { title: 'Amazon Clone', img: "/amazon.png", description: "An Amazon clone website built with HTML, CSS, and Bootstrap design of the popular e-commerce platform.",StackUsed: "HTML,CSS,Bootstrap",  githubLink: "https://github.com/aswiniiiiiiiii/amazon-clone/tree/main", liveDemo: "https://amazon-clone-aswini.vercel.app/" },
    { title: 'Parallax In HTML,CSS,JS', img: "/parallax2.png", StackUsed: "HTML,CSS,Javascript", description: "A parallax website , creates a visually captivating effect by making background images move at different speeds during scrolling.", githubLink: "https://github.com/aswiniiiiiiiii/parallax/tree/main", liveDemo: "https://parallax-travel-eight.vercel.app/" },
    { title: 'Recipe Listing', img: "/recipe.png", StackUsed: "React,Javascript", description: "A simple recipe listing application,user RECIPEAPI", githubLink: "https://github.com/aswiniiiiiiiii/RecipesApp/tree/main/src", liveDemo: "https://todo-app-aswini.vercel.app/" },
    { title: 'Weather App', img: "/weather.png", description: "A weather application user can know live weather details based on location,used weatherAPI for live updates",StackUsed: "React,Javascript", githubLink: "https://github.com/aswiniiiiiiiii/weatherApp/tree/main/src", liveDemo: "https://todo-app-aswini.vercel.app/" },
    { title: 'Brick-Breaker Game', img: "/game.png", description: "A simple brick-breaker game",StackUsed: "React,Javascript", githubLink: "https://github.com/aswiniiiiiiiii/brick-breaker-game", liveDemo: "https://todo-app-aswini.vercel.app/" },
    { title: 'Calculator', img: "/cal.png", description: "Mathematical Calculator",  StackUsed: "HTML,CSS,Javascript", githubLink: "https://github.com/aswiniiiiiiiii/calculator", liveDemo: "https://calculator-nu-three-43.vercel.app/" },
    { title: 'Background Changing App', img: "/bg.png", description: "A simple background color changing application ",  StackUsed: "React,Javascript", githubLink: " https://github.com/aswiniiiiiiiii/bgChangingApp/tree/main/src", liveDemo: "https://bg-changing-app.vercel.app/" },
    { title: 'Cookpedia', img: "/cook.png", description: "platfrom for sharing recipes,Admin can manage all recipes and know how many cuisine types food recipes are downloaded by users and more features ",  StackUsed: "MEAN", githubLink: "https://github.com/aswiniiiiiiiii/cookpedia-frotend/tree/main/src", liveDemo: "https://cookpedia-frotend.vercel.app/" },
    
  ];
  // Pagination State
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 6;

  // Calculate the index of the first and last project for the current page
  const indexOfLastProject = currentPage * cardsPerPage;
  const indexOfFirstProject = indexOfLastProject - cardsPerPage;

  // Slice the projects array to get the current page's projects
  const currentProjects = projects.slice(indexOfFirstProject, indexOfLastProject);

  // Handle pagination
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <section style={{ background: '#0b1121' }} id='projects' className='projects px-10 sm:px-40 lg:px-40  md:px-10 py-20'>
      <h2 className='text-sky-400 mb-2 text-2xl'>03 Development</h2>
      <a data-aos="fade-up-right" className="font-bold cursor-none py-2 relative  before:absolute before:bottom-0 before:left-0 before:w-0 before:h-[2px] before:bg-sky-400 before:transition-all before:duration-300 hover:before:w-full  text-3xl md:text-5xl">Things I've Built</a>

      <div className='grid my-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-5 lg:gap-10'>
        {/* Render the current page's projects */}
        {currentProjects.map((project) => (
          <div data-aos="flip-left" key={project.title} className='projects-card border-2 border-sky-400 rounded overflow-hidden flex flex-col'>
            <div className='projects-img'>
              <img className='w-full rounded' src={project.img} alt="Project" />
            </div>
            <div className="description p-2 md:p-3">
              <h2 className="text-xl font-bold py-2">{project.title}</h2>
              <p className='py-1'>{project.description || "No Description Available"}</p>
              <p className='py-1'><sapn className="text-sky-400">Stack Used</sapn>: {project.StackUsed || "No Stack Available"}</p>
              <div className='flex justify-between my-2'>
                <button style={{borderRadius:'0 20px 0 20px'}} className=' px-2 p-1 md:p-1 md:px-2 bg-sky-400 hover:font-semibold hover:text-black'>
                  <a target='_blank' href={project.githubLink}>Source Code</a>
                </button>
                {/* <button style={{borderRadius:'0 20px 0 20px'}} className=' p-1 px-2 bg-sky-400 hover:text-black hover:font-semibold'>
                  <a target='_blank' href={project.liveDemo}>Live Demo</a>
                </button> */}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination Controls */}
      <div className='flex justify-center mt-8'>
        <button onClick={() => paginate(currentPage - 1)} disabled={currentPage === 1} className={`px-4 py-2 ${currentPage === 1 ? "bg-yellow-500" : "bg-sky-400"} text-white rounded mx-2`}>
          <i className="fa-solid fa-arrow-left px-2"></i>Previous
        </button>
        <button onClick={() => paginate(currentPage + 1)} disabled={currentPage * cardsPerPage >= projects.length} className={`px-4 py-2 ${currentPage * cardsPerPage >= projects.length ? "bg-yellow-500" : "bg-sky-400"} text-white rounded mx-2`}>
          Next<i className="fa-solid fa-arrow-right px-2"></i>
        </button>
      </div>
    </section>
  );
};

export default Projects;
