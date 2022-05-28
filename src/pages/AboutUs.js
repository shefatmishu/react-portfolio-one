import React,{useState} from "react"
function AboutUs(props){
    const [firstName, setFirstName] = useState("")
    const[lastName, setLastName] = useState("")
    return(
        <div>
            <h1>AboutUs</h1>
            <h1>{props.shehza}</h1>
            <input onChange={(e) => setFirstName(e.target.value)} type="text"/>
            <input onChange={(e) => setLastName(e.target.value)} type="text"/>
            <h2>{firstName}</h2>
            <h2>{lastName}</h2>
        </div>
    )

    
}
export default AboutUs;