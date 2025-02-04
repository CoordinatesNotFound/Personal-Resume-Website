import PropTypes from 'prop-types'

const Button = ({children}) => {
  return (
    <div className="rounded font-semibold px-5 py-4 flex gap-2 items-center text-white bg-black hover:bg-neutral-700">
      {children}
    </div>
  )
}

export default Button

Button.propTypes = {
    children: PropTypes.node.isRequired,
}