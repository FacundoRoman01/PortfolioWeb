import styles from './SkillsStyles.module.css';
// import checkMarkIconDark from '../../assets/checkmark-dark.svg';
// import checkMarkIconLight from "../../assets/checkmark-light.svg";
import java from "../../assets/java.png";
import html from "../../assets/html-5.png";
import js from "../../assets/js.png";
import Git from "../../assets/githab.png";
import mysql from "../../assets/mysql.png";
import node from "../../assets/node.png";
import react from "../../assets/react.js.png";
import bts from "../../assets/bts.png";
// import html from "../../assets/html-port.png";
import css from "../../assets/css-3.png";
import SkillList from '../../common/SkillList';
// import { useTheme } from '../../common/ThemeContext';

function Skills() {
  // const { theme } = useTheme();
  // const checkMarkIcon = theme === 'light' ? checkMarkIconLight : checkMarkIconDark;

  return (

    <div data-aos="zoom-in">
      <section id="skills" className={styles.container}>
      <h1 className="sectionTitle">Skills</h1>
      <div className={styles.skillList}>
        <SkillList src={html} skill="" />
        {/* <img src={html} alt="" /> */}
        <SkillList src={css} skill="CSS" />
        <SkillList src={js} skill="JavaScript" />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList src={react} skill="React" />
        {/* <img src={java} alt="" /> */}
        <SkillList src={java} skill="Java" /> 
        <SkillList src={node} skill="Node" />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList src={Git} skill="Git" />
        <SkillList src={bts} skill="Bootstrap" />
        <SkillList src={mysql} skill="SQL" />
      </div>
    </section>
    </div>
    
  );
}

export default Skills;
