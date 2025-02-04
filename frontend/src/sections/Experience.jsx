import ExperienceCard from "../components/ExperienceCard.jsx";
import VariableWeightText from "../components/VariableWeightText.jsx";

const experienceData = [
  {
    role: "Cloud Research Trainee",
    company: "Ericsson",
    duration: "May. 2024 - Aug. 2024",
    location: "Jorvas, Finland",
    responsibilities: [
      "Developed CI/CD pipelines using Ansible, Terraform, and OpenStack to enable efficient and scalable deployments.",
      "Investigated the feasibility of porting parts of a large C codebase to WebAssembly and wasi-libc.",
      "Implemented a WebAssembly component emulating a set of 3GPP OpenAPI endpoints.",
      "Worked with WASI HTTP and observability interfaces.",
      "Collaborated with other team members to present and document the results and a demo of the work.",
    ],
  },
  {
    role: "Go Backend Intern",
    company: "1Token",
    location: "Shanghai, China",
    duration: "Dec. 2022 - Apr. 2023",
    responsibilities: [
      "Built a timed trading scheduler using Docker, RabbitMQ, and Celery to produce high-frequency trading records on exchange accounts, and provided data support for reconciliation and htv2 modules.",
      "Participated in the development of the Exchange Platform System, integrated APIs of exchanges using Go, and provided infrastructure support for the account management module, history module, and volume statistics module.",
      "Developed API demos using Python scripts, to demonstrate API signature and API invocation methods for customers.",
      "Leveraged Git and Agile collaboration to promote modern software practices and teamwork.",
    ],
  },

];


const Experience = () => {
  return (
    <div className="bg-black px-4 py-10 md:px-16 md:py-[48px] lg:px-20 lg:py-[60px]">
      <div className="px-8 flex flex-col items-center gap-5">
        <VariableWeightText
          regularText="My"
          extraboldText="Experience"
          invert
        />
        <div className="mt-8 flex flex-col gap-y-8">
          { experienceData.map(experience => {
            return <ExperienceCard 
              key={experience.role} 
              experienceData={experience} 
            />
          })}
        </div>
      </div>
    </div>
  )
}

export default Experience;