import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="container" style={{ textAlign: "center" }}>
      <p>Version 1.0.0</p>
      <Link to="/" className="btn">
        Go back
      </Link>
    </div>
  );
};

export default About;
