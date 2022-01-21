<script>
    import Image from "svelte-image";
    import { Link } from "svelte-routing";
</script>

<div class="text-center mt-20 mb-8">
    <div class="w-xl">
        <h1 class="text-8xl font-bold text-slate-900">requirements.txt Generator<br>Desktop</h1>
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

<div class="mt-16">
    <div class="mx-auto px-auto" style="width: 900px;">
        <Image src="images/sample.gif"/>
    </div>
</div>

<div class="text-center mb-6 mt-12">
    <div class="w-xl">
        <h1 class="text-8xl font-bold text-slate-900">Multiple language <br>support</h1>
        <p class="text-2xl mt-6">
            Julia and jupyter notebooks also require requirements.txt, <br>and the requirements.txt Generator makes this easy to do.
        </p>
    </div>
</div>

<div class="flex justify-between max-w-7xl px-auto mx-auto mt-14">
    <div class="mr-28" style="width: 170px;">
        <Image src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg" />
    </div>
    <div class="mr-28" style="width: 170px;">
        <Image src="https://raw.githubusercontent.com/devicons/devicon/master/icons/julia/julia-original.svg" />
    </div>
    <div class="mr-28" style="width: 170px;">
        <Image src="https://raw.githubusercontent.com/devicons/devicon/master/icons/go/go-original.svg" />
    </div>
    <div class="" style="width: 170px;">
        <Image src="https://raw.githubusercontent.com/devicons/devicon/master/icons/jupyter/jupyter-original.svg" />
    </div>
</div>

<div class="px-auto mx-auto flex mt-80 border-2 rounded-3xl mix-w-fit text-slate-900 mx-40">
    <div class="border-r-2 p-20">
        <i class="fas fa-file-alt md:text-8xl my-12"></i>
        <h1 class="text-5xl font-bold text-slate-900">Know the requirements.txt</h1>
        <p class="mt-5 text-xl max-w-2xl">
            What exactly is requirements.txt that most people who use Python are familiar with?
        </p>
        <Link to="learn">
            <div class="mt-3 mb-5">
                <span class="flex text-2xl font-bold">
                    Learn more
                    <span class="mt-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none">
                            <path stroke="#2962FF" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 22l5.5-5.5L13 11"></path>
                        </svg>
                    </span>
                </span>                
            </div>
        </Link>
    </div>
    <div class="p-20">
        <i class="fas fa-eye md:text-8xl my-12"></i>
        <h1 class="text-5xl font-bold text-slate-900">Explore our features</h1>
        <p class="mt-5 text-xl max-w-2xl">
            Learn more about useful features, including a detailed view of your folders.
        </p>
        <Link to="features">
            <div class="mt-3 mb-5">
                <span class="flex text-2xl font-bold">
                    Explore features
                    <span class="mt-1 fill-black">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none">
                            <path stroke="#2962FF" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 22l5.5-5.5L13 11"></path>
                        </svg>
                    </span>
                </span>                
            </div>
        </Link>
    </div>
</div>

<div class="text-center mt-80 mb-8">
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

<div class="mt-3">
    <Link to="generate">
        <a href="/" class="mx-auto px-auto max-w-fit border border-black rounded p-2 hover:bg-zinc-100 flex">
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
