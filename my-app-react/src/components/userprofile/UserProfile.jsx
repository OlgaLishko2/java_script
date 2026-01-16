

import { useState } from "react";
import WitInfo from "../witinfo/WitInfo";
import StudentInfo from "../student/StudentInfo";

// function UserProfile(props) {
//   // Example data


//   return (
//     <div>
//       <h1>User Profile</h1>
//       {/* Call WitInfo component */}
 
//       <StudentInfo/>
//       This is {props.firstname} Profile   
  
//       </div>
//   );
// }

let UserProfile = ({firstname, lastname, age, favcolor}) => {
  const [address, setAdress] = useState("14 highland park")
  return(
    <>
 
    <StudentInfo address={address}/>
    This is {firstname} {lastname} Profile is {age} years old and fav color is {favcolor}
    
    </>
  )
}


export default UserProfile;