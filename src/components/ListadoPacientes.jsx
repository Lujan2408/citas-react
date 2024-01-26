/* eslint-disable react/prop-types */
import Paciente from "./Paciente"

const ListadoPacientes = ({ pacientes }) => {
  console.log(pacientes)

  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-scroll">

        <h2 className="font-black text-3xl text-center">Listado Pacientes</h2>

        <p className="text-xl mt-5 mb-10 text-center">
          Administra tus {''}
            <span className="font-bold text-indigo-600">Pacientes y Citas</span>
        </p>

        { pacientes.map( paciente => (
          <Paciente
            paciente={paciente}
            key={paciente}
          >
          </Paciente>
        ))}    

        <Paciente />

    </div>
  )
}

export default ListadoPacientes