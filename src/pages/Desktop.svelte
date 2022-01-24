<script>
    import Image from "svelte-image";
    import { Link } from "svelte-routing";
    import { fly } from "svelte/transition";
    
    let isPositionLanguage = false;
    window.addEventListener("DOMContentLoaded", function() {
        window.addEventListener("scroll", function() {
            if (window.scrollY >= 750) {
                isPositionLanguage = true;
	    }
        });
    });
</script>

<div class="text-center mt-28 mb-8">
    <div class="w-xl">
        <h1 class="text-8xl font-bold text-slate-900">requirements.txt Generator<br>Desktop</h1>
        <p class="text-2xl my-12">
            It just creates a single file, but it's fascinating.
        </p>
    </div>
</div>

<div class="flex items-center justify-center text-black">
    <div class="flex mx-1">
        <a href="https://github.com/ogty/requirements.txt-generator/releases/download/v1.0.0/requirementstxt_generator_for_windows.zip" class="border border-black rounded p-2 hover:bg-zinc-100 flex">
            <span class="ml-3 mt-2 mr-2">
                <i class="fab fa-windows md:text-3xl"></i>
            </span>
            <span class="mr-3">
                <span class="block text-sm">Download</span>
                <span class="font-semibold">For Windows</span>
            </span>
        </a>
    </div>
    <div class="flex mx-1">
        <a href="https://github.com/ogty/requirements.txt-generator/releases/download/v1.0.0/requirementstxt_generator_for_mac.zip" class="border border-black rounded p-2 hover:bg-zinc-100 flex min-w-300">
            <span class="ml-5 mt-2 mr-2">
                <i class="fab fa-apple md:text-3xl"></i>
            </span>
            <span class="mr-5">
                <span class="block text-sm">Download</span>
                <span class="font-semibold">For MacOS</span>
            </span>
        </a>    
    </div>
    <div class="flex mx-1">
        <a href="https://github.com/ogty/requirements.txt-generator" class="border border-black rounded p-2 hover:bg-zinc-100 flex">
            <span class="ml-5 mt-2 mr-2">
                <i class="fab fa-linux md:text-3xl"></i>
            </span>
            <span class="mr-6">
                <span class="block text-sm">Download</span>
                <span class="font-semibold">For Linux</span>
            </span>
        </a>        
    </div>
</div>

<div class="mt-16 mb-48 mx-auto px-auto shadow-2xl" style="width: 75%;">
    <img src="images/demo.gif" alt="" style="width: 100%;">
</div>

<div class="text-center mb-8">
    <div class="w-xl">
        <h1 class="text-8xl font-bold text-slate-900">Multiple language <br>support</h1>
        <p class="text-2xl mt-6">
            Julia and jupyter notebooks also require requirements.txt, <br>and the requirements.txt Generator makes this easy to do.
        </p>
    </div>
</div>

<div class="flex justify-between max-w-5xl px-auto mx-auto">
    {#if isPositionLanguage}
        <div style="width: 18%;" transition:fly="{{delay: 500, duration: 800, x: -500}}">
            <Image src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg" />
        </div>
        <div style="width: 18%;" transition:fly="{{delay: 500, duration: 800, y: 500}}">
            <Image src="https://raw.githubusercontent.com/devicons/devicon/master/icons/julia/julia-original.svg" />
        </div>
        <div style="width: 18%;" transition:fly="{{delay: 500, duration: 800, y: -500}}">
            <Image src="https://raw.githubusercontent.com/devicons/devicon/master/icons/go/go-original.svg" />
        </div>
        <div class="" style="width: 18%;" transition:fly="{{delay: 500, duration: 800, x: 500}}">
            <Image src="https://raw.githubusercontent.com/devicons/devicon/master/icons/jupyter/jupyter-original.svg" />
        </div>
    {/if}
</div>

<h1 class="text-center text-8xl font-bold text-slate-900 mt-48">All the features you need</h1>

<div class="mx-auto px-auto mt-16">
    <div class="flex justify-center text-slate-900 font-bold text-3xl gap-48">
        <div>
            <ul>
                <li><i class="fas fa-check mr-5 text-red-500"></i>Select Packages</li>
                <li class="my-8"><i class="fas fa-check mr-5 text-red-500"></i>Search Folders</li>
                <li><i class="fas fa-check mr-5 text-red-500"></i>Detail View</li>
            </ul>
        </div>
        <div>
            <ul>
                <li><i class="fas fa-check mr-5 text-red-500"></i>Add Version</li>
                <li class="my-8"><i class="fas fa-check mr-5 text-red-500"></i>Select Multiple Folders</li>
                <li><i class="fas fa-check mr-5 text-red-500"></i>Execute Command</li>
            </ul>
        </div>
    </div>
</div>

<div class="gird-cols-2 flex mt-48 border-2 rounded-3xl mix-w-fit text-slate-900 mx-48">
    <div class="border-r-2 pb-8 px-20 col-start-1 col-end-2 block w-1/2">
        <div class="max-h-fit">
            <i class="fas fa-file-alt md:text-8xl my-12"></i>
        </div>
        <div class="h-24">
            <h1 class="text-5xl font-bold text-slate-900">Know the requirements.txt</h1>
        </div>
        <div>
            <p class="mt-5 text-xl max-w-2xl h-16">
                What exactly is requirements.txt that most people who use Python are familiar with?
            </p>
        </div>
        <div>
            <Link to="learn">
                <div class="mt-3 mb-5">
                    <span class="flex text-2xl font-bold">
                        Learn more
                        <span class="">
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none">
                                <path stroke="#2962FF" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 22l5.5-5.5L13 11"></path>
                            </svg>
                        </span>
                    </span>                
                </div>
            </Link>
        </div>
    </div>
    <div class="px-20 pb-8 col-start-2 col-end-3 block w-1/2">
        <div class="max-h-fit">
            <i class="fas fa-eye md:text-8xl my-12"></i>
        </div>
        <div class="h-24">
            <h1 class="text-5xl font-bold text-slate-900">Explore our features</h1>
        </div>
        <div>
            <p class="mt-5 text-xl max-w-2xl h-16">
                Learn more about useful features, including a detailed view of your folders.
            </p>
        </div>
        <div>
            <Link to="features">
                <div class="mt-3 mb-5">
                    <span class="flex text-2xl font-bold">
                        Explore features
                        <span class="">
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none">
                                <path stroke="#2962FF" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 22l5.5-5.5L13 11"></path>
                            </svg>
                        </span>
                    </span>                
                </div>
            </Link>
        </div>
    </div>
</div>

<div class="text-center mt-48 mb-8">
    <div class="w-xl">
        <h1 class="text-8xl font-bold text-slate-900">No need to choose,<br> use everything</h1>
        <p class="text-2xl mt-6">
            It just creates a single file, but it's fascinating.
        </p>
    </div>
</div>

<div class="flex items-center justify-center text-black">
    <div class="flex mx-1">
        <a href="https://github.com/ogty/requirements.txt-generator/releases/download/v1.0.0/requirementstxt_generator_for_windows.zip" class="border border-black rounded p-2 hover:bg-zinc-100 flex">
            <span class="ml-3 mt-2 mr-2">
                <i class="fab fa-windows md:text-3xl"></i>
            </span>
            <span class="mr-3">
                <span class="block text-sm">Download</span>
                <span class="font-semibold">For Windows</span>
            </span>
        </a>
    </div>
    <div class="flex mx-1">
        <a href="https://github.com/ogty/requirements.txt-generator/releases/download/v1.0.0/requirementstxt_generator_for_mac.zip" class="border border-black rounded p-2 hover:bg-zinc-100 flex min-w-300">
            <span class="ml-5 mt-2 mr-2">
                <i class="fab fa-apple md:text-3xl"></i>
            </span>
            <span class="mr-5">
                <span class="block text-sm">Download</span>
                <span class="font-semibold">For MacOS</span>
            </span>
        </a>    
    </div>
    <div class="flex mx-1">
        <a href="https://github.com/ogty/requirements.txt-generator/" class="border border-black rounded p-2 hover:bg-zinc-100 flex">
            <span class="ml-5 mt-2 mr-2">
                <i class="fab fa-linux md:text-3xl"></i>
            </span>
            <span class="mr-6">
                <span class="block text-sm">Download</span>
                <span class="font-semibold">For Linux</span>
            </span>
        </a>        
    </div>
</div>
<div class="text-center mt-3">
    <span>or</span>
</div>

<div class="mt-3 w-44 mx-auto px-auto">
    <Link to="generate">
        <a href="/" class="border border-black rounded p-2 hover:bg-zinc-100 flex -mr-2">
            <span class="ml-5 mt-2 mr-2">
                <i class="fab fa-chrome md:text-3xl"></i>
            </span>
            <span class="mr-6">
                <span class="block text-sm">Launch</span>
                <span class="font-semibold">In Browser</span>
            </span>
        </a>
    </Link>
</div>

<div class="h-56"></div>
