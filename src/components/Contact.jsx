import GITHUB_SOLID from "../assets/GITHUB_SOLID.svg";
import LINKEDIN from "../assets/LINKEDIN.svg";
import { contacts } from "../constants";

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative bg-licorice text-white min-h-screen scroll-mt-20"
    >
      <div className="absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-charcoal to-transparent z-10" />

      <div className="relative z-20 flex flex-col justify-center items-center space-y-6 gap-10 text-center">
        <h2 className="text-3xl font-bold">CONTACT</h2>
        <h3 className="text-base md:text-xl font-poppins">
          Want to connect with me? You can reach me on these.
        </h3>
        <div className="flex flex-wrap justify-center items-center gap-4">
          <a
            href={contacts.gitHub}
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 flex items-center justify-center transition duration-300"
          >
            <img
              src={GITHUB_SOLID}
              alt="GitHub"
              className="w-9 h-9 object-contain transition duration-300 hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]"
            />
          </a>
          <a
            href={contacts.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 flex items-center justify-center transition duration-300"
          >
            <img
              src={LINKEDIN}
              alt="LinkedIn"
              className="w-12 h-12 object-contain transition duration-300 hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]"
            />
          </a>
        </div>
      </div>

      <div className="absolute bottom-0 inset-x-0 h-48 bg-gradient-to-t from-charcoal via-charcoal to-transparent z-10" />
    </section>
  );
};

export default Contact;
