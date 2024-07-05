<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- Latest FontAwesome CDN link -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <!-- Tailwind CSS -->
    <link href="./output.css" rel="stylesheet">
</head>

<body class="bg-orange-100">
        <nav class="flex justify-between items-center p-4 bg-gradient-to-r from-red-700 via-orange-500  to-orange-800 shadow">
            <div class="flex items-center">
                <i class="fas fa-briefcase text-2xl text-red-100 mr-1"></i>
                <h1 class="text-xl font-bold text-red-100"><span class="text-2xl">G</span>et<span class="text-2xl">H</span>ired
                </h1>
            </div>
            <div class="hidden md:flex space-x-8 md:space-x-4 font-semibold">
                <a href="index.html" class="text-red-100 hover:text-orange-900">Home</a>
                <a href="JobLists.html" class="text-red-100 hover:text-orange-900">My Job Application</a>
                <a href="#" class="text-red-100 hover:text-orange-900">Job Alerts</a>
                <a href="#" class="text-red-100 hover:text-orange-900">Find a Job</a>
                <a href="#" class="text-red-100 hover:text-orange-900">Sign Up</a>
                <a href="#" class="text-red-100 hover:text-orange-900">Log In</a>
            </div>
            <div class="hidden md:flex space-x-3 mr-4">
                <a href="#" id="profile-link" class="text-red-100 hover:text-orange-900">
                    <i class="fas fa-user"></i>
                </a>
                <a href="#" id="notification-link" class="text-red-100 hover:text-orange-900">
                    <i class="fas fa-bell"></i>
                </a>
            </div>
            <div class="md:hidden">
                <button id="menu-button" class="text-red-100 hover:text-black focus:outline-none">
                    <i class="fas fa-bars"></i>
                </button>
            </div>
        </nav>
        <div id="mobile-menu"
            class=" md:hidden flex flex-col items-center space-y-4 p-4 bg-gradient-to-r from-red-700 via-orange-500  to-orange-800 shadow text-red-100">
            <a href="index.html" class=" hover:text-black">Home</a>
            <a href="JobLists.html" class=" hover:text-black">My Job Application</a>
            <a href="#" class=" hover:text-black">Job Alerts</a>
            <a href="#" class=" hover:text-black">Find a Job</a>
            <a href="#" class=" hover:text-black">Sign Up</a>
            <a href="#" class=" hover:text-black">Log In</a>
            <a href="#" id="profile-link-mobile" class="text-red-100 hover:text-black">
                <i class="fas fa-user"></i>
            </a>
            <a href="#" id="notification-link-mobile" class="text-red-100 hover:text-black">
                <i class="fas fa-bell"></i>
            </a>
        </div>
        
        <script>
            document.getElementById('menu-button').addEventListener('click', function () {
                var menu = document.getElementById('mobile-menu');
                menu.classList.toggle('hidden');
            });
        </script>
        <!-- Job Lists-->
    <div class="container mx-auto p-8">
        <h1 class="text-3xl font-bold mb-8 text-center">Available Job Roles</h1>
        <div class="bg-white p-6 rounded shadow-md mb-4 ">
            <h2 class="text-xl font-bold">Software Engineer</h2>
            <p class="mb-4">Develop and maintain web applications.</p>
            <a href="Application.html" class="bg-orange-500 hover:bg-onage-700 text-white font-bold py-2 px-4 rounded">
                Apply
            </a>
        </div>
        <div class="bg-white p-6 rounded shadow-md mb-4">
            <h2 class="text-xl font-bold">Product Manager</h2>
            <p class="mb-4">Oversee product development and strategy.</p>
            <a href="Application.html" class="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">
                Apply
            </a>
        </div>
        <div class="bg-white p-6 rounded shadow-md mb-4">
            <h2 class="text-xl font-bold">Quality Manager</h2>
            <p class="mb-4">Oversee product development, quality, and strategy.</p>
            <a href="Application.html" class="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">
                Apply
            </a>
        </div>
        <div class="bg-white p-6 rounded shadow-md mb-4">
            <h2 class="text-xl font-bold">IT Support Intern</h2>
            <p class="mb-4">Help the IT Support officer in his/her job.</p>
            <a href="Application.html" class="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">
                Apply
            </a>
        </div>
        <div class="bg-white p-6 rounded shadow-md mb-4">
            <h2 class="text-xl font-bold">Backend Developer</h2>
            <p class="mb-4">Manages codes for the backend.</p>
            <a href="Application.html" class="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">
                Apply
            </a>
        </div>
        <div class="bg-white p-6 rounded shadow-md mb-4">
            <h2 class="text-xl font-bold">Sales Represntative</h2>
            <p class="mb-4">Oversee products sales and manages customers.</p>
            <a href="Application.html" class="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">
                Apply
            </a>
        </div>
    </div>
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
</body>
</html>