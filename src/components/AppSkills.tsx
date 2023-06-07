import { Skill } from '../models/skills';

export const AppSkills = () => {
  const skills = [
    new Skill('Html, Css, Sass, Ux'),
    new Skill('Js, Typescript, React, Vue'),
    new Skill('GitHub, Figma, PhotoShop, GreenSock'),
    new Skill('Testning'),
    new Skill('Api utveckling, Node JS'),
    new Skill('Svenska, Engelska'),
    new Skill('B-körkort'),
    new Skill('Glad, omtänksam, lugn'),
    new Skill('Hög social kompetens'),
    new Skill('Noggrann'),
  ];
  return (
    <div className='skills'>
      <h2>Färdigheter</h2>
      <ul>
        {skills.map((skill, index) => (
          <li key={index}>
            <span className='fa fa-hashtag' aria-hidden='true'></span>
            {skill.content}
          </li>
        ))}
      </ul>
    </div>
  );
};

// h2 {
//     font-size: 1.5rem;
//   }

//   span {
//     color: orangered;
//     margin-right: 10px;
//   }

//   li {
//     padding: 10px;
//     list-style: none;
//   }

//   .skills {
//     background-color: white;
//     margin-top: 20px;
//   }
