import React from 'react'
import PropTypes from 'prop-types'

// function About ({name, age, props}){
    // 可以直接写为 props ，整体接收里面的参数
function About (props){
    return (
    <div>
        {/* <p>{name}</p> */}
        {/* <p>{age}</p> */}
        <p>{props.name}</p>
        <p>{props.age}</p>
        {props.children}
        
    </div>
    )
}
About.defaultProps = {
    name: 'syy',
    age: 18
}
About.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number
}
export default About