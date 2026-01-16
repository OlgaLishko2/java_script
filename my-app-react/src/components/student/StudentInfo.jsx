import React from "react";


function StudentInfo(props){  
    const student = [
        { id:1, firstname:"Ola", role:"Wed Developer"},
        { id:2, firstname:"Pooja", role:"Wed Designer"}
    ]
    return (<>
    <p>Student Data</p>
    <>This is fron User Profile {props.address}</>
    <ul>

        {
        student.map((student)=>{
            return ( <li> {student.firstname} with id {student.id} is {student.role}</li>)
    })
    }
        </ul>
        </>
        )
}

export default StudentInfo;


// prop
