import { useNavigate } from "react-router-dom"

export const Navbar =()=>{

    const navigate = useNavigate()
    return(
        <div className="nav">
            navbar
            <button onClick={()=>{navigate('/profile')}}>click</button>
        </div>
    )
}