
import Layout from "@/components/Layout";
import ProjectsGrid from "@/components/ProjectsGrid";

const Projects = () => {
  return (
    <Layout>
      <div className="container">
        <section className="hero">
          <h1 className="fluid hero-title">My Projects</h1>
          <p className="hero-description">
            Explore my portfolio of projects that showcase my expertise in frontend development, 
            UI design, and creative problem-solving.
          </p>
        </section>
        
        <section className="section">
          <ProjectsGrid />
        </section>
      </div>
    </Layout>
  );
};

export default Projects;
