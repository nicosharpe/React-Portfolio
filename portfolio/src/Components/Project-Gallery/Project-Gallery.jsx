import React, { useState } from 'react';
import dataSet from '../../utils/Projects.json';
import ProjectCard from '../Project-Showcase-Card/Project-Card';

function ProjectGallery() {
// logic will run BEFORE the COMPONENT LOADS / RENDERS
const [projects, setProjects] = useState(dataSet);
/*
const [bingo, chicken] = useState();

let test = "somevalue";

test = { name: "Bobby" }
*/ 

  return (
    <>
    <h2>Project Gallery </h2>
    { /* projects.map(function(proj) {
        return (
           <div>{proj.title}</div>
           )
    })  */ }

    { projects.map( (proj) => (
        <ProjectCard proj={proj} key={proj.id}/>
    )) }
    
    </>
  )
}

export default ProjectGallery;