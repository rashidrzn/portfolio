import HeroImg from "../assets/niyami-removebg-preview.png";
import {
  AiOutlineTwitter,
  AiOutlineFacebook,
  AiOutlineLinkedin,
  AiOutlineInstagram,
  AiOutlineGithub,
} from "react-icons/ai";

export default function Hero() {
  const config = {
    subtitle: "I'm a Software Developer and Designer",
    link: "/Ahamed Rashid CV.pdf",
    social: {
      facebook: "https://www.facebook.com/rashid.rizan.9/",
      instagram: "https://www.instagram.com/rashid_rizan/",
      linkedin: "https://www.linkedin.com/in/rashidrzn8/",
      github: "https://github.com/rashidrzn",
    },
  };

  return (
    <section className="flex flex-col md:flex-row px-32 py-40 bg-black justify-center">
      <div className="md:w-1/2 flex flex-col">
        <h1 className=" text-white text-6xl ">
          Hi, <br /> I'm{" "}
          <span className="text-primary hover:text-black">Ahamed</span> Rashid
          <p className="text-2xl">{config.subtitle}</p>
        </h1>
        <div className="flex px-10 gap-10  py-10">
          <a
            href={config.social.facebook}
            className="pr-15 text-white  hover:text-white"
            target="_blank"
          >
            <AiOutlineFacebook size={40} />
          </a>
          <a
            href={config.social.instagram}
            className="text-white  hover:text-white"
            target="_blank"
          >
            <AiOutlineInstagram size={40} />
          </a>
          <a
            href={config.social.github}
            className=" text-white  hover:text-white"
            target="_blank"
          >
            <AiOutlineGithub size={40} />
          </a>
          <a
            href={config.social.linkedin}
            className="text-white  hover:text-white"
            target="_blank"
          >
            <AiOutlineLinkedin size={40} />
          </a>
        </div>
        <div className="flex px-9  py-1 text-white ">
          <p className="pb-5 ">
            <a className="btn" href={config.link} download>
              {" "}
              Get In Touch by Download My Resume
            </a>
          </p>
        </div>
      </div>
      <img className="md:w-1/3" src={HeroImg} />
    </section>
  );
}
