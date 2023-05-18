import "./style.css";

const About = () => {
  const pstyle = {
    first: {
      "margin-bottom": "40px",
    },
    last: {
      "margin-bottom": "100px",
    },
  };
  return (
    <div className="about-container">
      <h1 id="about-id">About me</h1>
      <p style={pstyle.first}>
        Hi, I'm Denis - UX/UI designer from Minsk. <br /> I'm interested in
        design and everything connected with it.
      </p>
      <p style={pstyle.first}>
        I'm studying at courses "Web and mobile design
        <br /> interfaces" in IT-Academy.
      </p>
      <p style={pstyle.last}>
        Ready to implement excellent projects
        <br /> with wonderful people.
      </p>
    </div>
  );
};

export default About;
