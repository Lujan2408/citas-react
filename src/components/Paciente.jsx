const Paciente = () => {
  return (
        <div className="mx-5 my-6 bg-white shadow-md px-5 py-10 rounded-xl">
            <p className="font-bold mb-3 text-gray-700 uppercase">Nombre: {''}
              <span className="font-normal normal-case">Hook</span>
            </p>
            
            <p className="font-bold mb-3 text-gray-700 uppercase">Propietario: {''}
              <span className="font-normal normal-case">Jose</span>
            </p>
            
            <p className="font-bold mb-3 text-gray-700 uppercase">Email: {''}
              <span className="font-normal normal-case">correo@correo.com</span>
            </p>
            
            <p className="font-bold mb-3 text-gray-700 uppercase">Fecha Alta: {''}
              <span className="font-normal normal-case">24 Diciembre 2023</span>
            </p>
            
            <p className="font-bold mb-3 text-gray-700 uppercase">SÍNTOMAS: {''}
              <span className="font-normal normal-case">Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci incidunt placeat aperiam ratione, eum ab voluptatem debitis laudantium facilis in voluptatibus quas, error harum aliquid cupiditate mollitia nobis? Sit, ullam!</span>
            </p>
        </div>
  )
}

export default Paciente