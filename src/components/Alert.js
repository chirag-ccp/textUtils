import React, { useState } from "react";

function Alert(props) {
  
  
    const capitalizeFirstLetter = (word) => {
        const myWord = word[0].toUpperCase() + word.slice(1);
        return(
            myWord
        );
    }


  return (
    
      props.alert && <div class={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
        <strong>{capitalizeFirstLetter(props.alert.type)} : </strong>{props.alert.message}
      </div>
    
  );
}

export default Alert;
