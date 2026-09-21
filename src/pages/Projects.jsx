import webmusicplayer from "../assets/web-music-player2.PNG";
import hrappication from "../assets/hr-app-landing.PNG";
import expensetrackerapplication from "../assets/expense-tracker-application.png";

function ProjectsPage() {
  return (
    <section className="min-h-[80vh]">
      <h2 className="text-3xl font-bold text-center">Projects I Created.</h2>
      <section className="flex flex-col items-center justify-around gap-6 p-4 lg:flex-row lg:items-stretch">
        <div className="card w-full max-w-md bg-indigo-500 shadow-sm">
          <figure className="px-10 pt-10">
            <img
              src={webmusicplayer}
              alt="Web Music Player Application"
              width="1366"
              height="608"
              loading="lazy"
              className="rounded-xl"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Web Music Player</h2>
            <p>
              Interactive web music player to showcase my skills in software
              development. Project built with HTML, CSS and Javascript. Allows users to play the music while they are online.
            </p>
            <div className="card-actions">
              <a
                href="https://web-music-player-lilac.vercel.app/"
                target="_blank"
              >
                <button className="btn btn-secondary">View Project</button>
              </a>
            </div>
          </div>
        </div>
        <div className="card w-full max-w-md bg-indigo-500 shadow-sm">
          <figure className="px-10 pt-10">
            <img
              src={hrappication}
              alt="HR Application Landing Page"
              width="1351"
              height="592"
              loading="lazy"
              className="rounded-xl"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">HR Application</h2>
            <p>
              HR application for managing employees. Features: edit, add, view
              and search employee by details. Built using angular, tailwind c
              ss, mongodb and node(express).
            </p>
            <div className="card-actions">
              <a href="https://hr-app-silk.vercel.app/home" target="_blank">
                <button className="btn btn-secondary">View Project</button>
              </a>
            </div>
          </div>
        </div>
        <div className="card w-full max-w-md bg-indigo-500 shadow-sm">
          <figure className="px-10 pt-10">
            <img
              src={expensetrackerapplication}
              alt="Expense Tracker Application"
              width="1832"
              height="877"
              loading="lazy"
              className="rounded-xl"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Expense Tracker Application</h2>
            <p>
              A full stack application built with React, Tailwind CSS, Daisy UI and firebase. The application allows users to track their expenses and manage their budget effectively.
            </p>
            <div className="card-actions">
              <a
                href="https://frontend-react-app-capstone-live-five.vercel.app/"
                target="_blank"
              >
                <button className="btn btn-secondary">View Project</button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}

export default ProjectsPage;
