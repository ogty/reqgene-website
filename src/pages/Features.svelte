<script>
    import { Link } from "svelte-routing";
</script>

<div class="px-auto mx-auto text-center my-28">
    <h1 class="text-slate-900 font-bold xl:text-7xl 2xl:text-8xl">I'm sloppy and I need this.</h1>
</div>

<div class="px-auto mx-auto text-center hover:opacity-90">
    <Link to="generate">
        <span class="text-white text-2xl font-bold bg-slate-900 px-10 py-5 rounded-full">Generate requirements.txt</span>
    </Link>
</div>

<div class="h-28"></div>

<div class="grid-cols-6 gap-4 px-56 xl:w-full xl:block 2xl:grid">
    <div class="col-start-1 col-end-4">
        <div class="border-2 border-slate-900 p-10 rounded-2xl">
            <span class="text-5xl font-bold text-slate-900">Execution Environment</span>
            <div class="h-24">
                <p class="my-5 text-xl indent-4">
                    reqGene is compatible with all major operating systems: Windows, Mac, and Linux. It can also be used with all browsers.
                </p>
            </div>
            <div class="gap-16 justify-center h-fit flex xl:px-8 2xl:px-0">
                <div class="w-1/4">
                    <img src="images/windows-icon-png-5814.png" alt="windows">
                </div>
                <div class="w-1/4">
                    <img src="images/mac-icon-3309.png" alt="mac">
                </div>
                <div class="w-1/4">
                    <img src="images/linux-icon-28163.png" alt="linux">
                </div>
                <div class="w-1/4">
                    <img src="images/google-chrome-icon-3124.png" alt="browser">
                </div>
            </div>
        </div>
    </div>
    <div class="col-start-4 col-end-7 xl:mt-8 2xl:mt-0">
        <div class="border-2 border-slate-900 p-10 rounded-2xl">
            <span class="text-5xl font-bold text-slate-900">Supported languages</span>
            <div class="h-24">
                <p class="my-5 text-xl indent-4">
                    reqGene supports three languages: Python, Julia, and Go. For Python and Julia, it also supports Jupyter notebook.
                    Just click the button to create requirements.txt immediately.
                </p>
            </div>
            <div class="gap-16 justify-center h-fit flex xl:px-8 2xl:px-0">
                <div class="w-1/4">
                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg" alt="python">
                </div>
                <div class="w-1/4">
                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/julia/julia-original.svg" alt="julia">
                </div>
                <div class="w-1/4">
                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/go/go-original.svg" alt="go">
                </div>
                <div class="w-1/4">
                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/jupyter/jupyter-original.svg" alt="jupyter">
                </div>
            </div>
        </div>
    </div>

    <div class="col-start-1 col-end-3 xl:mt-24 2xl:mt-16">
        <div class="p-10 border-r-8 border-double xl:border-t-8 xl:border-b-0 2xl:border-t-0 2xl:border-b-8">
            <h1 class="font-bold text-4xl text-slate-900">Add Version</h1>
            <p class="my-5 text-xl indent-4">
                By checking the version checkbox, 
                you can get the version information from the packages installed in your environment and append it to them.
            </p>
            <p class="indent-4 text-xl">
                Also, if you have checked the version check box, but the version is not displayed, 
                you will know in advance that the package will most likely not install correctly when you install it with requirements.txt.
            </p>
        </div>
    </div>
    <div class="col-end-7 col-span-4 p-10 xl:mt-4 2xl:mt-16">
        <div class="text-left bg-slate-900 py-5 px-5 max-w-xl px-auto mx-auto text-xl">
            <pre>
                <code><span class="absolute"><img src="images/file_type_pip.png" alt=""></span><span class="text-white absolute ml-8">&nbsp;requirements.txt</span>

<span class="text-white">&nbsp;1&nbsp;</span><span class="text-violet-500">CSV</span><span class="animate-pulse"><span class="text-rose-600">@</span><span class="text-sky-500">v0.8.5</span></span>
<span class="text-white">&nbsp;2&nbsp;</span><span class="text-violet-500">DataFrames</span><span class="animate-pulse"><span class="text-rose-600">@</span><span class="text-sky-500">v0.22.7</span></span>
<span class="text-white">&nbsp;3&nbsp;</span><span class="text-violet-500">Distributions</span><span class="animate-pulse"><span class="text-rose-600">@</span><span class="text-sky-500">v0.24.18</span></span>
<span class="text-white">&nbsp;4&nbsp;</span><span class="text-violet-500">Flux</span><span class="animate-pulse"><span class="text-rose-600">@</span><span class="text-sky-500">v0.12.8</span></span>
<span class="text-white">&nbsp;5&nbsp;</span><span class="text-violet-500">Genie</span><span class="animate-pulse"><span class="text-rose-600">@</span><span class="text-sky-500">v3.0.0</span></span>
<span class="text-white">&nbsp;6&nbsp;</span><span class="text-violet-500">IJulia</span><span class="animate-pulse"><span class="text-rose-600">@</span><span class="text-sky-500">v1.23.2</span></span>
<span class="text-white">&nbsp;7&nbsp;</span><span class="text-violet-500">Lathe</span><span class="animate-pulse"><span class="text-rose-600">@</span><span class="text-sky-500">v0.1.6</span></span>
<span class="text-white">&nbsp;8&nbsp;</span><span class="text-violet-500">Plots</span><span class="animate-pulse"><span class="text-rose-600">@</span><span class="text-sky-500">v1.23.6</span></span>
                </code>
            </pre>
        </div>
    </div>

    <div class="col-start-2 col-end-6 border-t-2 border-dashed border-slate-900 2xl:mt-10 xl:mt-16"></div>
    <div class="col-start-2 col-span-4 px-auto mx-auto p-10">
        <div class="items-center flex-col xl:text-center">
            <ul class="">
                <li>
                    <i class="fas fa-search md:text-5xl text-slate-900"></i>
                    <span class="text-5xl font-bold text-slate-900 ml-12">Search Folders</span>
                </li>
                <li>
                    <i class="fas fa-terminal md:text-5xl text-slate-900 my-12"></i>
                    <span class="text-5xl font-bold text-slate-900 ml-10">Execute Command</span>
                </li>
                <li>
                    <i class="fas fa-folders md:text-5xl text-slate-900"></i>
                    <span class="text-5xl font-bold text-slate-900 ml-10">Multiple Folder</span>
                </li>
            </ul>
        </div>
    </div>
    <div class="col-start-2 col-end-6 border-t-2 border-dashed border-slate-900 xl:mb-16 2xl:mb-10"></div>

    <div class="col-start-1 col-end-5">
        <div class="flex my-4 p-10">
            <div class="block">
                <div class="mt-2">
                    <div class="my-2">
                        <label class="inline-flex items-center">
                            <input type="checkbox" class="form-checkbox h-6 w-6 hover:cursor-pointer" checked>
                            <span class="ml-2 text-2xl font-bold">matplotlib==3.3.4</span>
                        </label>
                    </div>
                    <div class="my-2">
                    <label class="inline-flex items-center">
                        <input type="checkbox" class="form-checkbox h-6 w-6 hover:cursor-pointer" checked>
                        <span class="ml-2 text-2xl font-bold">numpy==1.19.5</span>
                    </label>
                    </div>
                    <div class="my-2">
                        <label class="inline-flex items-center">
                            <input type="checkbox" class="form-checkbox h-6 w-6 hover:cursor-pointer" checked>
                            <span class="ml-2 text-2xl font-bold">pandas==1.2.3</span>
                        </label>
                    </div>
                    <div class="my-2">
                        <label class="inline-flex items-center">
                            <input type="checkbox" class="form-checkbox h-6 w-6 hover:cursor-pointer">
                            <span class="ml-2 text-2xl font-bold">settings</span>
                        </label>
                    </div>
                </div>
            </div>
            <div class="px-auto mx-auto my-auto py-auto text-slate-900">
                <i class="animate-bounce fal fa-arrow-alt-right md:text-5xl"></i>
            </div>
            <div class="text-left bg-slate-900 py-5 px-5 max-w-xl px-auto mx-auto text-2xl ml-10">
                <pre>
                    <code><span class="absolute"><img src="images/file_type_pip.png" alt=""></span><span class="text-white absolute ml-8">&nbsp;requirements.txt</span>
    
<span class="text-white">&nbsp;1&nbsp;</span><span class="text-violet-500">matplotlib</span><span><span class="text-rose-600">==</span><span class="text-sky-500">3.3.4</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
<span class="text-white">&nbsp;2&nbsp;</span><span class="text-violet-500">numpy</span><span><span class="text-rose-600">==</span><span class="text-sky-500">1.19.5</span></span>
<span class="text-white">&nbsp;3&nbsp;</span><span class="text-violet-500">pandas</span><span><span class="text-rose-600">==</span><span class="text-sky-500">1.2.3</span></span>
                    </code>
                </pre>
            </div>
        </div>
    </div>
    <div class="col-start-5 col-end-7">
        <div class="my-4 p-10 border-l-8 border-double xl:border-b-8 xl:border-t-0 2xl:border-y-8">
            <h1 class="font-bold text-4xl text-slate-900">Select Packages</h1>
            <p class="my-5 text-xl indent-4">
                You will need this if you are creating the original module. 
                This may also help you if you have different names and calls for external packages.
            </p>
        </div>
    </div>

    <div class="col-start-1 col-end-3">
        <div class="my-16 p-10 border-r-8 border-double border-t-8">
            <h1 class="font-bold text-4xl text-slate-900">Detail View</h1>
            <p class="my-5 text-xl indent-4">
                Displays the percentage of program files contained in any number of selected folders.
                This feature may be useful when creating a requirements.txt file for a forgotten project.
            </p>
        </div>
    </div>
    <div class="col-end-7 col-span-4 block">
        <div class="px-auto mx-auto xl:pt-4 2xl:pt-16">
            <div class="w-4/5 px-auto mx-auto">
                <h6 class="text-left text-xl font-bold ">C:\Users\user\Desktop\project1</h6>
                <div class="p-1 text-center px-auto mx-auto hover:opacity-75 hover:cursor-pointer" style="background-color: #3572A5;">
                    <span class="" title="Python" style="width:100%;">
                        <span class="font-bold text-white">100%</span>
                    </span>
                </div>
            </div>
            <div class="w-4/5 px-auto mx-auto mt-5">
                <h6 class="text-left text-xl font-bold ">C:\Users\user\Desktop\project2</h6>
                <div class="flex">
                    <div class="w-3/4 p-1 text-center px-auto mx-auto hover:opacity-75 hover:cursor-pointer" style="background-color: #3572A5;">
                        <span class="" title="Python">
                            <span class="font-bold text-white">75%</span>
                        </span>
                    </div>
                    <div class="w-1/4 p-1 text-center px-auto mx-auto hover:opacity-75 hover:cursor-pointer" style="background-color: #a270ba;">
                        <span class="" title="Python">
                            <span class="font-bold text-white">25%</span>
                        </span>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="mt-12">
            <h1 class="text-center">
                <span class="font-bold text-4xl text-slate-900">Languages</span>
            </h1>
            <div class="block">
                <div class="flex justify-center my-4">
                    <div class="">
                        <span class="bg-slate-900 mr-3 rounded-full" style="background-color: #3572A5;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="text-xl font-bold">Python</span>
                    </div>
                    <div class="">
                        <span class="bg-slate-900 mr-3 ml-5 rounded-full" style="background-color: #a270ba;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="text-xl font-bold">Julia</span>
                    </div>
                    <div class="">
                        <span class="bg-slate-900 mr-3 ml-5 rounded-full" style="background-color: #00ADD8;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="text-xl font-bold">Go</span>
                    </div>
                </div>
                <div class="flex justify-center">
                    <div class="">
                        <span class="bg-slate-900 mr-3 rounded-full" style="background-color: #DA5B0B;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="text-xl font-bold">Ipynb</span>
                    </div>
                    <div class="">
                        <span class="bg-slate-900 mr-3 ml-5 rounded-full" style="background-color: darkgray;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="text-xl font-bold">Other</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<div class="px-auto mx-auto text-center hover:opacity-90 xl:mt-48 2xl:mt-28">
    <Link to="generate">
        <span class="text-white text-2xl font-bold bg-slate-900 px-10 py-5 rounded-full">Generate requirements.txt</span>
    </Link>
</div>

<div class="h-56"></div>
