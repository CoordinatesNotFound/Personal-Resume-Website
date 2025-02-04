import PropTypes from 'prop-types'

const VariableWeightText = ({regularText, extraboldText, invert=false}) => {
  return (
    <h2 className={`text-5xl ${invert && 'invert'}`}>
        {regularText}
        <span className="ms-4 font-extrabold">
            {extraboldText}
        </span>
    </h2>
  )
}

export default VariableWeightText

VariableWeightText.propTypes = {
    regularText: PropTypes.string.isRequired,
    extraboldText: PropTypes.string.isRequired,
    invert: PropTypes.bool,
}