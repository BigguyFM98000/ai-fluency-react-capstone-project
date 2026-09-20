import { FaHtml5 } from "react-icons/fa6";
import { IoLogoCss3 } from "react-icons/io";
import { SiJavascript } from "react-icons/si";
import { IoLogoReact } from "react-icons/io5";
import { SiTailwindcss } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiMongodb } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";
import { SiPostman } from "react-icons/si";

function SkillsPage() {
  return (
    <section className="min-h-[80vh]">
      <section className="flex flex-row justify-around items-center gap-5 p-8 flex-wrap min-h-[40vh]">
        <div className="card w-64 bg-neutral text-neutral-content transition-transform duration-300 ease-in-out hover:scale-x-105 hover:shadow-md">
          <div className="card-body items-center text-center">
            <h2 className="card-title text-xl">
              <FaHtml5 />
            </h2>
            <p className="text-xl">HTML5</p>
            <div className="card-actions justify-end">
              <h2 className="btn btn-primary">Advanced</h2>
            </div>
          </div>
        </div>
        <div className="card w-64 bg-neutral text-neutral-content transition-transform duration-300 ease-in-out hover:scale-x-105 hover:shadow-md">
          <div className="card-body items-center text-center">
            <h2 className="card-title">
              <IoLogoCss3 />
            </h2>
            <p className="text-xl">CSS3</p>
            <div className="card-actions justify-end">
              <h2 className="btn btn-primary">Advanced</h2>
            </div>
          </div>
        </div>
        <div className="card w-64 bg-neutral text-neutral-content transition-transform duration-300 ease-in-out hover:scale-x-105 hover:shadow-md">
          <div className="card-body items-center text-center">
            <h2 className="card-title">
              <SiJavascript />
            </h2>
            <p className="text-xl">JavaScript</p>
            <div className="card-actions justify-end">
              <h2 className="btn btn-primary">Advanced</h2>
            </div>
          </div>
        </div>
        <div className="card w-64 bg-neutral text-neutral-content transition-transform duration-300 ease-in-out hover:scale-x-105 hover:shadow-md">
          <div className="card-body items-center text-center">
            <h2 className="card-title">
              <IoLogoReact />
            </h2>
            <p className="text-xl">React</p>
            <div className="card-actions justify-end">
              <h2 className="btn btn-primary">Intermediate</h2>
            </div>
          </div>
        </div>
        <div className="card w-64 bg-neutral text-neutral-content transition-transform duration-300 ease-in-out hover:scale-x-105 hover:shadow-md">
          <div className="card-body items-center text-center">
            <h2 className="card-title">
              <SiTailwindcss />
            </h2>
            <p className="text-xl">Tailwind CSS</p>
            <div className="card-actions justify-end">
              <h2 className="btn btn-primary">Advanced</h2>
            </div>
          </div>
        </div>
      </section>
      <section className="flex flex-row justify-around items-center gap-5 p-8 min-h-[40vh] flex-wrap">
        <div className="card w-64 bg-neutral text-neutral-content transition-transform duration-300 ease-in-out hover:scale-x-105 hover:shadow-md">
          <div className="card-body items-center text-center">
            <h2 className="card-title">
              <SiExpress />
            </h2>
            <p className="text-xl">Express.js</p>
            <div className="card-actions justify-end">
              <h2 className="btn btn-primary">Intermediate</h2>
            </div>
          </div>
        </div>
        <div className="card w-64 bg-neutral text-neutral-content transition-transform duration-300 ease-in-out hover:scale-x-105 hover:shadow-md">
          <div className="card-body items-center text-center">
            <h2 className="card-title">
              <BiLogoPostgresql />
            </h2>
            <p className="text-xl">PostgreSQL</p>
            <div className="card-actions justify-end">
              <h2 className="btn btn-primary">Intermediate</h2>
            </div>
          </div>
        </div>
        <div className="card w-64 bg-neutral text-neutral-content transition-transform duration-300 ease-in-out hover:scale-x-105 hover:shadow-md">
          <div className="card-body items-center text-center">
            <h2 className="card-title">
              <SiMongodb />
            </h2>
            <p className="text-xl">MongoDB</p>
            <div className="card-actions justify-end">
              <h2 className="btn btn-primary">Intermediate</h2>
            </div>
          </div>
        </div>
        <div className="card w-64 bg-neutral text-neutral-content transition-transform duration-300 ease-in-out hover:scale-x-105 hover:shadow-md">
          <div className="card-body items-center text-center">
            <h2 className="card-title">
              <FaGitAlt />
            </h2>
            <p className="text-xl">Git</p>
            <div className="card-actions justify-end">
              <h2 className="btn btn-primary">Advanced</h2>
            </div>
          </div>
        </div>
        <div className="card w-64 bg-neutral text-neutral-content transition-transform duration-300 ease-in-out hover:scale-x-105 hover:shadow-md">
          <div className="card-body items-center text-center">
            <h2 className="card-title">
              <SiPostman />
            </h2>
            <p className="text-xl">Postman</p>
            <div className="card-actions justify-end">
              <h2 className="btn btn-primary">Advanced</h2>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}

export default SkillsPage;
