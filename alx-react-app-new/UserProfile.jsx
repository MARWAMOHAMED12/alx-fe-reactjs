import React from 'react';

function UserProfile(props) {
  return (
    <div style={{ border: '1px solid gray', padding: '16px', margin: '16px', borderRadius: '8px', background: '#f9f9f9' }}>
      <h2 style={{ color: 'blue', fontSize: '1.5rem', marginBottom: '8px' }}>{props.name}</h2>
      <p>Age: <span style={{ fontWeight: 'bold', color: '#333' }}>{props.age}</span></p>
      <p style={{ fontStyle: 'italic', color: '#555' }}>Bio: {props.bio}</p>
    </div>
  );
}

export default UserProfile;