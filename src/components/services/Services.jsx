import { useRef } from "react";
import "./services.scss";
import { motion, useInView } from "framer-motion";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Services = () => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      animate="animate"
      ref={ref}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
          Our focus is creating the best industry standard 3D gaming assets
          <br /> and move forward.
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <h1>
            <motion.span
              className="about-us"
              whileHover={{ color: "orange" }}
            >
              About Us
            </motion.span>
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.span
              className="what-we-do"
              whileHover={{ color: "orange" }}
            >
            </motion.span>
          </h1>
          
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div
          className="content"
          whileHover={{ background: "rgba(255, 255, 255, 0.1)" }}
        >
          <h2>Who We Are</h2>
          <ul>
            <li>Dedicated professionals</li>
            <li>Top-tier 3D assets</li>
            <li>Cutting-edge creativity</li>
            <li>Global audience focus</li>
          </ul>
        </motion.div>
        <motion.div
          className="content"
          whileHover={{ background: "rgba(255, 255, 255, 0.1)" }}
        >
          <h2>What We Offer</h2>
          <ul>
            <li>Diverse 3D asset library</li>
            <li>Customization services</li>
            <li>Expert support & guidance</li>
            <li>Precision & creativity</li>
          </ul>
        </motion.div>
        <motion.div
          className="content"
          whileHover={{ background: "rgba(255, 255, 255, 0.1)" }}
        >
          <h2>Why Choose Us</h2>
          <ul>
            <li>Exceptional quality assurance</li>
            <li>Customer-centric approach</li>
            <li>Community engagement</li>
            <li>Innovation-driven</li>
          </ul>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;
