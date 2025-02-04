import ProjectCard from "../components/ProjectCard.jsx";
import VariableWeightText from "../components/VariableWeightText";

const projectsData = [
  {
    title: "A Scalable Online Question and Answer (Q&A) Platform",
    description: "I developed a scalable online Q&A platform using JavaScript, improved scalability with innovative features such as load balance, scaling database and rate-limited user posts, and achieved automatic updates for a more user-friendly experience.",
    link: "https://github.com/CoordinatesNotFound/Designing-and-Building-Scalable-Web-Applications/tree/main/course-project-ii",  
  },
  {
    title: "Personal Resume Website",
    description: "I built a personal resume website utilizing modern full-stack development tools including React and Node.js, and deployed it on GCP",
    link: "https://github.com/CoordinatesNotFound/Personal-Resume-Website",
  },
  {
    title: "Ranging-based Secure Neighbor Discovery in Wireless Networks",
    description: "I participated in a group project for Communication System Design, focusing on the development of secure communication protocols and cryptographic modules. ",
    link: "https://github.com",
  },
  {
    title: "Bachelor's Thesis: Deep Reinforcement Learning based Optimization of Mobile Short Video Streaming",
    description: "To optimize short video streaming, I analyzed and formulated the features of short video streaming and user swiping behavior, and proposed a deep reinforcement learning based optimization method for mobile short video streaming",
    link: "https://github.com",
  }
]

const Projects = () => {
  return (
    <div className="bg-black px-4 py-10 md:px-16 md:py-[48px] lg:px-20 lg:py-[60px]">
      <div className="px-8 flex flex-col items-center gap-5">
        <VariableWeightText
          regularText="My"
          extraboldText="Projects"
          invert
        />
        <div className="mt-8 flex flex-col gap-y-8">
          { projectsData.map(projectData => {
            return <ProjectCard 
              key={projectData.title} 
              projectData={projectData} 
            />
          })}
        </div>
      </div>
    </div>
  )
}

export default Projects;