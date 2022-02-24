import React from 'react';

export default function Alert(props) {
  //to capitalize the first alphabet of type

  const capitalize = (word) => {
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  };

  return (
    <div style={{ height: '50px' }}>
      {/* 1)props.alert is set null by default...so we use this syntax */}
      {props.alert && (
        <div
          className={`alert alert-${props.alert.type} 
    alert-dismissible fade show`}
          role="alert"
        >
          <strong>{capitalize(props.alert.type)}</strong>: {props.alert.msg}
        </div>
      )}
    </div>
  );
}
