
import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
import ProjectsGrid from "@/components/ProjectsGrid";

const Index = () => {
  return (
    <Layout>
      <section className="hero">
        <h1 className="fluid hero-title">My name is Dexterr</h1>
        <p className="hero-description">
          I build and optimize across Web2 and Web3.
          I craft apps, trading bots, DeFi tools, and software that don’t just work—they flow.

          From sleek Web2 apps to seamless Web3 experiences, I engineer fast, and user-friendly solutions. Need an app? A system that feels great? Let’s build, scale, and disrupt. 🚀
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
          A selection of my finest work, showcasing my skillst.
        </p>
        <ProjectsGrid />
      </section>
    </Layout>
  );
};

export default Index;
