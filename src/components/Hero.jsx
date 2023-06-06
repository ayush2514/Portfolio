import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRightCircle } from "react-bootstrap-icons";
import { styles } from "../styles";

const Hero = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 640);
    };

    // Initial check on component mount
    handleResize();

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#915EFF]">Ayush</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I develop web applications, user interfaces
            <br className="sm:block hidden" />
            with good design.
          </p>
          {!isMobile && (
            <>
              <p className={`${styles.heroSubText} mt-2 text-white-100`}>
                If you're interested, I would be delighted to have a
                conversation <br /> and discuss further details.
              </p>
              <a href="https://calendly.com/ayushrajshr44/test">
                <button className="flex items-center mt-2 text-white">
                  <div style={{ fontSize: "30px" }}>Calendly Slots</div>
                  <ArrowRightCircle size={35} className="ml-1" />
                </button>
              </a>
            </>
          )}
        </div>
      </div>

      <div
        className={`absolute xs:bottom-1 bottom-32 w-full flex justify-center items-center ${
          isMobile ? "text-center" : ""
        }`}
      >
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 34, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
