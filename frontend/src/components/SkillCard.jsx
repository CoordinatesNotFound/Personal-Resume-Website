import PropTypes from 'prop-types'

const SkillCard = ({icon, text}) => {
  return (
    <div className='max-w-[186px] max-h-[186px] border-2 rounded-md border-black aspect-square'>
        <div className='rounded hover:invert bg-white  flex flex-col p-6 gap-8 items-center aspect-square'>
            <img src={icon} className="w-[50px] h-[50px]"/>
            <p className='font-semibold text-lg'>{text}</p>
        </div>
    </div>
  )
}

export default SkillCard

SkillCard.propTypes = {
    icon: PropTypes.any.isRequired,
    text: PropTypes.string.isRequired,
}