import React from 'react';

import Navbar from './navbar/Navbar.js'
import './navbar/Navbar.css'

import FormField from './formfield/FormField.js'
import './formfield/FormField.css'

import CoolButton from './coolbutton/CoolButton.js'
import './coolbutton/CoolButton.css'

import Message from './message/Message.js'

const App = () => {
  return (
    <React.Fragment>
      <Navbar/>,
      <FormField label="Name" type="text" placeholder="e.g. Alex Smith"/>,
      <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com"/>
      <FormField label="Password" type="password" placeholder="password"/>
      <CoolButton type="submit" isSuccess name="Submit"/>
      <Message isInfo title='Hello World'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>.
      </Message>>
    </React.Fragment>
  )
};

export default App;
