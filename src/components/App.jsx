import React, { useState } from "react";

function App() {
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: ""
  });

  function changeHandler(event) {
    const { value, name } = event.target;
    console.log(value);
    console.log(name);
    setContact((prevValue) => {
      if (name === "fName") {
        return {
          fName: value,
          lName: prevValue.lName,
          email: prevValue.email
        };
      } else if (name === "lName") {
        return {
          fName: prevValue.fName,
          lName: value,
          email: prevValue.email
        };
      } else {
        return {
          fName: prevValue.fName,
          lName: prevValue.lName,
          email: value
        };
      }
    });
  }

  return (
    <div className="container">
      <h1>
        Hello {contact.fName} {contact.lName}
      </h1>
      <p>{contact.email}</p>
      <form>
        <input
          onChange={changeHandler}
          name="fName"
          placeholder="First Name"
          // value=""
        />
        <input
          onChange={changeHandler}
          name="lName"
          placeholder="Last Name"
          // value=""
        />
        <input
          onChange={changeHandler}
          name="email"
          placeholder="Email"
          // value=""
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
