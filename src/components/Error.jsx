/* eslint-disable react/prop-types */
const Error = ({ children }) => {
  return (
    <div className="bg-red-600 text-white font-bold uppercase p-3 rounded-md mb-5 text-center">
        {children}
    </div>
  )
}

export default Error