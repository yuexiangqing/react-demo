import React from '../../13_组件状态/node_modules/@types/react'
import PropTypes from '../../13_组件状态/node_modules/@types/prop-types'

function About ({name, age}){
    return (
    <div>
        <p>{name}</p>
        <p>{age}</p>
    </div>
    )
}
About.defaultProps = {
    name: 1,
    age: '18'
}
About.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number
}
export default About