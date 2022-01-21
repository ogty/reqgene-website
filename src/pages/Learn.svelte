<script>
    import { Link } from "svelte-routing";

    const _sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
</script>

<h1 class="text-8xl text-center my-28 font-bold text-slate-900">What's requirements.txt?</h1>

<div class="text-center text-2xl px-auto mx-auto max-w-6xl">
    <p class="my-3">
        <span class="font-bold">requirements.txt</span> is a text file used in the Python programming language to share a project with other users, 
        or to restore the environment. In this file, you need to specify the external packages required by your project.
    </p>
    <div class="my-16 text-left bg-slate-900 py-5 px-5 max-w-xl px-auto mx-auto">
        <pre>
            <code><i class="fas fa-align-left text-gray-500"></i><span class="text-white">&nbsp;requirements.txt</span>

<span class="text-white">&nbsp;1&nbsp;</span><span class="text-violet-500">absl-py</span><span class="text-rose-600">==</span><span class="text-sky-500">0.14.1</span>
<span class="text-white">&nbsp;2&nbsp;</span><span class="text-violet-500">Adafruit-BluefruitLE</span><span class="text-rose-600">==</span><span class="text-sky-500">0.9.10</span>
<span class="text-white">&nbsp;3&nbsp;</span><span class="text-violet-500">aiohttp</span><span class="text-rose-600">==</span><span class="text-sky-500">3.7.4.post0</span>
<span class="text-white">&nbsp;4&nbsp;</span><span class="text-violet-500">altair</span><span class="text-rose-600">==</span><span class="text-sky-500">4.1.0</span>
<span class="text-white">&nbsp;5&nbsp;</span><span class="text-violet-500">altgraph</span><span class="text-rose-600">==</span><span class="text-sky-500">0.17.2</span>
<span class="text-white">&nbsp;6&nbsp;</span><span class="text-violet-500">anyio</span><span class="text-rose-600">==</span><span class="text-sky-500">3.3.4</span>
<span class="text-white">&nbsp;7&nbsp;</span><span class="text-violet-500">appdirs</span><span class="text-rose-600">==</span><span class="text-sky-500">1.4.4</span>
<span class="text-white">&nbsp;8&nbsp;</span><span class="text-violet-500">argon2-cffi</span><span class="text-rose-600">==</span><span class="text-sky-500">20.1.0</span>
<span class="text-white">&nbsp;9&nbsp;</span><span class="text-violet-500">asgiref</span><span class="text-rose-600">==</span><span class="text-sky-500">3.4.1</span>
<span class="text-white">10&nbsp;</span><span class="text-violet-500">aspose-words</span><span class="text-rose-600">==</span><span class="text-sky-500">21.11.0</span>
<span class="text-white">11&nbsp;</span><span class="text-violet-500">astor</span><span class="text-rose-600">==</span><span class="text-sky-500">0.8.1</span>
<span class="text-white">12&nbsp;</span><span class="text-violet-500">astunparse</span><span class="text-rose-600">==</span><span class="text-sky-500">1.6.3</span>
<span class="text-white">13&nbsp;</span><span class="text-violet-500">async-generator</span><span class="text-rose-600">==</span><span class="text-sky-500">1.10</span>
<span class="text-white">14&nbsp;</span><span class="text-violet-500">async-timeout</span><span class="text-rose-600">==</span><span class="text-sky-500">3.0.1</span>
<span class="text-white">15&nbsp;</span><span class="text-violet-500">attrs</span><span class="text-rose-600">==</span><span class="text-sky-500">20.3.0</span>
<span class="text-white">16&nbsp;</span><span class="text-violet-500">autopep8</span><span class="text-rose-600">==</span><span class="text-sky-500">1.5.7</span>
<span class="text-white">17&nbsp;</span><span class="text-violet-500">azure-core</span><span class="text-rose-600">==</span><span class="text-sky-500">1.19.0</span>
<span class="text-white">18&nbsp;</span><span class="text-violet-500">azure-functions</span><span class="text-rose-600">==</span><span class="text-sky-500">1.7.2</span>
<span class="text-white">19&nbsp;</span><span class="text-violet-500">azure-storage-blob</span><span class="text-rose-600">==</span><span class="text-sky-500">12.9.0</span>
            </code>
        </pre>
    </div>
    <p class="my-3">
        Record the package list in <span class="font-bold">requirements.txt</span> and run the following command to install the package.
    </p>
    <div class="my-16">
        <pre class="my-3">
            <code>
                $ {#await _sleep(200)}&nbsp;{:then}p{/await}{#await _sleep(400)}&nbsp;{:then}i{/await}{#await _sleep(600)}&nbsp;{:then}p{/await}{#await _sleep(800)}&nbsp;{:then}&nbsp;{/await}{#await _sleep(1000)}&nbsp;{:then}i{/await}{#await _sleep(1200)}&nbsp;{:then}n{/await}{#await _sleep(1400)}&nbsp;{:then}s{/await}{#await _sleep(1600)}&nbsp;{:then}t{/await}{#await _sleep(1800)}&nbsp;{:then}a{/await}{#await _sleep(2000)}&nbsp;{:then}l{/await}{#await _sleep(2200)}&nbsp;{:then}l{/await}{#await _sleep(2400)}&nbsp;{:then}&nbsp;{/await}{#await _sleep(2600)}&nbsp;{:then}-{/await}{#await _sleep(2800)}&nbsp;{:then}r{/await}{#await _sleep(3000)}&nbsp;{:then}&nbsp;{/await}{#await _sleep(3200)}&nbsp;{:then}r{/await}{#await _sleep(3400)}&nbsp;{:then}e{/await}{#await _sleep(3600)}&nbsp;{:then}q{/await}{#await _sleep(3800)}&nbsp;{:then}u{/await}{#await _sleep(4000)}&nbsp;{:then}i{/await}{#await _sleep(4200)}&nbsp;{:then}r{/await}{#await _sleep(4400)}&nbsp;{:then}e{/await}{#await _sleep(4600)}&nbsp;{:then}m{/await}{#await _sleep(4800)}&nbsp;{:then}e{/await}{#await _sleep(5000)}&nbsp;{:then}n{/await}{#await _sleep(5200)}&nbsp;{:then}t{/await}{#await _sleep(5400)}&nbsp;{:then}s{/await}{#await _sleep(5600)}&nbsp;{:then}.{/await}{#await _sleep(5800)}&nbsp;{:then}t{/await}{#await _sleep(6000)}&nbsp;{:then}x{/await}{#await _sleep(6200)}&nbsp;{:then}t{/await}
            </code>
        </pre>
        <span class="">or</span>
        <pre class="my-3">
            <code>
                $ {#await _sleep(200)}&nbsp;{:then}p{/await}{#await _sleep(400)}&nbsp;{:then}y{/await}{#await _sleep(600)}&nbsp;{:then}t{/await}{#await _sleep(800)}&nbsp;{:then}h{/await}{#await _sleep(1000)}&nbsp;{:then}o{/await}{#await _sleep(1200)}&nbsp;{:then}n{/await}{#await _sleep(1400)}&nbsp;{:then}&nbsp;{/await}{#await _sleep(1600)}&nbsp;{:then}-{/await}{#await _sleep(1800)}&nbsp;{:then}m{/await}{#await _sleep(2000)}&nbsp;{:then}&nbsp;{/await}{#await _sleep(2200)}&nbsp;{:then}p{/await}{#await _sleep(2400)}&nbsp;{:then}i{/await}{#await _sleep(2600)}&nbsp;{:then}p{/await}{#await _sleep(2800)}&nbsp;{:then}&nbsp;{/await}{#await _sleep(3000)}&nbsp;{:then}i{/await}{#await _sleep(3200)}&nbsp;{:then}n{/await}{#await _sleep(3400)}&nbsp;{:then}s{/await}{#await _sleep(3600)}&nbsp;{:then}t{/await}{#await _sleep(3800)}&nbsp;{:then}a{/await}{#await _sleep(4000)}&nbsp;{:then}l{/await}{#await _sleep(4200)}&nbsp;{:then}l{/await}{#await _sleep(4400)}&nbsp;{:then}&nbsp;{/await}{#await _sleep(4600)}&nbsp;{:then}-{/await}{#await _sleep(4800)}&nbsp;{:then}r{/await}{#await _sleep(5000)}&nbsp;{:then}&nbsp;{/await}{#await _sleep(5200)}&nbsp;{:then}r{/await}{#await _sleep(5400)}&nbsp;{:then}e{/await}{#await _sleep(5600)}&nbsp;{:then}q{/await}{#await _sleep(5800)}&nbsp;{:then}u{/await}{#await _sleep(6000)}&nbsp;{:then}i{/await}{#await _sleep(6200)}&nbsp;{:then}r{/await}{#await _sleep(6400)}&nbsp;{:then}e{/await}{#await _sleep(6600)}&nbsp;{:then}m{/await}{#await _sleep(6800)}&nbsp;{:then}e{/await}{#await _sleep(7000)}&nbsp;{:then}n{/await}{#await _sleep(7200)}&nbsp;{:then}t{/await}{#await _sleep(7400)}&nbsp;{:then}s{/await}{#await _sleep(7600)}&nbsp;{:then}.{/await}{#await _sleep(7800)}&nbsp;{:then}t{/await}{#await _sleep(8000)}&nbsp;{:then}x{/await}{#await _sleep(8200)}&nbsp;{:then}t{/await}
            </code>
        </pre>
        <pre class="my-3">
            <code>
                [Option] -r: --requirement &lt;file&gt;
            </code>
        </pre>
    </div>
    <p class="my-3">
        You can also specify the version when recording the package in <span class="font-bold">requirements.txt</span>.
    </p>
    <div class="my-16">
        <table class="table-fixed border-collapse border border-slate-500 mx-auto px-auto my-5">
            <thead>
                <tr>
                    <th class="px-16 py-2 border border-slate-600">Method</th>
                    <th class="px-16 py-2 border border-slate-600">Example</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td class="px-16 py-2 border border-slate-700">Strong equality</td>
                    <td class="px-16 py-2 border border-slate-700">Django==3.0.3</td>
                </tr>
                <tr>
                    <td class="px-16 py-2 border border-slate-700">Greater or equal</td>
                    <td class="px-16 py-2 border border-slate-700">Django>=3.0.3</td>
                </tr>
                <tr>
                    <td class="px-16 py-2 border border-slate-700">Compatible version</td>
                    <td class="px-16 py-2 border border-slate-700">Django~=3.0.3</td>
                </tr>
            </tbody>
        </table>
    </div>
    <p class="my-3">
        To view the version of the external package in the current environment, 
        run the <span class="bg-slate-300 rounded-lg px-2 font-medium">pip freeze</span> command. Also, to write it to <span class="font-bold">requirements.txt</span>, use 
    </p>
    <div class="my-16">
        <pre class="my-3">
            <code>
                $ {#await _sleep(200)}&nbsp;{:then}p{/await}{#await _sleep(400)}&nbsp;{:then}i{/await}{#await _sleep(600)}&nbsp;{:then}p{/await}{#await _sleep(800)}&nbsp;{:then}&nbsp;{/await}{#await _sleep(1000)}&nbsp;{:then}f{/await}{#await _sleep(1200)}&nbsp;{:then}r{/await}{#await _sleep(1400)}&nbsp;{:then}e{/await}{#await _sleep(1600)}&nbsp;{:then}e{/await}{#await _sleep(1800)}&nbsp;{:then}z{/await}{#await _sleep(2000)}&nbsp;{:then}e{/await}{#await _sleep(2200)}&nbsp;{:then}&nbsp;{/await}{#await _sleep(2400)}&nbsp;{:then} &gt;{/await}{#await _sleep(2600)}&nbsp;{:then}&nbsp;{/await}{#await _sleep(2800)}&nbsp;{:then}r{/await}{#await _sleep(3000)}&nbsp;{:then}e{/await}{#await _sleep(3200)}&nbsp;{:then}q{/await}{#await _sleep(3400)}&nbsp;{:then}u{/await}{#await _sleep(3600)}&nbsp;{:then}i{/await}{#await _sleep(3800)}&nbsp;{:then}r{/await}{#await _sleep(4000)}&nbsp;{:then}e{/await}{#await _sleep(4200)}&nbsp;{:then}m{/await}{#await _sleep(4400)}&nbsp;{:then}e{/await}{#await _sleep(4600)}&nbsp;{:then}n{/await}{#await _sleep(4800)}&nbsp;{:then}t{/await}{#await _sleep(5000)}&nbsp;{:then}s{/await}{#await _sleep(5200)}&nbsp;{:then}.{/await}{#await _sleep(5400)}&nbsp;{:then}t{/await}{#await _sleep(5600)}&nbsp;{:then}x{/await}{#await _sleep(5800)}&nbsp;{:then}t{/await}
            </code>
        </pre>
    </div>
    <p class="my-3">
        So far we've been talking about package management in Python, 
        but I think this can be adapted to Julia in the same way: 
        Julia, like Python, has many external packages, and we'll be using these in our projects.
        
        In Julia, you can check the currently installed external packages and their versions by typing <span class="bg-slate-300 rounded-lg px-2 font-medium">] -> status</span> in the REPL and running
    </p>
    <div class="my-16">
        <pre class="my-3">
            <code>
                <span class="text-red-500">using</span> Pkg; Pkg.<span class="text-blue-500">status</span>()
            </code>
        </pre>
        <span>
            or run the Julia file with the program
        </span>
        <pre class="my-3">
            <code>
                <span class="text-red-500">using</span> Pkg; Pkg.<span class="text-blue-500">status</span>()
            </code>
        </pre>
    </div>
    <p class="my-3">
        Julia differs from Python in its notation of versions, which is represented by <span class="bg-slate-300 rounded-lg px-2 font-medium">@</span> 
        instead of <span class="bg-slate-300 rounded-lg px-2 font-medium">==</span>.
        To install a package using <span class="font-bold">requirements.txt</span> in Julia
    </p>
    <div class="my-16 text-left bg-slate-900 py-5 px-5 max-w-xl px-auto mx-auto">
        <pre>
            <code><i class="fas fa-align-left text-gray-500"></i><span class="text-white">&nbsp;requirements.txt</span>

<span class="text-white">&nbsp;1&nbsp;</span><span class="text-violet-500">CSV</span><span class="text-rose-600">@</span><span class="text-sky-500">v0.8.5</span>
<span class="text-white">&nbsp;2&nbsp;</span><span class="text-violet-500">DataFrames</span><span class="text-rose-600">@</span><span class="text-sky-500">v0.22.7</span>
<span class="text-white">&nbsp;3&nbsp;</span><span class="text-violet-500">Distributions</span><span class="text-rose-600">@</span><span class="text-sky-500">v0.24.18</span>
<span class="text-white">&nbsp;4&nbsp;</span><span class="text-violet-500">Flux</span><span class="text-rose-600">@</span><span class="text-sky-500">v0.12.8</span>
<span class="text-white">&nbsp;5&nbsp;</span><span class="text-violet-500">Genie</span><span class="text-rose-600">@</span><span class="text-sky-500">v3.0.0</span>
<span class="text-white">&nbsp;6&nbsp;</span><span class="text-violet-500">IJulia</span><span class="text-rose-600">@</span><span class="text-sky-500">v1.23.2</span>
<span class="text-white">&nbsp;7&nbsp;</span><span class="text-violet-500">Lathe</span><span class="text-rose-600">@</span><span class="text-sky-500">v0.1.6</span>
<span class="text-white">&nbsp;8&nbsp;</span><span class="text-violet-500">Plots</span><span class="text-rose-600">@</span><span class="text-sky-500">v1.23.6</span>
            </code>
        </pre>
    </div>
    <div class="my-16">
        <pre class="my-3">
            <code>
                <span class="text-red-500">{#await _sleep(200)}&nbsp;{:then}u{/await}{#await _sleep(400)}&nbsp;{:then}s{/await}{#await _sleep(600)}&nbsp;{:then}i{/await}{#await _sleep(800)}&nbsp;{:then}n{/await}{#await _sleep(1000)}&nbsp;{:then}g{/await}</span>{#await _sleep(1200)}&nbsp;{:then}&nbsp;{/await}{#await _sleep(1400)}&nbsp;{:then}P{/await}{#await _sleep(1600)}&nbsp;{:then}k{/await}{#await _sleep(1800)}&nbsp;{:then}g{/await}{#await _sleep(2000)}&nbsp;{:then};{/await}{#await _sleep(2200)}&nbsp;{:then}&nbsp;{/await}{#await _sleep(2400)}&nbsp;{:then}P{/await}{#await _sleep(2600)}&nbsp;{:then}k{/await}{#await _sleep(2800)}&nbsp;{:then}g{/await}{#await _sleep(3000)}&nbsp;{:then}.{/await}<span class="text-blue-500">{#await _sleep(3200)}&nbsp;{:then}a{/await}{#await _sleep(3400)}&nbsp;{:then}d{/await}{#await _sleep(3600)}&nbsp;{:then}d{/await}</span>{#await _sleep(3800)}&nbsp;{:then}({/await}<span class="text-blue-500">{#await _sleep(4000)}&nbsp;{:then}o{/await}{#await _sleep(4200)}&nbsp;{:then}p{/await}{#await _sleep(4400)}&nbsp;{:then}e{/await}{#await _sleep(4600)}&nbsp;{:then}n{/await}</span>{#await _sleep(4800)}&nbsp;{:then}({/await}{#await _sleep(5000)}&nbsp;{:then}f{/await}<span class="text-red-500">{#await _sleep(5200)}&nbsp;{:then}-{/await}{#await _sleep(5400)}&nbsp;{:then} &gt;{/await}</span>{#await _sleep(5600)}&nbsp;{:then}f{/await}{#await _sleep(5800)}&nbsp;{:then}.{/await}<span class="text-blue-500">{#await _sleep(6000)}&nbsp;{:then}r{/await}{#await _sleep(6200)}&nbsp;{:then}e{/await}{#await _sleep(6400)}&nbsp;{:then}a{/await}{#await _sleep(6600)}&nbsp;{:then}d{/await}{#await _sleep(6800)}&nbsp;{:then}l{/await}{#await _sleep(7000)}&nbsp;{:then}i{/await}{#await _sleep(7200)}&nbsp;{:then}n{/await}{#await _sleep(7400)}&nbsp;{:then}e{/await}{#await _sleep(7600)}&nbsp;{:then}s{/await}</span>{#await _sleep(7800)}&nbsp;{:then}({/await}{#await _sleep(8000)}&nbsp;{:then}f{/await}{#await _sleep(8200)}&nbsp;{:then}){/await}{#await _sleep(8400)}&nbsp;{:then},{/await}{#await _sleep(8600)}&nbsp;{:then}&nbsp;{/await}<span class="text-sky-500">{#await _sleep(8800)}&nbsp;{:then} &quot;{/await}{#await _sleep(9000)}&nbsp;{:then}r{/await}{#await _sleep(9200)}&nbsp;{:then}e{/await}{#await _sleep(9400)}&nbsp;{:then}q{/await}{#await _sleep(9600)}&nbsp;{:then}u{/await}{#await _sleep(9800)}&nbsp;{:then}i{/await}{#await _sleep(10000)}&nbsp;{:then}r{/await}{#await _sleep(10200)}&nbsp;{:then}e{/await}{#await _sleep(10400)}&nbsp;{:then}m{/await}{#await _sleep(10600)}&nbsp;{:then}e{/await}{#await _sleep(10800)}&nbsp;{:then}n{/await}{#await _sleep(11000)}&nbsp;{:then}t{/await}{#await _sleep(11200)}&nbsp;{:then}s{/await}{#await _sleep(11400)}&nbsp;{:then}.{/await}{#await _sleep(11600)}&nbsp;{:then}t{/await}{#await _sleep(11800)}&nbsp;{:then}x{/await}{#await _sleep(12000)}&nbsp;{:then}t{/await}{#await _sleep(12200)}&nbsp;{:then} &quot;{/await}</span>{#await _sleep(12400)}&nbsp;{:then}){/await}{#await _sleep(12600)}&nbsp;{:then}){/await}
            </code>
        </pre>
    </div>
    <p class="my-3">
        Now that you know about <span class="font-bold">requirements.txt</span>, let's adapt it to your project!
    </p>
</div>
<div class="flex items-center justify-center text-black mt-16">
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
