<h1 class="text-6xl text-center my-28 font-bold text-slate-900">What's requirements.txt?</h1>
<div class="text-center text-2xl px-auto mx-auto max-w-6xl">
    <p class="my-3">
        <span class="font-bold">requirements.txt</span> is a text file used in the Python programming language to share a project with other users, 
        or to restore the environment. In this file, you need to specify the external packages required by your project.
    </p>

    Image
    
    <p class="my-3">
        Record the package list in <span class="font-bold">requirements.txt</span> and run the following command to install the package.
    </p>

    <div class="my-16">
        <pre class="my-3">
            <code>
                $ pip install -r requirements.txt
            </code>
        </pre>
        <span class="">or</span>
        <pre class="my-3">
            <code>
                $ python -m pip install -r requirements.txt
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
                $ pip freeze > requirements.txt
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
                <span class="text-red-500">using</span> Pkg; Pkg.<span class="text-blue-500">status()</span>
            </code>
        </pre>
        <span>
            or run the Julia file with the program
        </span>
        <pre class="my-3">
            <code>
                <span class="text-red-500">using</span> Pkg; Pkg.<span class="text-blue-500">status()</span>
            </code>
        </pre>
    </div>
    
    <p class="my-3">
        Julia differs from Python in its notation of versions, which is represented by <span class="bg-slate-300 rounded-lg px-2 font-medium">@</span> 
        instead of <span class="bg-slate-300 rounded-lg px-2 font-medium">==</span>.
        To install a package using <span class="font-bold">requirements.txt</span> in Julia
    </p>

    <div class="my-16">
        <pre class="my-3">
            <code>
                <span class="text-red-500">using</span> Pkg; Pkg.<span class="text-blue-500">add</span>(<span class="text-blue-500">open</span>(f<span class="text-red-500">-></span>f.<span class="text-blue-500">readlines(f)</span>, <span class="text-sky-500">"requirementx.txt"</span>))
            </code>
        </pre>
    </div>
    
    <p class="my-3">
        Now that you know about <span class="font-bold">requirements.txt</span>, let's adapt it to your project!
    </p>
</div>
