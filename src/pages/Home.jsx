import herobackgroundimage from "../assets/florian-olivo-4hbJ-eymZ1o-unsplash.jpg";
import {useNavigate} from "react-router-dom";

function HomePage() {
    const navigate = useNavigate(); 

  return (
    <div
      className="hero min-h-[80vh]"
      style={{
        backgroundImage: `url(${herobackgroundimage})`,
      }}
    >
      <div className="hero-overlay"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-xl">
          <h1 className="mb-5 text-5xl font-bold">Hello there 👋</h1>
          <p className="mb-5 text-2xl">
            My name is Fhatuwani and I am a web developer. I have a passion for creating beautiful and functional websites. I am currently looking for a job as a junior web developer. If you are interested in hiring me, please feel free to contact me.
          </p>
          <button onClick={() => navigate("contact")} className="btn btn-primary text-lg">Contact Me</button>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
