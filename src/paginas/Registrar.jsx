import { useState } from 'react';
import { Link } from "react-router-dom";
import Alerta from "../components/Alerta";
import clienteAxios from '../config/axios';
const Registrar = () => {

  const [ nombre, setNombre ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');
  const [ repetirPassword, setRepetirPassword ] = useState('');

  const [alerta, setAlerta] = useState(' ');

  const handleSubmit = async e => {
    e.preventDefault();
    
    if([nombre,email,password,repetirPassword].includes('')){
      setAlerta({msg:'Todos los campos son obligatorios', error:true});
      return;
    }
    if(password !== repetirPassword){
      setAlerta({msg:'Los password no coinciden', error:true});
      return;
    }
    if(password.length < 6){
      setAlerta({msg:'El minimo de caracteres para el password son 6', error:true});
      return;
    }
    setAlerta({});

    //Crear el usuario en la api
    try {
        await clienteAxios.post('/veterinarios', {nombre, email, password});
        setAlerta({
            msg:'Usuario creado correctamente, por favor revisa tu email',
            error: false
        })
    } catch (error) {
        setAlerta({
            msg: error.response.data.msg,
            error:true
        })
    }
  }

  const {msg} = alerta;

  return (
    <>
        <div>
            <h1 className="text-violet-vet font-black text-6xl">Crea tu cuenta y administra tus {" "}<span className="text-black">pacientes</span>
            </h1>
        </div>
        <div className='mt-20 md:mt-5 shadow-lg px-5 py-10 rounded-xl bg-white'>
            {msg && <Alerta
              alerta={alerta}
            />}
            <form 
              onSubmit={ handleSubmit }
            >
                <div className="my-5">
                    <label 
                        className="uppercase text-gray-600 block text-xl font-bold">
                        Nombre
                    </label>
                    <input 
                        type="text" 
                        placeholder="Nombre de registro"
                        className="border w-full p-3 mt-3 bg-gray-50 rounded-xl"
                        value={ nombre }
                        onChange={ e => setNombre(e.target.value)}
                    />
                </div>
                <div className="my-5">
                    <label 
                        className="uppercase text-gray-600 block text-xl font-bold">
                        Email
                    </label>
                    <input 
                        type="email" 
                        placeholder="Email de registro"
                        className="border w-full p-3 mt-3 bg-gray-50 rounded-xl"
                        value={ email }
                        onChange={ e => setEmail(e.target.value)}
                    />
                </div>
                <div className="my-5">
                    <label 
                        className="uppercase text-gray-600 block text-xl font-bold">
                        Password
                    </label>
                    <input 
                        type="password" 
                        placeholder="Nuevo Password"
                        className="border w-full p-3 mt-3 bg-gray-50 rounded-xl"
                        value={ password }
                        onChange={ e => setPassword(e.target.value)}
                        autoComplete="off"
                    />
                </div>
                <div className="my-5">
                    <label 
                        className="uppercase text-gray-600 block text-xl font-bold">
                        Confirma tu password
                    </label>
                    <input 
                        type="password" 
                        placeholder="Confirma Tu Password"
                        className="border w-full p-3 mt-3 bg-gray-50 rounded-xl"
                        value={ repetirPassword }
                        onChange={ e => setRepetirPassword(e.target.value)}
                        autoComplete="off"
                    />
                </div>

                <input 
                    type="submit" 
                    value="Crear Cuenta"
                    className="bg-violet-vet w-full py-3 px-10 rounded-xl text-white uppercase font-bold mt-5 hover:cursor-pointer hover:bg-pink-vet md:w-auto"
                />
            </form>
            <nav className='mt-10 lg:flex lg:justify-between'>
                <Link 
                    className='block text-center my-5 text-gray-500'
                    to="/">¿Ya tienes una cuenta? Inicia Sesion
                </Link>
                <Link 
                    className='block text-center my-5 text-gray-500'
                    to="/olvide-password">Olvide mi password
                </Link>
            </nav>
          </div>
    </>
  )
}

export default Registrar