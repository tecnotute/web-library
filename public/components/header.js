var header = document.getElementById("header")
header.innerHTML = '<nav class="bg-white shadow bg-opacity-75 dark:bg-gray-900 hover:text-red-500 hover:underline-none"><div id="TopNav" class="z-50 fixed w-screen top-0 un_responsive-navbar duration-500 ease-in-out" style="background: rgb(55,65,81, 0.25);box-shadow: rgba(31, 38, 135, 0.37) 0px 8px 32px 0px;backdrop-filter: blur(20px);border-radius: 0rem 0rem 2rem 2rem;border: 1px solid rgba(255, 255, 255, 0.18);"><div class="container px-6 py-3 mx-auto"><div class="flex flex-col md:flex-row md:justify-between md:items-center"><div class="flex items-center justify-between"><div class="flex items-center"><a class="text-2xl font-bold text-gray-800 transition-colors duration-200 transform dark:text-white lg:text-3xl hover:text-gray-700 dark:hover:text-gray-300" href="#">Tecnotute</a></div><div class="flex md:hidden"><button id="switchTheme" class="hidden h-10 w-10 justify-center items-center focus:outline-none dark:text-gray-300 border rounded-md ml-2 dark:border-gray-700 hover:text-gray-500 duration-200 border-red-400 text-red-400 dark:border-opacity-50"><i id="ToggleSvg" class="fa fa-sun"></i></button><button id="switchStyle" type="button" class="flex h-10 w-10 justify-center items-center focus:outline-none dark:text-gray-300 border rounded-md ml-2 dark:border-gray-700 hover:text-gray-500 duration-200 border-red-400 text-red-400 dark:border-opacity-50" aria-label="toggle menu"><i id="ToggleBars" class="fa fa-bars"></i></button></div></div><div class="items-center md:flex"><div class="flex flex-col mt-2 md:flex-row md:mt-0 md:mx-1"><a class="my-1 text-sm leading-5 text-gray-700 transition-colors duration-200 transform dark:text-gray-200 hover:text-red-600 dark:hover:text-red-400 hover:underline-none md:mx-4 md:my-0" href="components.html">Components</a><a class="my-1 text-sm leading-5 text-gray-700 transition-colors duration-200 transform dark:text-gray-200 hover:text-red-600 dark:hover:text-red-400 hover:underline-none md:mx-4 md:my-0" href="pages/changelog.html">Changelogs</a></div><div class="flex items-center py-2 -mx-1 md:mx-0"><a class="block w-1/2 px-3 py-2 mx-1 text-sm font-medium leading-5 text-center text-white transition-colors duration-200 transform bg-gray-500 rounded-md hover:bg-red-600 md:mx-2 md:w-auto" href="content/postTemplate.html">Login</a><a class="block w-1/2 px-3 py-2 mx-1 mr-2 text-sm font-medium leading-5 text-center text-white transition-colors duration-200 transform bg-red-500 rounded-md hover:bg-red-600 md:mx-0 md:w-auto" href="#">Join</a><button id="switchTheme" class="hidden h-10 w-10 justify-center items-center focus:outline-none dark:text-gray-300 border rounded-md ml-2 dark:border-gray-700 hover:text-gray-500 duration-200 border-red-400 text-red-400 dark:border-opacity-50"><i id="toggleSvg" class="fa fa-sun"></i></button></div><div class="mt-3 md:hidden"><div class="relative"><span class="absolute inset-y-0 left-0 flex items-center pl-3"><i class="text-gray-400 fa fa-search"></i></span><input type="text" class="w-full py-2 pl-10 pr-4 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-red-500 dark:focus:border-red-500 focus:outline-none focus:ring" placeholder="Search"></div></div></div></div><div id="owl-links" class="owl-carousel z-30 owl-theme cursor-pointer pt-3"><a class="mx-4 text-sm leading-5 text-gray-700 transition-colors duration-200 transform dark:text-gray-200 hover:text-red-600 dark:hover:text-red-400 hover:underline-none md:my-0" href="#">News</a><a class="mx-4 text-sm leading-5 text-gray-700 transition-colors duration-200 transform dark:text-gray-200 hover:text-red-600 dark:hover:text-red-400 hover:underline-none md:my-0" href="#">Articles</a><a class="mx-4 text-sm leading-5 text-gray-700 transition-colors duration-200 transform dark:text-gray-200 hover:text-red-600 dark:hover:text-red-400 hover:underline-none md:my-0" href="#">Videos</a><a class="mx-4 text-sm leading-5 text-gray-700 transition-colors duration-200 transform dark:text-gray-200 hover:text-red-600 dark:hover:text-red-400 hover:underline-none md:my-0" href="#">Tricks</a><a class="mx-4 text-sm leading-5 text-gray-700 transition-colors duration-200 transform dark:text-gray-200 hover:text-red-600 dark:hover:text-red-400 hover:underline-none md:my-0" href="#">PHP</a><a class="mx-4 text-sm leading-5 text-gray-700 transition-colors duration-200 transform dark:text-gray-200 hover:text-red-600 dark:hover:text-red-400 hover:underline-none md:my-0" href="#">Laravel</a><a class="mx-4 text-sm leading-5 text-gray-700 transition-colors duration-200 transform dark:text-gray-200 hover:text-red-600 dark:hover:text-red-400 hover:underline-none md:my-0" href="#">Vue</a><a class="mx-4 text-sm leading-5 text-gray-700 transition-colors duration-200 transform dark:text-gray-200 hover:text-red-600 dark:hover:text-red-400 hover:underline-none md:my-0" href="#">React</a><a class="mx-4 text-sm leading-5 text-gray-700 transition-colors duration-200 transform dark:text-gray-200 hover:text-red-600 dark:hover:text-red-400 hover:underline-none md:my-0" href="#">Tailwindcss</a><a class="mx-4 text-sm leading-5 text-gray-700 transition-colors duration-200 transform dark:text-gray-200 hover:text-red-600 dark:hover:text-red-400 hover:underline-none md:my-0" href="#">Meraki UI</a><a class="mx-4 text-sm leading-5 text-gray-700 transition-colors duration-200 transform dark:text-gray-200 hover:text-red-600 dark:hover:text-red-400 hover:underline-none md:my-0" href="#">CPP</a><a class="mx-4 text-sm leading-5 text-gray-700 transition-colors duration-200 transform dark:text-gray-200 hover:text-red-600 dark:hover:text-red-400 hover:underline-none md:my-0" href="#">JavaScript</a><a class="mx-4 text-sm leading-5 text-gray-700 transition-colors duration-200 transform dark:text-gray-200 hover:text-red-600 dark:hover:text-red-400 hover:underline-none md:my-0" href="#">Ruby</a><a class="mx-4 text-sm leading-5 text-gray-700 transition-colors duration-200 transform dark:text-gray-200 hover:text-red-600 dark:hover:text-red-400 hover:underline-none md:my-0" href="#">Mysql</a><a class="mx-4 text-sm leading-5 text-gray-700 transition-colors duration-200 transform dark:text-gray-200 hover:text-red-600 dark:hover:text-red-400 hover:underline-none md:my-0" href="#">Pest</a><a class="mx-4 text-sm leading-5 text-gray-700 transition-colors duration-200 transform dark:text-gray-200 hover:text-red-600 dark:hover:text-red-400 hover:underline-none md:my-0" href="#">PHPUnit</a><a class="mx-4 text-sm leading-5 text-gray-700 transition-colors duration-200 transform dark:text-gray-200 hover:text-red-600 dark:hover:text-red-400 hover:underline-none md:my-0" href="#">Netlify</a><a class="mx-4 text-sm leading-5 text-gray-700 transition-colors duration-200 transform dark:text-gray-200 hover:text-red-600 dark:hover:text-red-400 hover:underline-none md:my-0" href="#">VS Code</a><a class="mx-4 text-sm leading-5 text-gray-700 transition-colors duration-200 transform dark:text-gray-200 hover:text-red-600 dark:hover:text-red-400 hover:underline-none md:my-0" href="#">PHPStorm</a><a class="mx-4 text-sm leading-5 text-gray-700 transition-colors duration-200 transform dark:text-gray-200 hover:text-red-600 dark:hover:text-red-400 hover:underline-none md:my-0" href="#">Sublime</a></div></div></div></nav>'