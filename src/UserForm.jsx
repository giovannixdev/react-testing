import React, { useState } from 'react';

function UserForm({onUserAdd}) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onUserAdd({name, email});
    setName("");
    setEmail("");
  }

  return <form onSubmit={handleSubmit}>
    <div>
      <label htmlFor="name">Name</label>
      <input value={name} onChange={(e) =>setName(e.target.value)}/>
    </div>
    <div>
      <label htmlFor="email">E-mail</label>
      <input value={email} onChange={(e) => setEmail(e.target.value)}/>
    </div>
    <button>Add User</button>
  </form>

}

export default UserForm;