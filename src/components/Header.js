import PropTypes from 'prop-types'
import Button from './Button'

export default function Header({title, toggleAddTask, showAddTask }) {
    return (
        <header className='header'>
            <div style={{display: 'flex'}}>
                <h1>{title}</h1>
                {/* <Button className='btn' text='Login' /> */}
            </div>
            <Button color={showAddTask ? 'red' : 'green'} 
                    text={showAddTask ? 'Close' : 'Add'} 
                    onClick={() => toggleAddTask()} />
        </header>
    )
}

Header.defaultProps = {
    title:'Task Traker'
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}