
import { useEffect, useRef } from "react";
import { Code, Palette, Tool, Scroll, LucideSettings, LayoutGrid, Clock } from "lucide-react";

interface Project {
  id: number;
  title: string;
  description: string;
  link: string;
  image: string;
  icon: JSX.Element;
}

const projects: Project[] = [
  {
    id: 1,
    title: "The Craft",
    description: "Gain the confidence to build anything you envision, transforming motion, interaction, and design principles into second nature.",
    link: "/projects/the-craft",
    image: "https://picsum.photos/720/720?random=12",
    icon: <Tool className="project-icon" />
  },
  {
    id: 2,
    title: "CSS Animation",
    description: "Master CSS animations from your very first set of @keyframes right through to things no one else ever teaches you.",
    link: "/projects/css-animation",
    image: "https://picsum.photos/720/720?random=17",
    icon: <Palette className="project-icon" />
  },
  {
    id: 3,
    title: "SVG Filters",
    description: "Shaders on a budget. Learn how to use noise to your advantage whilst making flames and stickers.",
    link: "/projects/svg-filters",
    image: "https://picsum.photos/720/720?random=19",
    icon: <Code className="project-icon" />
  },
  {
    id: 4,
    title: "Scroll Animation",
    description: "Take your users on a journey with the joy of tasteful scroll animation. You might not even need JavaScript.",
    link: "/projects/scroll-animation",
    image: "https://picsum.photos/720/720?random=42",
    icon: <Scroll className="project-icon" />
  },
  {
    id: 5,
    title: "Taming Canvas",
    description: "Grasp how to tame the pixel playground and when to do so. Whilst building with 'Performance Driven Development'.",
    link: "/projects/canvas",
    image: "https://picsum.photos/720/720?random=128",
    icon: <LucideSettings className="project-icon" />
  },
  {
    id: 6,
    title: "Layout Tricks",
    description: "Do you really need a library for that? Sometimes stepping back and rethinking the problem yields a nifty solution.",
    link: "/projects/layout",
    image: "https://picsum.photos/720/720?random=56",
    icon: <LayoutGrid className="project-icon" />
  },
  {
    id: 7,
    title: "Mastering Time",
    description: "It's not all just easings and compositions. Time plays a crucial part in various UI patterns that might not seem obvious at first.",
    link: "/projects/time",
    image: "https://picsum.photos/720/720?random=39",
    icon: <Clock className="project-icon" />
  }
];

const ProjectsGrid = () => {
  const listRef = useRef<HTMLUListElement>(null);
  const itemsRef = useRef<HTMLLIElement[]>([]);

  useEffect(() => {
    const list = listRef.current;
    const items = itemsRef.current;
    
    if (!list || items.length === 0) return;
    
    const setIndex = (event: MouseEvent | FocusEvent) => {
      const target = event.target as Node;
      const closest = (target.nodeType === 1 ? target : target.parentNode) as Element;
      
      if (!closest) return;
      
      const li = closest.closest('li');
      if (li) {
        const index = items.indexOf(li as HTMLLIElement);
        const cols = new Array(items.length)
          .fill('')
          .map((_, i) => {
            items[i].dataset.active = (index === i).toString();
            return index === i ? '10fr' : '1fr';
          })
          .join(' ');
        
        list.style.setProperty('grid-template-columns', cols);
      }
    };
    
    const resync = () => {
      const maxWidth = Math.max(...items.map(i => i.offsetWidth));
      list.style.setProperty('--article-width', maxWidth.toString());
      
      // Set the first item as active by default
      if (items.length > 0) {
        items[0].dataset.active = 'true';
        const cols = new Array(items.length)
          .fill('')
          .map((_, i) => i === 0 ? '10fr' : '1fr')
          .join(' ');
        list.style.setProperty('grid-template-columns', cols);
      }
    };
    
    list.addEventListener('focus', setIndex as EventListener, true);
    list.addEventListener('mousemove', setIndex as EventListener);
    window.addEventListener('resize', resync);
    
    // Initial setup
    resync();
    
    return () => {
      list.removeEventListener('focus', setIndex as EventListener, true);
      list.removeEventListener('mousemove', setIndex as EventListener);
      window.removeEventListener('resize', resync);
    };
  }, []);

  return (
    <ul className="project-grid" ref={listRef}>
      {projects.map((project, index) => (
        <li 
          key={project.id}
          className="project-item"
          data-active={index === 0 ? 'true' : 'false'}
          ref={el => {
            if (el) itemsRef.current[index] = el;
          }}
        >
          <article className="project-article">
            <h3 className="project-title">{project.title}</h3>
            {project.icon}
            <p className="project-description">{project.description}</p>
            <a href={project.link} className="project-link">
              <span>View Project</span>
            </a>
            <img 
              src={project.image} 
              alt={project.title} 
              className="project-image"
              loading="lazy"
            />
          </article>
        </li>
      ))}
    </ul>
  );
};

export default ProjectsGrid;
