import React from 'react'

function Tech() {
  return (
    <div className="container mx-auto py-5">
        <h1 className="text-center text-primary fw-bold display-2 mb-4 namess">Tech Stack</h1>
        <h2 className="text-center mb-5 pb-2">Technologies I've been working with currently</h2>
        
        <div className="row justify-content-center align-items-center row-gap-5">
         
            <div className="col-6 col-sm-4 col-md-3 text-center">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML5" className="tech-icon" />
            </div>

             <div className="col-6 col-sm-4 col-md-3 text-center">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS3" className="tech-icon"/>
            </div>
            
            
            <div className="col-6 col-sm-4 col-md-3 text-center">
                <img src="https://raw.githubusercontent.com/devicons/devicon/6910f0503efdd315c8f9b858234310c06e04d9c0/icons/bootstrap/bootstrap-original.svg" alt="Tailwind" className="tech-icon"/>
            </div>

            <div className="col-6 col-sm-4 col-md-3 text-center">
                <img src="https://raw.githubusercontent.com/devicons/devicon/6910f0503efdd315c8f9b858234310c06e04d9c0/icons/tailwindcss/tailwindcss-original.svg" alt="JavaScript" className="tech-icon" />
            </div>
          
            <div className="col-6 col-sm-4 col-md-3 text-center">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" className="tech-icon" />
            </div>
            
     
            <div className="col-6 col-sm-4 col-md-3 text-center">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" className="tech-icon" />
            </div>

               <div className="col-6 col-sm-4 col-md-3 text-center">
                <img src="https://raw.githubusercontent.com/devicons/devicon/6910f0503efdd315c8f9b858234310c06e04d9c0/icons/python/python-original.svg" alt="Node.js" className="tech-icon"/>
            </div>
            
    
            <div className="col-6 col-sm-4 col-md-3 text-center">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg" alt="SQL" className="tech-icon"/>
            </div>
        
        </div>
    </div>
  )
}

export default Tech