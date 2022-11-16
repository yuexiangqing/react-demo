import React from 'react'

// function About (props){
//     console.log(props)
//     return (
//     <div>
//         <p>{props.a}</p>
//         <p>{props.b}</p>
//     </div>
//     )
// }
function About ({age, name}){
    return (
    <div>
        <p>{age}</p>
        <p>{name}</p>
    </div>
    )
}
export default About