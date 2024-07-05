<!doctype html>
<html>

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- Latest FontAwesome CDN link -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">

    <!-- Tailwind CSS -->
    <link href="./output.css" rel="stylesheet">
</head>

<body class="bg-red-100">
    <nav class="flex justify-between items-center p-4 bg-gradient-to-r from-red-700 via-orange-500  to-orange-800 shadow">
        <div class="flex items-center">
            <i class="fas fa-briefcase text-2xl text-red-100 mr-1"></i>
            <h1 class="text-xl font-bold text-red-100"><span class="text-2xl">G</span>et<span
                    class="text-2xl">H</span>ired</h1>
        </div>
        <div class="hidden md:flex space-x-8 md:space-x-4 font-semibold">
            <a href="index.html" class="text-red-100 hover:text-orange-900">Home</a>
            <a href="" class="text-red-100 hover:text-orange-900">My Job Application</a>
            <a href="JobAlerts.html" class="text-red-100 hover:text-orange-900">Job Alerts</a>
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
        <!--Nav for mobile view-->
    <div id="mobile-menu"
        class=" md:hidden flex flex-col items-center space-y-4 p-4 bg-gradient-to-r from-red-700 via-orange-500  to-orange-800 text-red-100">
        <a href="index.html" class=" hover:text-black">Home</a>
        <a href="" class=" hover:text-black">My Job Application</a>
        <a href="JobAlerts.html" class=" hover:text-black">Job Alerts</a>
        <a href="JobLists.html" class=" hover:text-black">Find Jobs</a>
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
    <!-- Hero Section -->
     <main>
    <section class="hero bg-cover bg-center py-32" style="background-image: url('./assets/Hiring.jpg');">
        <div class="container mx-auto px-6 text-center text-white bg-opacity-50 bg-black rounded-lg py-10">
            <h2 class="text-5xl font-bold mb-2">Welcome to GetHired</h2>
            <h3 class="text-2xl mb-8">Find your dream job with us</h3>
            <p class="text-lg mb-8">Join our community and get access to thousands of job listings, personalized job alerts,
                and career resources to help you succeed.</p>
            <a href="#"
                class="bg-orange-600 text-white py-3 px-6 rounded-full text-lg font-semibold hover:bg-red-600 transition duration-300">Get
                Started</a>
        </div>
    </section>
    <section class="bg-red-50 py-20">
        <div class="container mx-auto px-6">
            <h2 class="text-4xl font-bold text-center text-red-900 mb-12">Why Choose Us?</h2>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div class="p-8 bg-white shadow-2xl rounded-lg">
                    <i class="fas fa-briefcase text-4xl text-red-600 mb-4"></i>
                    <h4 class="text-2xl font-semibold mb-2">Wide Range of Jobs</h4>
                    <p class="text-gray-700">Explore a variety of job opportunities across different industries and
                        locations.
                    </p>
                </div>
                <div class="p-8 bg-white shadow-2xl rounded-lg">
                    <i class="fas fa-bell text-4xl text-red-600 mb-4"></i>
                    <h4 class="text-2xl font-semibold mb-2">Job Alerts</h4>
                    <p class="text-gray-700">Get notified about new job openings that match your preferences and skills.</p>
                </div>
                <div class="p-8 bg-white shadow-2xl rounded-lg">
                    <i class="fas fa-user text-4xl text-red-600 mb-4"></i>
                    <h4 class="text-2xl font-semibold mb-2">Career Resources</h4>
                    <p class="text-gray-700">Access valuable resources to enhance your resume, cover letter, and interview
                        skills.</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Testimonials Section -->
    <section class="bg-gradient-to-r from-red-800 via-orange-600 to-yellow-600 py-16">
        <div class="container mx-auto px-6 text-center">
            <h2 class="text-5xl font-bold mb-12 text-white">What Our Users Say</h2>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div class="p-8 bg-white shadow-2xl rounded-lg transform hover:scale-105 transition-transform duration-300">
                    <p class="text-lg text-gray-800 mb-6">"GetHired helped me find my dream job in just a few weeks. The job
                        alerts feature is amazing!"</p>
                    <h4 class="text-2xl font-bold text-orange-600">- Jane Doe</h4>
                </div>
                <div class="p-8 bg-white shadow-2xl rounded-lg transform hover:scale-105 transition-transform duration-300">
                    <p class="text-lg text-gray-800 mb-6">"The career resources on GetHired are top-notch. I improved my
                        resume and landed more interviews."</p>
                    <h4 class="text-2xl font-bold text-orange-600">- John Smith</h4>
                </div>
                <div class="p-8 bg-white shadow-2xl rounded-lg transform hover:scale-105 transition-transform duration-300">
                    <p class="text-lg text-gray-800 mb-6">"I love the wide range of job opportunities available. There's
                        something for everyone on GetHired."</p>
                    <h4 class="text-2xl font-bold text-orange-600">- Emily Johnson</h4>
                </div>
            </div>
        </div>
    </section>
    <!-- How It Works Section -->
    <section class="bg-white py-16">
        <div class="container mx-auto px-6">
            <h2 class="text-4xl font-bold text-center text-orange-800 mb-12">How It Works</h2>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8  text-orange-800  text-center">
                <div class="p-8 border-2 border-orange-400 shadow-2xl rounded-lg">
                    <i class="fas fa-user-plus text-4xl mb-4"></i>
                    <h3 class="text-2xl font-bold mb-2">1. Sign Up</h3>
                    <p class="text-lg">Create your free account to get started and access thousands of job listings.</p>
                </div>
                <div class="p-8 border-2  border-orange-400 text-orange-800 shadow-2xl rounded-lg">
                    <i class="fas fa-search text-4xl mb-4"></i>
                    <h3 class="text-2xl font-bold mb-2">2. Search Jobs</h3>
                    <p class="text-lg">Use our powerful search tools to find job opportunities that match your skills and
                        interests.</p>
                </div>
                <div class="p-8 border-2  border-orange-400 text-orange-800 shadow-2xl rounded-lg">
                    <i class="fas fa-paper-plane text-4xl mb-4"></i>
                    <h3 class="text-2xl font-bold mb-2">3. Apply</h3>
                    <p class="text-lg">Submit your application with a few clicks and track your application status.</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Call to Action Section -->
    <section class="bg-white py-5 pb-10">
        <div class="container mx-auto px-6 flex flex-col gap-10  md:flex-row items-center justify-between text-orange-900">
            <div class="md:w-2/4 text-center md:text-left mb-6 md:mb-0 p-10  shadow-2xl rounded-lg transform hover:scale-105 transition-transform duration-300 h-full">
                <h2 class="text-4xl font-bold mb-6">Ready to Get Hired?</h2>
                <p class="text-xl mb-8">Join thousands of satisfied job seekers who have found their dream job with
                    GetHired.</p>
                <a href="#"
                    class="bg-red-500 text-white py-3 px-6 rounded-full text-lg font-semibold hover:bg-red-600 transition duration-300">Join
                    Now</a>
            </div>
            <div class="md:w-1/2">
                <img src="./assets/Action.jpg" alt="Call to Action" class="w-full sm:w-full md:w-5/4 rounded-lg">
            </div>

        </div>
    </section>
</main>

<!-- Footer Section -->
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
</html>