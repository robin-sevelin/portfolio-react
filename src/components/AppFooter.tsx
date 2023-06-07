import { AppContact } from './AppContact';
import { AppMedia } from './AppMedia';

export const AppFooter = () => {
  return (
    <footer>
      <section className='contact'>
        <AppContact />
      </section>
      <section className='social-media'>
        <AppMedia />
      </section>
    </footer>
  );
};
