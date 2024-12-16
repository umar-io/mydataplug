import { motion } from "motion/react";

const Card = ({ text, name, title }) => {
  return (
    <motion.div
      initial={{ scale: 0 }}
      whileInView={{ scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="headercolorschemeonscroll text-black rounded-md p-6 flex flex-col items-center"
    >
      <p className="text-center mb-4">{text}</p>
      <p className="font-bold">{name}</p>
      <p className="">{title}</p>
    </motion.div>
  );
};

const Testimonials = () => {
  const testimonialData = [
    {
      text: "I used to dread paying my bills. It was always such a hassle. Mydataplug has completely changed that! Now I can pay everything quickly and easily, all in one place. It's a lifesaver!",
      name: "Aisha Bello",
      title: "Entrepreneur",
    },
    {
      text: "Mydataplug is incredibly convenient! I can pay all my bills on the go, anytime, anywhere. The interface is so user-friendly, and I love the peace of mind knowing my payments are secure",
      name: "Femi Adebayo",
      title: "Accountant",
    },
    {
      text: "As a small business owner, time is precious. Mydataplug saves me so much time and effort. The platform is efficient, reliable, and their customer support is top-notch. Highly recommend!",
      name: "Chioma Eze",
      title: "Business Owner",
    },
  ];

  return (
    <section className="w-full flex flex-col gap-10 lg:px-[70px] px-[35px] py-[35px]">
      <h3 className="text-black lg:text-4xl text-2xl font-normal text-center">
        Feedbacks we get from our customer&apos;s
      </h3>

      <div className="flex lg:flex-row flex-col justify-center transition-transform duration-500 ease-in-out gap-4">
        {testimonialData.map((testimonial, index) => (
          <Card
            key={index}
            text={testimonial.text}
            name={testimonial.name}
            title={testimonial.title}
          />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
