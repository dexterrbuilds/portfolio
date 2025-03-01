
import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
import ProjectsGrid from "@/components/ProjectsGrid";

const Index = () => {
  return (
    <Layout>
      <section className="hero">
        <h1 className="fluid hero-title">the craft of ui</h1>
        <p className="hero-description">
          Unlock the art and science of interface development. This isn't just about
          pushing pixels or following documentation — it's about mastering the
          tools, understanding the nuances, and shaping experiences with intention.
        </p>
        <div className="flex justify-center gap-4">
          <Link 
            to="/projects" 
            className="submit-button"
          >
            View Projects
          </Link>
          <Link 
            to="/contact" 
            className="submit-button bg-transparent text-foreground border border-border"
          >
            Get in Touch
          </Link>
        </div>
      </section>
      
      <section className="section">
        <h2 className="fluid section-title">Featured Projects</h2>
        <p className="section-description">
          A selection of my finest work, showcasing my skills in UI/UX design and development.
        </p>
        <ProjectsGrid />
      </section>
    </Layout>
  );
};

export default Index;
