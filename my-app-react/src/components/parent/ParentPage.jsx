import React from "react";
import Child from "../child/ChildPage";


function Parent() {
  const user = {
    name: "Ola",
    email: "ola@gmail.com",
    phone: "400-500-2000"
  };

  return (
    <div>

      <Child 
        name={user.name}
        email={user.email}
        phone={user.phone}
      />
    </div>
  );

}

export default Parent


