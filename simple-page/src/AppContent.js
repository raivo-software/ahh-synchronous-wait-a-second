import React from 'react';

const appContent = (props) => {
  return (
    <div style={{background: "lightgray", margin: "1rem"}}>
      {props.children}
    </div>
  )
}

export default appContent;