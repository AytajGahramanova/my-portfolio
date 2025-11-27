import { RiReactjsLine } from "react-icons/ri";
import { DiJavascript1 } from "react-icons/di";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiNextdotjs } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { TbBrandCSharp } from "react-icons/tb";
import { AiOutlineDotNet } from "react-icons/ai";
import { motion } from "framer-motion";
import "../assets/css/common.scss";
import "../assets/css/style.scss";

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Technologies = () => {
  return (
    <div className="border-b border-neutral-900 pb-24">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-10 lg:my-20  text-center text-4xl"
      >
        Technologies
      </motion.h2>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-4"
      >
        <motion.div
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className="cursor-pointer rounded-2xl border-4 border-neutral-800 p-4"
        >
          <DiJavascript1 className="text-7xl text-[#F0DB4F]" />
        </motion.div>
        <motion.div
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className="cursor-pointer rounded-2xl border-4 border-neutral-800 p-4"
        >
          <RiReactjsLine className="text-7xl text-cyan-400" />
        </motion.div>
        <motion.div
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className="cursor-pointer rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiNextdotjs className="text-7xl text-stone-100" />
        </motion.div>
        <motion.div
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className="cursor-pointer rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiTypescript className="text-7xl text-[#007ACC]" />
        </motion.div>
        <motion.div
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
          className="cursor-pointer rounded-2xl border-4 border-neutral-800 p-4"
        >
          <RiTailwindCssFill className="text-7xl text-[#44a9b3]" />
        </motion.div>
        <motion.div
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
          className="cursor-pointer rounded-2xl border-4 border-neutral-800 p-4"
        >
          <TbBrandCSharp className="text-7xl text-[#BA74D9]" />
        </motion.div>
        <motion.div
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
          className="cursor-pointer rounded-2xl border-4 border-neutral-800 p-4"
        >
          <AiOutlineDotNet className="text-7xl text-[#BA74D9]" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Technologies;
