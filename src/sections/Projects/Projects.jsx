import styles from './ProjectsStyles.module.css';
// import logo from "../../assets/logo.jpg";
import libro from "../../assets/libro.png";
import mates from '../../assets/mates.png';
import fr from '../../assets/fr-pinamar.jpg';
import fitLift from '../../assets/fitlift.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (

    <div data-aos="fade-right"
     >
      <section id="projects" className={styles.container} >
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={fr }
          link="https://fr-pinamar.netlify.app/index.html"
          h3="FR"
          p="Agencia de Marketing"
        />
        <ProjectCard
          src={libro}
          link="https://github.com/facundoroman7/Eccomerce-react"
          h3="Libros"
          p="Ecommerce de libros"
        />
        <ProjectCard
          src={mates}
          link="https://github.com/facundoroman7/TiendaMates"
          h3="TiendaMates"
          p="Ecommerce de mates"
        />
        <ProjectCard
          src={fitLift}
          link="https://github.com/Ade-mir/company-landing-page-2"
          h3="FitLift"
          p="Fitness App"
        />
      </div>
    </section>

  </div>
    
  );
}

export default Projects;
