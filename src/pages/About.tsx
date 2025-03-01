
import Layout from "@/components/Layout";

const About = () => {
  return (
    <Layout>
      <div className="container">
        <section className="hero">
          <h1 className="fluid hero-title">About Me</h1>
          <p className="hero-description">
            I'm a frontend developer and UI designer with a passion for creating beautiful, 
            functional, and user-centered digital experiences.
          </p>
        </section>
        
        <section className="section">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-semibold mb-4">My Journey</h2>
              <p className="mb-4">
                With over 5 years of experience in web development, I've worked on a variety of projects, 
                from small business websites to complex web applications. My background in both design and 
                development allows me to bridge the gap between aesthetics and functionality.
              </p>
              <p className="mb-4">
                I believe in the power of thoughtful design and clean code to create digital experiences 
                that are not only visually appealing but also intuitive and accessible to all users.
              </p>
              <p>
                When I'm not coding, you can find me exploring new design trends, contributing to open-source projects, 
                or sharing my knowledge through articles and tutorials.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold mb-4">Skills & Expertise</h2>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h3 className="text-lg font-medium mb-2">Development</h3>
                  <ul className="space-y-1 opacity-80">
                    <li>HTML, CSS, JavaScript</li>
                    <li>React.js, Next.js</li>
                    <li>Typescript</li>
                    <li>Tailwind CSS</li>
                    <li>Frontend Performance</li>
                    <li>Responsive Design</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-2">Design</h3>
                  <ul className="space-y-1 opacity-80">
                    <li>UI/UX Design</li>
                    <li>Figma & Adobe XD</li>
                    <li>Motion Design</li>
                    <li>Design Systems</li>
                    <li>Prototyping</li>
                    <li>Accessibility</li>
                  </ul>
                </div>
              </div>
              <div className="mt-8">
                <h3 className="text-lg font-medium mb-2">Continued Learning</h3>
                <p className="opacity-80">
                  Technology evolves rapidly, and I'm committed to staying current with the latest trends and best practices. 
                  I'm currently deepening my knowledge in animation techniques, WebGL, and advanced state management patterns.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default About;
