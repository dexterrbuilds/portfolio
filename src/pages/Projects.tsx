
import Layout from "@/components/Layout";
import ProjectsGrid from "@/components/ProjectsGrid";

const Projects = () => {
  return (
    <Layout>
      <div className="container">
        <section className="hero">
          <h1 className="fluid hero-title">My Projects</h1>
          <p className="hero-description">
            Real products and engineering systems across AI, Web3, data, mobile, and full-stack development.
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
