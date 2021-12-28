import React from "react"
import PropsType from "prop-types";


const Profile = (props) => {
    const handleName = () => {
        props = Profile.defaultProps;
         alert(props.fullName)
    }
    return (
        <div>
            {props.children}
            <h1>{props.fullName}</h1>
            <h3>{props.profession}</h3>
            <p>{props.bio}</p>
            <button onClick={handleName}>joinUs</button>
        </div>
    )
}



;

export default Profile;