import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../varient";
interface Props {
  icon?: any;
  iconColor?: string;
}
const SkillItem = (props: Props) => {
  return (
    <motion.div
      variants={fadeIn("up", 0.7)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: true, amount: 0.7 }}
      className={`${props.iconColor}`}
    >
      <props.icon />
    </motion.div>
  );
};

export default SkillItem;
