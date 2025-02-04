import EducationCard from "../components/EducationCard";
import VariableWeightText from "../components/VariableWeightText.jsx";

const educationData = [
  {
    school: "SECCLO Erasmus Mundus Programme",
    degree: "M.Sc. in Security and Cloud Computing",
    duration: "Aug. 2023 - Jul. 2025",
    details: [
      "Full-ride scholarship, includes full tuition fee waiver, covers all living costs and travel expenses.",
      "School of Science Dean’s Incentive Scholarship.",
      "Double degree, Aalto University (Finland) & KTH Royal Institute of Technology (Sweden).",
    ],
  },
  {
    school: "Beijing Institute of Technology",
    degree: "B.Sc. in Computer Science and Technology",
    duration: "Sept. 2019 - Jul. 2023",
    details: [
      "GPA: 3.8/4.0",
      "Bachelor's Thesis: Deep Reinforcement Learning based Optimization of Mobile Short Video Streaming.",
      "Honor of Beijing Outstanding Graduates",
    ],
  },
];

const Education = () => {
    return (
      <div className="bg-white px-4 py-10 md:px-16 md:py-[48px] lg:px-20 lg:py-[60px]">
        <div className="px-8 flex flex-col items-center gap-5">
          <VariableWeightText
            regularText="My"
            extraboldText="Education"
          />
          <div className="mt-8 flex flex-col gap-y-8">
            { educationData.map(education => {
              return <EducationCard 
                key={education.school} 
                educationData={education} 
              />
            })}
          </div>
        </div>
      </div>
    )
  }
  
  export default Education;