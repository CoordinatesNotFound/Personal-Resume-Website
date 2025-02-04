const ExperienceCard = ({ experienceData }) => {
  return (
    <div className="flex flex-col gap-4 text-white border-b border-gray-700 pb-6 lg:mx-40">
      {/* position & company */}
      <div className="flex justify-between items-start">
        <div className="flex flex-col">
          <p className="font-display font-extrabold text-2xl">{experienceData.role}</p>
          <p className="font-display text-xl text-gray-400">{experienceData.company}</p>
        </div>

        {/* time & location */}
        <div className="text-right">
          <p className="text-gray-400 text-lg">{experienceData.duration}</p>
          <p className="text-gray-500">{experienceData.location}</p>
        </div>
      </div>

      {/* description */}
      <div className="text-gray-300 mt-2">
        {experienceData.responsibilities.map((item, index) => (
          <p key={index} className="mb-4">{item}</p>
        ))}
      </div>
    </div>
  );
};

export default ExperienceCard;
