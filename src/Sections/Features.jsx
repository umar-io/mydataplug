import { IoFlashSharp } from "react-icons/io5";
import { GrSecure } from "react-icons/gr";
import { GrTransaction } from "react-icons/gr";
import { motion } from "motion/react";
const Card = ({ children, icon, title, description }) => {
  return (
    <motion.div
      initial={{ translateX: -100 }}
      whileInView={{ translateX: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3 }}
      className="text-black headercolorschemeonscroll backdrop-blur-sm flex flex-col justify-start px-3 py-3 lg:w-1/3 w-full rounded-md gap-5 shadow-md"
    >
      <div className="flex justify-center items-center h-[50px] w-[50px] rounded-[50%] bg-[#C72818] text-white">
        {icon}
      </div>
      <h4 className="text-2xl tracking-[-2px]">{title}</h4>
      <p className="text-[17px] tracking-tighter">{description}</p>
    </motion.div>
  );
};

const Features = () => {
  const FeatureData = [
    {
      icon: <IoFlashSharp className="text-2xl" />,
      title: "Fast Service",
      description:
        "Enjoy a streamlined billpayment experience from myplugdata.",
    },
    {
      icon: <GrSecure className="text-2xl" />,
      title: "Secure Service",
      description:
        "mydataplug ensures that your funds reaches the destination of the receipient instantly, with top-notch security",
    },
    {
      icon: <GrTransaction className="text-2xl" />,
      title: "Trackable Transactions",
      description:
        "mydataplug is able to let you as a user or merchant track all your transactions.",
    },
  ];
  return (
    <section className="w-full flex flex-col gap-10 lg:px-[70px] px-[35px] py-[35px]">
      <h3 className="text-black lg:text-4xl text-2xl font-normal text-center ">
        Why we need you to choose us{" "}
      </h3>
      <article className="flex lg:flex-row md:flex-row flex-col w-full gap-5">
        {FeatureData.map((feature, index) => (
          <Card key={index} {...feature} />
        ))}
      </article>
    </section>
  );
};
export default Features;
