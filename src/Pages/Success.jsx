import React from 'react'

const Success = () => {
  return (
    <div className="text-center p-6 rounded shadow-xl bg-inherit pt-80 h-[100vh]">
      <div>
        <h1 className="text-5xl font-bold text-orange-600 mb-8">
          Application Successful
        </h1>
        <p className="text-gray-700 mb-10 text-2xl">
          Thank you for applying! Your application has been successfully submitted.
        </p>
        <a href="/Home"
          className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-4 px-6 rounded focus:outline-none focus:shadow-outline">
            Return to Home
        </a>
    </div>
    </div>
  )
}

export default Success;
    
