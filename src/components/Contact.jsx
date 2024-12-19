import { motion } from "framer-motion";
import "../assets/css/common.scss";
import "../assets/css/style.scss";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
import { Toaster } from "react-hot-toast";
// import { useMediaQuery } from "react-responsive";

const Contact = () => {
  // const ref = useRef();
  // const isInView = useInView(ref, { margin: "-100px" });
  const formRef = useRef();
  // const isSmallScreen = useMediaQuery({ query: "(max-width: 992px)" });

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_8smsl5r",
        "template_1oi4qht",
        formRef.current,
        "a8970r0DHYQONL7Qo"
      )
      .then(
        (response) => {
          console.log("Email sent successfully:", response);
          toast.success("Email sent successfully!");
          formRef.current.reset();
        },
        (error) => {
          console.error("Email sending failed:", error);
          toast.error("Failed to send email.");
        }
      );
  };

  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <Toaster position="top-right" reverseOrder={false} />
      <div className="w-full max-w-[1300px] mx-auto flex justify-center flex-col lg:justify-between lg:flex-row">
        <div className="w-full">
          <motion.h2
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: -100 }}
            transition={{ duration: 0.5 }}
            className="my-10 lg:my-10 text-5xl"
          >
            Contact
          </motion.h2>
          <div className="flex flex-col gap-3">
            <div className="flex flex-col text-m lg:text-lg">
              <div className="flex gap-2 items-center">
                <div className="rounded-full bg-[rgb(21,16,48)] p-2">
                  <MdOutlineMailOutline />
                </div>
                <p>Mail: </p>
                <a href="mailto:aytac2003qehremanova@gmail.com">
                  aytac2003qehremanova@gmail.com
                </a>
              </div>
            </div>
            <div className="flex flex-col text-m lg:text-lg">
              <div className="flex gap-2 items-center">
                <div className="rounded-full bg-[rgb(21,16,48)] p-2">
                  <FaPhoneAlt />
                </div>
                <p>Phone: </p>
                <a href="tel:+994557150540">055-715-05-40</a>
              </div>
            </div>
          </div>
        </div>
        <div className="relative contact-form w-full p-3">
          {/* <motion.div
            ref={ref}
            className="phone absolute m-auto"
            initial={{ opacity: 1 }}
            whileInView={{ opacity: 0 }}
            transition={{ delay: 3, duration: 1 }}
          >
            <svg
              className="phone-svg"
              fill="#000000"
              width="400px"
              height="400px"
              viewBox="0 0 32 32"
            >
              <motion.path
                strokeWidth={0.2}
                initial={{ pathLength: 0 }}
                animate={isInView ? { pathLength: 1 } : {}}
                transition={{ duration: 3 }}
                d="M18.037 6.635c-0.011-0.001-0.023-0.001-0.035-0.001-0.414 0-0.75 0.336-0.75 0.75 0 0.399 0.312 0.726 0.706 0.749l0.002 0c3.533 0.231 6.311 3.153 6.311 6.723 0 0.186-0.008 0.37-0.022 0.552l0.002-0.024c0 0.414 0.336 0.75 0.75 0.75s0.75-0.336 0.75-0.75v0c0.009-0.143 0.014-0.31 0.014-0.479 0-4.38-3.397-7.967-7.7-8.269l-0.026-0.001zM17.963 2.749c0.449 0.022 10.998 0.688 10.998 12.635 0 0.414 0.336 0.75 0.75 0.75s0.75-0.336 0.75-0.75v0c0.015-0.238 0.024-0.515 0.024-0.795 0-7.059-5.471-12.841-12.405-13.335l-0.043-0.002c-0.009-0-0.019-0.001-0.029-0.001-0.403 0-0.732 0.314-0.757 0.71l-0 0.002c-0.001 0.011-0.001 0.024-0.001 0.037 0 0.401 0.315 0.729 0.711 0.749l0.002 0zM30.637 23.15c-0.109-0.675-0.334-1.281-0.654-1.823l0.013 0.024c-0.114-0.186-0.301-0.317-0.521-0.353l-0.004-0.001-8.969-1.424c-0.035-0.006-0.076-0.009-0.117-0.009-0.207 0-0.395 0.083-0.531 0.218l0-0c-0.676 0.68-1.194 1.516-1.496 2.451l-0.012 0.044c-4.016-1.64-7.141-4.765-8.742-8.675l-0.038-0.105c0.978-0.314 1.814-0.833 2.493-1.509l-0 0c0.136-0.136 0.22-0.324 0.22-0.531 0-0.041-0.003-0.081-0.010-0.12l0.001 0.004-1.425-8.969c-0.036-0.224-0.167-0.412-0.35-0.524l-0.003-0.002c-0.505-0.301-1.094-0.522-1.724-0.626l-0.029-0.004c-0.315-0.070-0.677-0.111-1.048-0.111-0.025 0-0.050 0-0.075 0.001l0.004-0h-0.006c-3.497 0.024-6.326 2.855-6.347 6.351v0.002c0.015 12.761 10.355 23.102 23.115 23.117h0.002c3.5-0.023 6.331-2.854 6.354-6.351v-0.002c0-0.020 0-0.044 0-0.068 0-0.356-0.036-0.703-0.106-1.038l0.006 0.033zM24.383 29.076c-11.933-0.014-21.602-9.684-21.616-21.616v-0.001c0.019-2.673 2.182-4.835 4.854-4.853h0.002c0.016-0 0.036-0 0.055-0 0.272 0 0.537 0.030 0.793 0.086l-0.024-0.005c0.366 0.060 0.695 0.161 1.003 0.3l-0.025-0.010 1.302 8.202c-0.628 0.528-1.404 0.901-2.257 1.050l-0.029 0.004c-0.355 0.064-0.62 0.37-0.62 0.739 0 0.088 0.015 0.172 0.043 0.25l-0.002-0.005c1.772 5.072 5.695 8.994 10.646 10.729l0.121 0.037c0.073 0.026 0.157 0.041 0.245 0.041 0.368 0 0.674-0.265 0.737-0.615l0.001-0.005c0.153-0.882 0.526-1.658 1.061-2.295l-0.006 0.007 8.201 1.303c0.133 0.294 0.237 0.636 0.296 0.994l0.003 0.024c0.046 0.219 0.073 0.471 0.073 0.729 0 0.018-0 0.035-0 0.053l0-0.003c-0.016 2.675-2.179 4.84-4.852 4.859h-0.002z"
              ></motion.path>
            </svg>
          </motion.div> */}
          <motion.form
            ref={formRef}
            onSubmit={sendEmail}
            className="flex flex-col items-center gap-3"
            // initial={{ opacity: 0 }}
            // whileInView={{ opacity: 1 }}
            // transition={{ delay: isSmallScreen ? 0 : 4, duration: 1 }}
          >
            <input
              className="bg-gradient-to-l from-blue-950 to-sky-800 w-full lg:w-[80%] py-3 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
              type="text"
              required
              placeholder="Name"
              name="name"
            />
            <input
              className="bg-gradient-to-l from-blue-950 to-sky-800 w-full lg:w-[80%] py-3 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
              type="email"
              required
              placeholder="Email"
              name="email"
            />
            <textarea
              className="bg-gradient-to-l from-blue-950 to-sky-800 resize-none h-[200px] w-full lg:w-[80%] py-3 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
              placeholder="Message"
              name="message"
            />
            <button className="bg-gradient-to-l from-blue-800 to-sky-800 py-3 px-8 outline-none w-full lg:w-fit text-white shadow-md shadow-primary rounded-xl submit-btn cursor-pointer">
              Submit
            </button>
          </motion.form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
