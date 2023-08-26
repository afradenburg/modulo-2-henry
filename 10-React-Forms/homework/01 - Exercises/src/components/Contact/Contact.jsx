import React from 'react'
import './Contact.modules.css'

// eslint-disable-next-line
const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

export default function Contact () {

const [inputs, setInputs] = React.useState({
  name: '',
  email:'',
  message:''
})

const [errors, setErrors] = React.useState({
  name: '',
  email:'',
  message:''
})

const handlerChange =(event) =>{
  setInputs({
    ...inputs,
    [event.target.name]: event.target.value
  })
  setErrors(validate({
    ...inputs,
    [event.target.name]: event.target.value
  })
  );
}

const handleSubmit= (evento)=>{
  evento.preventDefault()
  if(!Object.values(errors).length){
    alert('Datos completos')
    setInputs({
      name: '',
      email:'',
      message:''
    })
    setErrors({
      name: '',
      email: '',
      message: ''
    }) 
  }else{
      alert('Debe llenar todos los campos')
  }
}
  return (
    <div>
    <form onSubmit={handleSubmit}>
      <label>Nombre:</label>
      <input type='text' 
      placeholder="Escribe tu nombre..."
      name='name' 
      value={inputs.name} 
      onChange={handlerChange}
      className={errors.name && 'warning'}/>
      {errors.name && <p className='danger'>{errors.name}</p>}
      <label>Correo electrónico</label>
      <input 
      type='text' 
      placeholder="Escribe tu email..." 
      name='email' 
      value={inputs.email} 
      onChange={handlerChange}
      className={errors.email && 'warning'}/>
      {errors.email && <p className='danger'>{errors.email}</p>}

      <label>Mensaje:</label> 
      <input 
      type='text' 
      placeholder='Escribe tu mensaje...' 
      name='message' 
      value={inputs.message} 
      onChange={handlerChange}
      className={errors.message && 'warning'}/>
      {errors.message && <p className='danger'>{errors.message}</p>}
      <button type='submit'> Enviar</button>
       
     

    </form>
  </div>
    )
}
export function validate (inputs){
const errors ={}
if(inputs.name === ""){
  errors.name ="Se requiere un nombre"
} 
if(!regexEmail.test(inputs.email)){
  errors.email = 'Debe ser un correo electrónico'
}
return errors
}