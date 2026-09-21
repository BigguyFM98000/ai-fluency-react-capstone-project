import fhatuimage from "../assets/fhatu-office.jpeg";

function AboutPage() {
  return (
    <div className="hero bg-base-200 min-h-[80vh]">
      <div className="hero-content flex-col lg:flex-row">
        <img
          alt="Fhatuwani sitting in office chair"
          src={fhatuimage}
          width="200"
          height="200"
          loading="lazy"
          className="w-xl h-full rounded-lg shadow-2xl"
        />
        <div className="sm:max-w-[90vw] md:max-w-[90vw] lg:max-w-[50vw]">
          <h1 className="text-5xl font-bold">About My Career.</h1>
          <p className="py-6">
            I am an aspiring Web Developer with a strong foundation in
            full-stack web development, mobile application development, and
            systems administration. My journey began with Shaper (formerly
            Digital Academy), where I completed a 12-month full-stack developer
            learnership. During this time, I developed practical experience with
            HTML, CSS, JavaScript, Tailwind CSS, React, Express.js, and
            PostgreSQL while building projects that strengthened my
            problem-solving, collaboration, and software development skills.
          </p>
          <p>
            Since then, I have continued to grow through hands-on industry
            experience. I completed a six-month internship at Digital Solution
            Foundry, where I developed mobile applications using Flutter, Dart,
            and Firebase, followed by a three-month web development internship
            that further enhanced my front-end and back-end development
            capabilities. I also participated in the Power Learn Project, where
            I expanded my technical skills in Python, TypeScript, JavaScript,
            and Flutter, reinforcing my commitment to continuous learning and
            staying current with modern technologies.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
