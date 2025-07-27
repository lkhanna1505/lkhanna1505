import { motion, useAnimation } from "framer-motion";
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";

import { portfolio } from "../data";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  image,
  github,
}) => {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start("show");
    }
  }, [controls, inView]);

  const isEven = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={fadeIn("up", "spring", 0, 0.75)}
      className={`w-full mt-[-2px] flex flex-col md:flex-row ${isEven ? "md:flex-row" : "md:flex-row-reverse"} gap-3`}
    >
      <div className='relative w-full md:w-3/5'>
        <a href={github} target="_blank" rel="noopener noreferrer">
          <img
            src={image}
            alt={name}
            className='w-full h-auto object-cover md:rounded-2xl'
          />
        </a>
      </div>

      <div className={`w-full md:w-2/5 px-4 md:p-10 flex flex-col justify-center ${isEven ? "text-left md:text-left" : "text-left md:text-right"}`}>
        <a href={github} target="_blank" rel="noopener noreferrer">
          <h3 className='text-white font-medium text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl leading-tight hover:underline'>
            {name}
          </h3>
        </a>
        <p className='mt-2 text-secondary text-xs sm:text-xs md:text-sm lg:text-base xl:text-lg 2xl:text-xl'>{description}</p>
      </div>
    </motion.div>
  );
};

const Portfolio = () => {
  return (
    <div className='text-center md:text-left md:px-12 lg:px-24'>
      <motion.div variants={textVariant()}>
        <h2 className={`${styles.sectionText} text-2xl md:text-3xl lg:text-4xl`}>Projects</h2>
      </motion.div>

      <div className='mt-6 md:mt-12 flex flex-col gap-6 md:gap-12'>
        {portfolio.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Portfolio, "portfolio");
