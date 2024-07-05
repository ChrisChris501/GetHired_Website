<!doctype html>
<html>

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- Latest FontAwesome link -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">

    <!-- Tailwind CSS -->
    <link href="./output.css" rel="stylesheet">
</head>

<body class="bg-red-100">
        <nav class="flex justify-between items-center p-4 bg-gradient-to-r from-red-700 via-orange-500 to-orange-800 shadow">
            <div class="flex items-center">
                <i class="fas fa-briefcase text-2xl text-red-100 mr-1"></i>
                <h1 class="text-xl font-bold text-red-100"><span class="text-2xl">G</span>et<span class="text-2xl">H</span>ired
                </h1>
            </div>
            <div class="hidden md:flex space-x-8 md:space-x-4 font-semibold">
                <a href="index.html" class="text-red-100 hover:text-orange-900">Home</a>
                <a href="#" class="text-red-100 hover:text-orange-900">My Job Application</a>
                <a href="job-alerts.html" class="text-red-100 hover:text-orange-900">Job Alerts</a>
                <a href="JobLists.html" class="text-red-100 hover:text-orange-900">Find Jobs</a>
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
    <!-- Job Alerts Section -->
    <main class="bg-white py-20 lg:py-24 md:w-3/4 w-3/4">
        <div class="container mx-auto px-6">
            <h2 class="text-4xl font-bold text-center text-red-900 mb-12">Job Alerts</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div class="p-8 bg-white shadow-2xl rounded-lg">
                    <h3 class="text-2xl font-bold mb-4">Set Up Job Alerts</h3>
                    <form id="job-alert-form" action="#" method="POST" onsubmit="addJobAlert(event)">
                        <div class="mb-4">
                            <label for="email" class="block text-lg font-semibold text-gray-700">Email Address</label>
                            <input type="email" id="email" name="email" required class="mt-2 p-2 w-full border rounded">
                        </div>
                        <div class="mb-4">
                            <label for="job-type" class="block text-lg font-semibold text-gray-700">Job Type</label>
                            <select id="job-type" name="job-type" required class="mt-2 p-2 w-full border rounded">
                                <option value="full-time">Full-Time</option>
                                <option value="part-time">Part-Time</option>
                                <option value="contract">Contract</option>
                                <option value="internship">Internship</option>
                            </select>
                        </div>
                        <div class="mb-4">
                            <label for="location" class="block text-lg font-semibold text-gray-700">Location</label>
                            <input type="text" id="location" name="location" required
                                class="mt-2 p-2 w-full border rounded">
                        </div>
                        <button type="submit"
                            class="bg-orange-600 text-white py-3 px-6 rounded-full text-lg font-semibold hover:bg-red-600 transition duration-300">Set
                            Alert</button>
                    </form>
                </div>
                <div class="p-8 bg-white shadow-2xl rounded-lg">
                    <h3 class="text-2xl font-bold mb-4">Manage Your Alerts</h3>
                    <ul class="space-y-4">
                        <li class="p-4 bg-gray-100 rounded">
                            <h4 class="text-xl font-bold">Full-Time Software Developer in New York</h4>
                            <p class="text-gray-700">Email sent to: user@example.com</p>
                            <button
                                class="mt-2 bg-red-500 text-white py-2 px-4 rounded-full text-sm font-semibold hover:bg-red-600 transition duration-300">Unsubscribe</button>
                        </li>
                        <li class="p-4 bg-gray-100 rounded">
                            <h4 class="text-xl font-bold">Part-Time Graphic Designer in Los Angeles</h4>
                            <p class="text-gray-700">Email sent to: user@example.com</p>
                            <button
                                class="mt-2 bg-red-500 text-white py-2 px-4 rounded-full text-sm font-semibold hover:bg-red-600 transition duration-300">Unsubscribe</button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </main>
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