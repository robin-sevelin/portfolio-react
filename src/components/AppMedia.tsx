export const AppMedia = () => {
  return (
    <>
      {' '}
      <h3>Sociala medier</h3>
      <nav>
        <ul>
          <li>
            <span className='fa fa-facebook' aria-hidden='true'></span>
            <a
              href='https://www.facebook.com/profile.php?id=100005617639204'
              target='_blank'
            >
              Facebook
            </a>
          </li>
          <li>
            <span className='fa fa-github' aria-hidden='true'></span>
            <a href='https://github.com/robin-sevelin' target='_blank'>
              Github
            </a>
          </li>
          <li>
            <span className='fa fa-linkedin' aria-hidden='true'></span>
            <a
              href='https://www.linkedin.com/in/robin-sevelin-336b20168/'
              target='_blank'
            >
              LinkedIn
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};
