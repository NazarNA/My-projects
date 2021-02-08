import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { emailInput, nameInput, passwordInput, submitForm } from './actions';

import './App.css';
import Loader from './components/Loader';

function App() {

  const {name, email, password, loader} = useSelector( state => ({
    name: state.name,
    email: state.email,
    password: state.password,
    loader: state.loader
  }))

  const dispatch = useDispatch()

  if(loader) return <Loader />

  return (
    <div className='container-md col-md-4 mt-3'>
      <form onSubmit={e => {
        e.preventDefault()
        dispatch(submitForm(email, name, password))}
        }>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
          <input value={email} onChange={e => dispatch(emailInput(e.target.value))} type="email" className="form-control" id="exampleInputEmail1" />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputName" className="form-label">Name</label>
          <input value={name} onChange={e => dispatch(nameInput(e.target.value))} type="text" className="form-control" id="exampleInputName" />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
          <input value={password} onChange={e => dispatch(passwordInput(e.target.value))} type="password" className="form-control" id="exampleInputPassword1" />
        </div>
        <input type="submit" className='btn btn-primary' />
      </form>
      Open console, to see the result of Your registration!
    </div>
  );
}

export default App;
