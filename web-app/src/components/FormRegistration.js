import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { createStudent } from '../services/restStudents';

const FormRegistration = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const submit = async () => {
    try {
      await createStudent(firstName, lastName); 
      toast.success(`Student ${firstName} ${lastName} créé avec succès.`);
      setFirstName(''); 
      setLastName(''); 
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <>
    <div>Je m'inscris</div>
    <form 
      onSubmit={e => {
      e.preventDefault();
      submit(); 
      }}
    >
      <label>
        Prénom
        <br />
        <input
          type='text'
          required
          id='firstName'
          name='firstName'
          value={firstName}
          onChange={e => setFirstName(e.target.value)} 
        />
      </label>
      <br />
      <label>
        Nom
        <br />
        <input
          type='text'
          required
          id='lastName'
          name='lastName'
          value={lastName}
          onChange={e => setLastName(e.target.value)}
        />
      </label>
      <br />
      <button>Valider</button>
      {/* <label>
        Date de naissance
        <br />
        <input>
          type='text'
          required
          id='firstName'
          name='firstName'
          value={firstName}
          onChange={e => setFirstName(e.target.value)}; 
        </input>
      </label>
      <label>
        Rue
        <br />
        <input>
          type='text'
          required
          id='firstName'
          name='firstName'
          value={firstName}
          onChange={e => setFirstName(e.target.value)}; 
        </input>
      </label>
      <label>
        code postal
        <br />
        <input>
          type='text'
          required
          id='firstName'
          name='firstName'
          value={firstName}
          onChange={e => setFirstName(e.target.value)}; 
        </input>
      </label>
      <label>
        Ville
        <br />
        <input>
          type='text'
          required
          id='firstName'
          name='firstName'
          value={firstName}
          onChange={e => setFirstName(e.target.value)}; 
        </input> */}
      {/* </label> */}
    </form>
    <ToastContainer />
    </>
  )
}

export default FormRegistration