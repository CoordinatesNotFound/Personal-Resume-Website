import Logo from "../components/Logo.jsx"


const Footer = () => {
    return(
        <div className="bg-black">
            <footer className=" flex items-center justify-between">
                <Logo invert={true}/>
                <p className=" text-white">
                    <span>@2025 Made with React & Node.js </span>
                </p>
            </footer>
        </div>
    )
        
    
}

export default Footer;