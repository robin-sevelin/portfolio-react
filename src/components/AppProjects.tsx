import { useState } from 'react';
import { Project } from '../models/projects';

const projects = [
  new Project(
    'Väder app',
    'En väder app som hämtar data från open weather API',
    'https://robin-sevelin.github.io/weather-app/',
    'img/weather-app-img.jpg'
  ),
  new Project(
    'To the moon',
    'Ett första projekt där man tillämpade css styling',
    'https://robin-sevelin.github.io/to-the-moon/',
    'img/to.the-moon-img.jpg'
  ),
  new Project(
    'Kommandoran',
    'Ett projekt där vi byggade en sida utifrån en figma mall',
    'https://medieinstitutet.github.io/fed22d-grafiska-verktyg-krossade-tomaterna/',
    'img/kommandoran-img.jpg'
  ),
  new Project(
    'Ketchup sidan',
    'Ett projekt där vi byggade en sida utifrån en figma mall',
    'https://medieinstitutet.github.io/fed22d-grafiska-verktyg-ketchup/',
    'img/ketchup-img.jpg'
  ),
  new Project(
    'Analog klocka',
    'Ett klocka kodad med JS',
    'https://robin-sevelin.github.io/clock/',
    'img/clock.jpg'
  ),
  new Project(
    'Planning Poker',
    'En planning poker sidan som bygger på socket io',
    'http://164.92.152.210/',
    'img/poker.jpg'
  ),
  new Project(
    'Person randomizer',
    'En app som slumpar personer från random user API',
    'https://robin-sevelin.github.io/person-randomizer/',
    'img/random.jpg'
  ),
];

export const AppProjects = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextProject = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const prevProject = () => {
    setActiveIndex(
      (prevIndex) => (prevIndex - 1 + projects.length) % projects.length
    );
  };

  return (
    <div className='projects-container'>
      <ul>
        {projects.map((project, index) => (
          <li key={index} className={index === activeIndex ? 'active' : ''}>
            <div className='project'>
              <h2>Här är några projekt</h2>
              <h3>{project.title}</h3>
              <a href={project.link} target='_blank'>
                <img src={project.img} alt='' height='250' width='175' />
              </a>
              <p>{project.info}</p>
            </div>
          </li>
        ))}
      </ul>
      <div className='button-container'>
        <button onClick={prevProject}>&#8678;</button>
        <button onClick={nextProject}>&#8680;</button>
      </div>
    </div>
  );
};
