import { AppAbout } from './AppAbout';
import { AppEducation } from './AppEducation';
import { AppPicture } from './AppPicture';
import { AppProjects } from './AppProjects';
import { AppSkills } from './AppSkills';
import { AppWork } from './AppWork';

export const AppMain = () => {
  return (
    <main>
      <section className='about'>
        <AppAbout />
      </section>
      <div className='picture-of-me'>
        <AppPicture />
      </div>
      <section className='education'>
        <AppEducation />
      </section>
      <section className='skills'>
        <AppSkills />
      </section>
      <section className='experience'>
        <AppWork />
      </section>
      <section className='projects'>{/* <AppProjects /> */}</section>
    </main>
  );
};
