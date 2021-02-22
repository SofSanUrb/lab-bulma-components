import React from 'react';
import 'bulma/css/bulma.css';


const CoolButton = (props) => {
  let classButton = "button is-small"

  if (props.isSuccess){
    classButton += ' is-success'
  }
  
  if (props.isDanger){
    classButton += ' is-danger'
  }

  if (props.isSmall){
    classButton += ' is-success'
  }

  if (props.isPrimary){
    classButton += ' is-primary'
  }

  if (props.isSecondary){
    classButton += ' is-secondary'
  }
  
    return (
      <button type={props.type} className={classButton}>{props.name}</button>
    );
  };

export default CoolButton;