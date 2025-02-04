import {Link} from 'react-router-dom'
import MainLogo from "../assets/logo.svg"
import PropTypes from 'prop-types'

const Logo = ({invert = false}) => {
  return (
    <Link to="/">
        <div className={`flex gap-3 items-center ${invert && 'invert'}`}>
            <img src={MainLogo} className="w-10 h-10"/>
            <h2 className="text-lg font-bold">Yinan Hu</h2>
        </div>
    </Link>
  )
}

export default Logo;

Logo.propTypes = {
    invert: PropTypes.bool,
}