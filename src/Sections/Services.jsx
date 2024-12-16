import { FaWifi , FaPhone , FaTv , FaLightbulb , FaMessage , FaBarcode } from "react-icons/fa6";
import { motion } from "motion/react"

const Card = ({children, icon, title, description}) =>{
    return(
        <motion.div 
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="text-black headercolorschemeonscroll backdrop-blur-sm flex flex-col justify-start px-3 py-3 w-full rounded-md gap-5 shadow-md">
             <div className="flex justify-center items-center h-[50px] w-[50px] rounded-[50%] bg-[#C72818] text-white">
                  {icon}
            </div>
            <h4 className="text-2xl tracking-[-2px]">{title}</h4> 
                <p className="text-[17px] tracking-tighter">
               {description}
                </p>
        </motion.div>
    )
}

const Services = () => {
    const servicesData = [ 
        {
          icon: <FaWifi className="text-2xl" aria-label="Data Topup" />,
          title: "Data Topup",
          description: "Get inexpensive data to access and utilize your preferred social media sites on mydataplug.",
        },
        {
          icon: <FaPhone className="text-2xl" aria-label="Airtime Topup" />,
          title: "Airtime Topup",
          description: "Need to top-up your phone? Log into your mydataplug account to start taking advantage of our discounted airtime.",
        },
        {
            icon:<FaTv className="text-2xl"/>,
            title: "Cable Subscription",
            description: "On our platform, you can subscribe to TV services like DSTV, GOTV, and STARTIMES. Choose your favorite plan, then relax while we promptly activate it.",
          },
          {
            icon: <FaLightbulb className="text-2xl"/>,
            title: "Utility Bill Payment",
            description: "Pay up your electricity bills and get your token instantly on Telecomplug.",
          },
          {
            icon: <FaMessage className="text-2xl"/>,
            title: "Bulk SMS",
            description: "Use our low-cost SMS service to send messages to your loved ones while they are offline.",
          },
          {
            icon: <FaBarcode className="text-2xl"/>,
            title: "Exam Result Checker",
            description: "Check your exam result with pin you generate on Telecomplug.",
          },
      ]
  return (
        <section 
        className="w-full flex flex-col gap-10 lg:px-[70px] px-[35px] py-[35px]">
        <h3 className="text-black lg:text-4xl text-2xl font-normal text-center">Service we render at Mydataplug</h3>
        <article className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
            {
                servicesData.map((service, index) => (
                    <Card key={index} {...service} />
                ))
            }
        </article>
    </section>
  )
}
export default Services