import { motion } from "motion/react";
import React from "react";



function ProcessItem({ number, title }) {
    return (
  <>
    <motion.div
      className="process-item"
      whileHover={{ x: 8 }}
      transition={{ duration: 0.2 }}
    >
      <span>{number}</span>
      <strong>{title}</strong>
    </motion.div>
    
    </>
  );
}
export default ProcessItem;