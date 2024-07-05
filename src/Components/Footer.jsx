import React from 'react'

const Footer = () => {
  return (
    <div>
      <footer class="bg-gradient-to-r from-red-800 via-orange-400 to-orange-700 py-10">
        <div class="container mx-auto px-6">
            <div class="flex flex-col md:flex-row justify-between items-center text-red-100 mb-8">
                <div class="flex flex-col md:flex-row items-center mb-4 md:mb-0">
                    <i class="fas fa-briefcase text-2xl text-red-100 mr-2"></i>
                    <h1 class="text-xl font-bold"><span class="text-2xl">G</span>et<span class="text-2xl">H</span>ired</h1>
                </div>
                <div class="flex space-x-4">
                    <a href="#" class="text-red-100 hover:text-white">About Us</a>
                    <a href="#" class="text-red-100 hover:text-white">Blog</a>
                    <a href="#" class="text-red-100 hover:text-white">Contact</a>
                </div>
            </div>
            <div class="flex justify-center mb-8">
                <a href="#" class="mx-2 text-red-100 hover:text-white"><i class="fab fa-facebook-f"></i></a>
                <a href="#" class="mx-2 text-red-100 hover:text-white"><i class="fab fa-twitter"></i></a>
                <a href="#" class="mx-2 text-red-100 hover:text-white"><i class="fab fa-linkedin"></i></a>
                <a href="#" class="mx-2 text-red-100 hover:text-white"><i class="fab fa-instagram"></i></a>
            </div>
            <div class="text-center text-red-100">
                <p>&copy; 2024 GetHired. All rights reserved.</p>
            </div>
        </div>
    </footer>
    </div>
  )
}

export default Footer
