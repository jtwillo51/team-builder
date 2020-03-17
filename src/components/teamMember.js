import React from "react";

const TeamMember = props =>{

    return(
        <div className = "team">
            {props.team.map(member=>(
                <div className = "member" key = {member.id}>
                    <h2>{member.lastName}, {member.firstName}</h2>
                    <p>{member.role}</p>
                </div>
            ))}
        </div>
    )
}

export default TeamMember;