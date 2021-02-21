import PropTypes from 'prop-types'

//color and text is passed in from header.js
const Button = ({color, text}) => {
    return (
       <button 
    //    onClick = {onClick}
       style = {{backgroundColor: color}}
       className = 'button'//button component from index.html
       >
        {text}
       </button>
    )
}

export default Button
