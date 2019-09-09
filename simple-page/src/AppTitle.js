import React from 'react';

const appTitle = (props) => {
  return (
    <div style={{textAlign: "center", borderStyle: "dashed", margin: "2rem"}}>
      <h1>{props.title}</h1>
      <p>{props.subtitle}</p>
    </div>
  );
}

export default appTitle;