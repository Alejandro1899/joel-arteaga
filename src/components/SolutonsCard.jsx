import {motion} from "motion/react"



function SolutionCard({title, number, text}) {
  return (
    <motion.article
    className="solution-card"
    whileHover={{ y: -8 }}
    transition={{ duration: 0.25 }}>
      <span className="solution-number">{number}</span>
    
      <h3 className="solution-title">{title}</h3>
      <p className="solution-text">{text}</p>
    
      <span className ="card-arrow">→</span>
    </motion.article>
  );

}



export default SolutionCard;
