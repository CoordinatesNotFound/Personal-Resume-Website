const SocialButton = ({icon, link}) => {
    return (
      <a target="_blank" rel="noopener noreferrer" href={link} className="p-2 aspect-square border border-2 rounded-md border-black hover:invert bg-white">
        <img className="w-6 h-6" src={icon} />
      </a>
    )
  }
  
  export default SocialButton