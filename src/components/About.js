import AboutImg from "../assets/about.png";

export default function About() {
  const config = {
    line1:
      "Hi, My name is Ahmd Rashid. I am a final-year student pursuing a BEng (Hons) in Software Engineering at the University of Westminster, I bring a strong foundation in programming, problem-solving, and hands-on experience in full-stack development and agile software engineering.",
    line2:
      "Currently serving as an Undergraduate Trainee at IFS R&D International (Pvt) Ltd and I have contributed to the development and maintenance of the IFS Framework,",
    line3:
      " I am sharping my skills in Frontend skills like React.js, Redux, Redux Tool Kit, Axios, Tailwind CSS, SaSS, Css3 and many more .",

    line4:
      "In backend I'm focusing on Node.js, Express.js, MongoDB,  and Spring Boot",
  };

  return (
    <section className="flex flex-col md:flex-row bg-black/95 px-5" id="about">
      <div className="py-5 md:w-1/2">
        <img src={AboutImg} />
      </div>
      <div className="md:w-1/2 flex justify-center">
        <div className="flex flex-col justify-center text-white">
          <h1 className="text-4xl border-b-4 border-primary mb-5 w-[170px] font-bold">
            About Me
          </h1>
          <p className="pb-5">{config.line1}</p>
          <p className="pb-5">{config.line2}</p>
          <p className="pb-5">{config.line3}</p>
          <p className="pb-5">{config.line4}</p>
        </div>
      </div>
    </section>
  );
}
