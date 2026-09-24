import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { motion } from "motion/react";

function ContactPage() {
  return (
    <div className="flex min-h-[80vh] w-full flex-col items-center justify-center gap-4 px-4 py-8 sm:px-8 lg:flex-row lg:gap-0">
      <div className="card bg-base-300 rounded-box grid h-auto w-full place-items-center lg:w-1/2">
        <div className="card-body items-center text-center">
          <h2 className="card-title mb-4 text-2xl fonty-bold sm:text-3xl">Stay In Touch With Me.</h2>
          <p className="mb-4 text-base sm:text-lg">
            Interested in working together or have any questions? Feel free to reach out to me through the contact form or connect with me on social media. I look forward to hearing from you!
          </p>
          <div className="card-actions flex flex-col sm:flex-row justify-center items-center gap-4">
            <motion.a whileHover={{ y: -10 }} href="https://www.linkedin.com/in/fhatuwani-raphalalani" target="_blank">
              <button className="btn btn-secondary">Connect on LinkedIn <FaLinkedin /></button>
            </motion.a>
             <motion.a whileHover={{ y: -10 }} href="https://github.com/BigguyFM98000/" target="_blank">
              <button className="btn btn-secondary">Connect on GitHub <FaGithub /></button>
            </motion.a>
             <motion.a whileHover={{ y: -10 }} href="https://www.instagram.com/fhatuwani_bigguy/" target="_blank">
              <button className="btn btn-secondary">Follow on Instagram <FaInstagramSquare /></button>
            </motion.a>
          </div>
        </div>
      </div>
      <div className="divider my-0 w-full lg:divider-horizontal lg:h-auto lg:w-auto"></div>
      <div className="card bg-base-100 rounded-box grid h-auto w-full place-items-center lg:w-1/2">
        <div className="card bg-base-300 w-full max-w-lg shrink-0 shadow-2xl">
          <div className="card-body">
            <form action="https://formspree.io/f/xqpapkwg" method="POST">
            <fieldset className="fieldset">
                <legend className="text-3xl text-bold text-center">Contact Form.</legend>
              <fieldset className="fieldset">
                <legend className="fieldset-legend">Full Name<span className="text-red-500 mr-0">*</span></legend>
                <input
                  type="text"
                  name="fullName"
                  className="input w-full"
                  placeholder="Enter your full name"
                  required
                />
              </fieldset>
              <fieldset className="fieldset">
                <legend className="fieldset-legend">Email Address<span className="text-red-500">*</span></legend>
                <input
                  type="email"
                  name="email"
                  className="input w-full"
                  placeholder="Enter your email address"
                  required
                />
              </fieldset>
              <fieldset className="fieldset">
                <legend className="fieldset-legend">Your Message<span className="text-red-500">*</span></legend>
                <textarea
                  className="textarea h-24 w-full"
                  name="message"
                  placeholder="Enter message"
                  required
                ></textarea>
              </fieldset>
              <motion.button whileHover={{ y: -5 }} className="btn btn-secondary mt-4" type="submit">Submit Message</motion.button>
            </fieldset>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
