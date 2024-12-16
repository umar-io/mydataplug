import shapeSpiral from "../assets/shape-1.png";
import { FaWifi } from "react-icons/fa6";
import { motion } from "motion/react";
import { useNavigate } from "react-router-dom";
const Hero = () => {
  const navigate = useNavigate();

  const redirect = () => {
    navigate("/register");
  };
  return (
    <motion.section
      initial={{ scale: 0 }}
      whileInView={{ scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      className="w-full flex-col hero"
    >
      <div className="text-white text-4xl absolute right-10 top-[80%] z-[2] icon-animate">
        <FaWifi />
      </div>
      {/* <img
        src={shapeSpiral}
        alt=""
        className="bg-animate lg:h-full absolute -left-[50px] -top-[40px] z-10 object-cover"
      /> */}
      <article className="text-white lg:w-[50%] w-full absolute z-50 bg-transparent top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] gap-10 flex flex-col">
        <h1 className="text-4xl text-center font-[400]">
          Your One-Stop Solution for Mobile Data and Airtime!
        </h1>
        <p className="text-[15px] text-center ">
          Fast, Reliable, and Affordable VTU Services at Your Fingertips.
        </p>
        <motion.div
          whileTap={{
            scale: 0.8,
          }}
          className="btn w-[200px] px-3 bg-[#FA811C] text-white flex justify-center items-center py-3 rounded-md cursor-pointer self-center"
          onClick={redirect}
        >
          Get Started Now
        </motion.div>
      </article>
    </motion.section>
  );
};
export default Hero;
