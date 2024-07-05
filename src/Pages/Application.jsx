import React from 'react'

const Application = () => {
  return (
    <div>
      <body class="bg-gradient-to-r from-red-100 via-orange-200 to-orange-100 shadow-3xl ">
    
    {/* Application form */}
    <main>
    <div class="container mx-auto p-8">
        <h1 class="text-3xl font-bold mb-8 text-center">Job Application Form</h1>
        <form class="p-6 rounded shadow-md max-w-lg mx-auto">
            <div class="mb-4">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="name">Full Name</label>
                <input
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:bg-orange-100 focus:border-orange-500 bg-inherit"
                    id="name" type="text" placeholder="Your full name" required>
            </div>
            <div class="mb-4">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="email">Email Address</label>
                <input
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:bg-orange-100 focus:border-orange-500 bg-inherit"
                    id="email" type="email" placeholder="Your email address" required>
            </div>
            <div class="mb-4">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="phone">Phone Number</label>
                <input
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:bg-orange-100 focus:border-orange-500 bg-inherit"
                    id="phone" type="tel" placeholder="Your phone number" required>
            </div>
            <div class="mb-4">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="resume">Upload Resume</label>
                <input
                    class="shadow appearance-none py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="resume" type="file" required>
            </div>
            <div class="mb-4">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="cover-letter">Cover Letter</label>
                <textarea
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:bg-orange-100 focus:border-orange-500 bg-inherit"
                    id="cover-letter" rows="5" placeholder="Your cover letter" required></textarea>
            </div>
            <div class="flex items-center justify-between">
                <button
                    class="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="button" onclick="window.location.href='success.html'">
                    Submit Application
                </button>
            </div>
        </form>
    </div>
 </main>
</body>
    </div>
  )
}

export default Application
