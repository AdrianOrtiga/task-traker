import PropTypes from 'prop-types'
import Button from './Button'

export default function Header({title}) {
    return (
        <header className='header'>
            <h1>{title}</h1>
            <Button color='green' text='Add' onClick={() => alert('sorry I am lazy')} />
        </header>
    )
}

Header.defaultProps = {
    title:'Task Traker'
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}