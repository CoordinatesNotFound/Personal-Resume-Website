import ExportIcon from "../assets/export.svg";

const ProjectCard = ({ projectData }) => {
  return (
    <div className="flex flex-col lg:flex-row items-start gap-12 text-white border-b border-gray-700 pb-6 lg:mx-40">
        <div className="flex flex-col gap-7 mt-4">
          <p className="font-display font-bold text-2xl">{projectData.title}</p>
          <p className="text-zinc-500 font-display">{projectData.description}</p>
          <a href={projectData.link} target="_blank" rel="noopener noreferrer">
            <img src={ExportIcon} className="w-5 h-5" />
          </a>
        </div>
    </div>

  );
};

export default ProjectCard;
