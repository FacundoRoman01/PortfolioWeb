import styles from './HeroStyles.module.css';
//import heroImg from '../../assets/Design uten navn.png';
import fotoPerfil from "../../assets/foto-perfil.jpeg";
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import instagramLight from '../../assets/instagram-light.svg';
import instagramDark from '../../assets/instagram-dark.svg';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';
//import CV from '../../assets/cv.pdf';
import { useTheme } from '../../common/ThemeContext';

function Hero() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === 'light' ? sun : moon;
  const instagramIcon = theme === 'light' ? instagramLight : instagramDark;
  const githubIcon = theme === 'light' ? githubLight : githubDark;
  const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;

  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img
          src={fotoPerfil}
          className={styles.hero}
          alt=""
        />
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="Color mode icon"
          onClick={toggleTheme}
        />
      </div>
      <div className={styles.info}>
        <h1 className="tracking-in-expand-fwd">
          Facundo
          <br />
          <span className='color-apellid tracking-in-expand-fwd'>Roman</span>
        </h1>
        <h2>Software Developer</h2>
        <span>
        <a href="https://www.instagram.com/miblogcode/" target="_blank" rel="noopener noreferrer">
            <img src={instagramIcon} alt="Instagram icon" />
        </a>
          <a href="https://github.com/FacundoRoman01" target="_blank">
            <img src={githubIcon} alt="Github icon" />
          </a>
          <a href="https://www.linkedin.com/in/facundoroman/" target="_blank">
            <img src={linkedinIcon} alt="Linkedin icon" />
          </a>
        </span>
        <p className={styles.description}>
        Especializado en el desarrollo de páginas web modernas para una variedad de negocios comerciales.
        </p>
        <a>
          <button className="hover" title='Preparando el curriculum'>CV</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
