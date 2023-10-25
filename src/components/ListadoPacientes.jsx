import usePacientes from "../hooks/usePacientes";
import Paciente from "./Paciente";

const ListadoPacientes = () => {
    const {pacientes} = usePacientes();
    return (
        <>
            {pacientes.length ? 
                <>
                    <h2 
                        className="font-black text-3xl text-center"
                        >Pacientes 
                        <span className="text-violet-vet font-bold">
                            Registrados
                        </span>
                    </h2>
                    <p className="text-xl mt-5 mb-10 text-center">Administra tus{''} <span className="text-violet-vet font-bold">Pacientes y Citas</span></p> 
                    { pacientes.map( paciente =>  (
                        <Paciente
                            key={paciente._id}
                            paciente={paciente}
                        />
                        
                    ))}
                </>
            : ( <>
                    <h2 className="font-black text-3xl text-center">No Hay Pacientes</h2>
                    <p className="text-xl mt-5 mb-10 text-center">Comienza Agregando Pacientes y{''} <span className="text-violet-vet font-bold">Apareceran en Este Lugar</span></p>
                </>
            )}
        </>

    )
}

export default ListadoPacientes;