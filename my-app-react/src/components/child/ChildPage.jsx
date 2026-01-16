import React from "react";



function Child(props){
    return (
    <div>
      <h2>User Info</h2>
      <p>Name:{props.name}</p>
      <p>Email:{props.email}</p>
      <p>Phone: {props.phone}</p>
    </div>

    );
}

export default Child