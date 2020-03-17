import React, { useState } from "react";

function TeamForm(props) {
  const [formState, setFormState] = useState({
    firstName: "",
    lastName: "",
    role: ""
  });

  const changehandler = event => {
    setFormState({
      ...formState,
      [event.target.name]: event.target.value
    });
  };

  const formSubmitHandler = event => {
    event.preventDefault();
    props.newMember({
        ...formState,
        id:Date.now()
    })
  };

  return (
    <form onSubmit = {formSubmitHandler}>
      <input
        type="text"
        name="firstName"
        value={formState.firstName}
        onChange={changehandler}
        placeholder="First Name"
      />

      <input
        type="text"
        name="lastName"
        value={formState.lastName}
        onChange={changehandler}
        placeholder="Last Name"
      />

      <input
        name="role"
        value={formState.role}
        onChange={changehandler}
        placeholder="Team Role"
      />
      <button type = "submit">Join Now!</button>
      
    </form>
  );
}
export default TeamForm;
