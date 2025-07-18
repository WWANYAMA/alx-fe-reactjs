import React from "react";

const UserProfile = (props) => {
   return (
     <div style={{ border: '1px solid #ccc', padding: '20px', margin: '20px', borderRadius: '5px' }}>
       <h2 style={{color: 'blue' }}>{props.name}</h2>
       <p>Age: <span style={{fontWeight: 'bold'}}>{props.age}</span></p>
       <p>Bio: {props.bio}</p>
     </div>
   );
 };
 export default UserProfile;