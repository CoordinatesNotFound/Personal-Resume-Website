const EducationCard = ({ educationData }) => {
    return (
      <div className="flex flex-col gap-4 text-black border-b border-gray-700 pb-6">
        {/* uni & degree */}
        <div className="flex justify-between items-start">
          <div className="flex flex-col">
            <p className="font-display font-extrabold text-2xl">{educationData.school}</p>
            <p className="font-display text-xl text-zinc-400">{educationData.degree}</p>
          </div>
  
          {/* time */}
          <div className="text-right">
            <p className="text-black-400 text-lg">{educationData.duration}</p>
          </div>
        </div>
  
        {/* details */}
        <div className="text-black-300 mt-2">
          {educationData.details.map((item, index) => (
            <p key={index} className="mb-4">{item}</p>
          ))}
        </div>
      </div>
    );
  };
  
  export default EducationCard;