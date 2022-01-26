<script>
    const config = {
        python: [["import", "from"], ["time", "datetime", "os", "sys", "unittest"]], 
        julia: [["import", "using"], ["Dates", "Base", "Pkg"]]
    }
    
    function module_extractor(source, language) {
        let splited_source = source.split("\n")
        splited_source = splited_source.filter(item => item.match(" "));

        let module_prefix = [""];
        let embedded_module = [""];
        if (language == "python") {
            module_prefix = config.python[0]
            embedded_module = config.python[1]
        } else if (language == "julia") {
            module_prefix = config.julia[0]
            embedded_module = config.julia[1]
        }

        let module_lines = []
        for (let i = 0; i < splited_source.length; i++) {
            if (splited_source[i].startsWith("from") || splited_source[i].startsWith("import")) {
                module_lines.push(splited_source[i])
            }
        }

        let result = module_lines.map(line => line.split(" ")[1]);

        let complete = []
        for (let i = 0; i < result.length; i++) {
            let tmp = result[i].split(".")
            if (tmp[0] == "") {
                complete.push(tmp[1])
            } else {
                complete.push(tmp[0])
            }
        }

        let del_modules = [""];
        for (let i = 0; i < complete.length; i++) {
            for (let j = 0; j < embedded_module.length; j++) {
                let tmp = embedded_module[j].indexOf(complete[i])
                if (tmp >= 0) {
                    del_modules.push(complete[i])
                }
            }
        }
        complete = complete.filter(i => del_modules.indexOf(i) == -1)
        return complete
    }
    
    let files;
	$: if (files) {
		for (const file of files) {
            extractModules(file)
		}
	}
    function reset() {
        jQuery("#select_modules").empty()
        jQuery("#confirm").empty()
        files = [];
    }
    function confirmed() {
        const tmp = document.getElementsByName("module")
        let result = []

        for (let i = 0; i < tmp.length; i++) {
            if (tmp[i].checked) {
                result.push(tmp[i].value)
            }
        }
        jQuery("#download").addClass(" border-t-2 text-slate-900")
        jQuery("#download").append("<a download='requirements.txt' href='data:," + result.join("\n") + "'><span class='text-slate-900 md:text-7xl'><i class='fas fa-file-download'></i></span></a>")
    }
    function extractModules(f) {
        let reader = new FileReader();
        reader.onload = function() {
            return function(e){
                let result = module_extractor(e.target.result, "python")
                for (let i = 0; i < result.length; i++) {
                    jQuery("#select_modules").append("<label for='module" + String(i) + "'>" + "<input type='checkbox' value='" + result[i] + "' name='module' id='module" + String(i) + "' checked><span class='ml-2 font-bold'>" + result[i] + "</span></label>")
                }
                jQuery("#confirm").append("<label for='ok' class='text-white cursor-pointer py-2 px-3 bg-slate-900 font-bold float-right rounded-md'>OK</label>")
            }
        }(f)
        reader.readAsText(f);
    }
</script>

<div id="message_box">&nbsp;</div>
<div class="px-48 h-screen">
    <div class="flex mx-auto px-auto">
        <div class="w-1/2 p-10">
            <div class="">
                <span class="font-bold text-xl">Languages</span>
                <div class="w-full flex my-2">
                    <label class="mr-3" for=""><input class="mr-1" type="radio" name="language" value="python" checked>Python</label>
                    <label class="mr-3" for=""><input class="mr-1" type="radio" name="language" value="pythonipynb">Python-Ipynb</label>
                    <label class="mr-3" for=""><input class="mr-1" type="radio" name="language" value="julia">Julia</label>
                    <label class="mr-3" for=""><input class="mr-1" type="radio" name="language" value="juliaipynb">Julia-Ipynb</label>
                    <label class="mr-3" for=""><input class="mr-1" type="radio" name="language" value="go">Go</label>
                </div>
            </div>
            <div class="mt-8">
                <span class="font-bold text-xl mr-1">Selected</span>
                <span class="text-slate-900 hover:cursor-pointer" on:click={reset}><i class="fas fa-redo"></i></span>
                <div class="border-2 border-slate-900 text-center block rounded-md my-2">
                    {#if files}
                        {#each Array.from(files) as file}
                            <div>
                                <span>{file.name}</span>
                            </div>
                        {/each}
                    {:else}
                        <div>
                            <span>No Selected</span>
                        </div>
                    {/if}
                </div>
            </div>
            <div class="mt-8" id="select_modules">
                
            </div>
            <div class="mt-8" id="confirm">
                <button on:click={confirmed} id="ok" class='hidden hover:cursor-pointer'></button>
            </div>
        </div>
        <div class="w-1/2 border-l-2 border-dotted border-slate-900 p-10 mx-auto px-auto">
            <div class="p-10 border-2 border-dotted border-slate-900 text-center rounded-xl block">
                <div class="mt-24">
                    <span class="md:text-8xl text-slate-900"><i class="fas fa-file-upload"></i></span>
                </div>
                <div class="mt-3">
                    <span class="font-bold text-slate-900 text-2xl">Drag & Drop to Upload File</span>
                </div>
                <div>
                    <span class="text-slate-900 text-xl">OR</span>
                </div>
                <div class="mt-3 mb-24 hover:cursor-pointer">
                    <span class="hidden">
                        <input id="xxx" type="file" accept=".py,.julia,.go,.ipynb" bind:files multiple>
                    </span>
                    <label for="xxx" class="font-bold cursor-pointer text-gray-900 border-2 border-slate-900 bg-gray-100 rounded-md px-3 py-1">Select File</label>
                </div>
            </div>
        </div>
    </div>
    <div class="mx-auto px-auto text-center mt-16" id="download">

    </div>
</div>
