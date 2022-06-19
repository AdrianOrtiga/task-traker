import PropTypes from 'prop-types'

export default function Button ({ color, text, onClick, textColor = 'white' }) {
  return (
    <button
      onClick={onClick}
      style={{ backgroundColor: color, color: textColor }}
      className='btn'>{text}</button>
  )
}


Button.propTypes = {
  color: PropTypes.string,
  text: PropTypes.string,
  onClick: PropTypes.func,
}