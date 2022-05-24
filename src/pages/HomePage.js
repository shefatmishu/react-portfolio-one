import React,{useState} from "react"

function HomePage(props){
    const [firstName, setFirstName] = useState("")
    return(
        <div>
            <h1>{props.title}</h1>
            <input onChange={(e) => setFirstName(e.target.value)} type="text"/>
            <h2>{firstName}</h2>
        </div>
    )
}
export default HomePage