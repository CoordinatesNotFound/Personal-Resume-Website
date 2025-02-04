import SkillCard from "../components/SkillCard"
import VariableWeightText from "../components/VariableWeightText"

import PythonIcon from "../assets/python.svg"
import GoIcon from "../assets/go.svg"
import DockerIcon from "../assets/docker.svg"
import K8sIcon from "../assets/kubernetes.svg"
import GcpIcon from "../assets/gcp.svg"
import AnsibleIcon from "../assets/ansible.svg"
import TerraformIcon from "../assets/terraform.svg"
import GitIcon from "../assets/git.svg"
import LinuxIcon from "../assets/linux.svg"
import ReactIcon from "../assets/react.svg"
import JavascriptIcon from "../assets/Javascript.svg"
import WebassemblyIcon from "../assets/webassembly.svg"


const skillsData = [
    {text: "Python", icon: PythonIcon},
    {text: "Go", icon: GoIcon},
    {text: "Docker", icon: DockerIcon},
    {text: "Kubernetes", icon: K8sIcon},
    {text: "Ansible", icon: AnsibleIcon},
    {text: "Terraform", icon: TerraformIcon},
    {text: "GCP", icon: GcpIcon},
    {text: "Linux", icon: LinuxIcon},
    {text: "Git", icon: GitIcon},
    {text: "React", icon: ReactIcon},
    {text: "Javascript", icon: JavascriptIcon},
    {text: "WebAssembly", icon: WebassemblyIcon}
]

const Skills = () => {
  return (
    <div>
      <section className="flex flex-col gap-5 items-center px-0 md:px-4 lg:px-8">
        <VariableWeightText regularText="My" extraboldText="Skills"/>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 grid-flow-row gap-4">
            {
                skillsData.map((skill) => {
                    return(
                        <SkillCard key={skill.text} icon={skill.icon} text={skill.text}/> 
                    )
                })
            }
            {/* <SkillCard icon={GitIcon} text="Git"/>
            <SkillCard icon={GitIcon} text="Git"/>
            <SkillCard icon={GitIcon} text="Git"/> */}
        </div>
      </section>
    </div>
  )
}

export default Skills
