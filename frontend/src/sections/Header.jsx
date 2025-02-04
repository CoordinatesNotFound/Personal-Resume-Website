import Logo from "../components/Logo.jsx"
import Button from "../components/Button.jsx";
import DownloadIcon from "../assets/download.svg"
import ResumePath from '../assets/resume.pdf'

const Header = () => {
    return(
        <header className="flex items-center justify-between">
            <Logo/>
            <Button>
                <a href={ResumePath} download="resume_yinan.pdf">
                    Resume 
                </a>
                <img src={DownloadIcon}/>
                
            </Button>
        </header>
    )
        
    
}

export default Header;