import React from "react";

function ProfileCard ({avatar, firstName, lastName, email, click}) {
  return (
    <div>
      <button onClick={click}>&lt;</button>
      <div>
        <h1>{`${firstName}'s `}Profile Card</h1>
        <div>
          <img src={avatar} alt={firstName} />
        </div>
        <p className="name">{`${firstName} ${lastName}`}</p>
        <p className="email">{`${email}`}</p>
      </div>
      <button onClick={click}>&gt;</button>
    </div>
  );
}

export default ProfileCard