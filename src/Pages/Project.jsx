import React, { useEffect, useState } from 'react'

function Project() {
    const [pro,setPro] = useState();
    useEffect(()=>{
        fetch("/project.json").then(res=>res.json()).then(data=>setPro(data.project));
    },[])
    console.log(pro);
    
  return (
    <>
    
     <div className="container projects-container mx-auto" id='project'>
        <h1 className="projects-title namess text-primary">Projects</h1>
        <p className="projects-subtitle fw-bold fs-3 mb-5 pb-3">Things I've built so far</p>
        
        <div className="row gap-5 mx-auto">
           {pro&&pro.map((val,index)=>(
             <div className="col-12 col-md-6 col-lg-4 mx-auto" key={index}>
                <div className="project-card">
                    <img src={`${val.imgs}`} alt="Timesheet Management App" className="project-img"/>
                    <div className="card-body">
                        <h2 className="project-title text-dark">{val.title}</h2>
                        <div className="link-row">
                            <a href={val.link} target='_blank' className="project-link">View Project</a>
                        </div>
                        <p className="project-description">{val.description}</p>
                    </div>
                </div>
            </div>
           ))}
         </div>
            </div>

    </>
  )
}

export default Project