import React from 'react';
import ReactDOM from 'react-dom';
import { CounterApp } from './components/01-useState/CounterApp';
import { CounterCustomHook } from './components/01-useState/CounterCustomHook';
import { FormCustomHook } from './components/02-useEffect/FormCustomHook';
import { SimpleForm } from './components/02-useEffect/SimpleForm';
//import { HookApp } from './HookApp';


ReactDOM.render(
  <FormCustomHook />,
  document.getElementById('root')
);

