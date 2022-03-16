<script>
    import { Router, Link, Route } from "svelte-routing";
	import Desktop from "./pages/Desktop.svelte";
	import Features from "./pages/Features.svelte";
	import Generate from "./pages/Generate.svelte";
	import Learn from "./pages/Learn.svelte";
</script>
  
<Router>
	<header class="text-gray-100body-font w-full h-100 border-b-2">
		<div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
			<a href="/" class="text-3xl mb-2 font-['ui-sans-serif']">reqGene</a>
			<nav class="flex lg:w-2/5 flex-wrap items-center text-base md:ml-auto"></nav>
			<div class="lg:w-2/5 inline-flex lg:justify-end ml-5 lg:ml-0 mb-1">
				<Link to="generate">
					<span class="text-slate-900 text-xl ml-4 py-2 px-3 font-bold border-zinc-900 hover:bg-slate-200 hover:rounded-3xl">
						Generate
					</span>
				</Link>
				<Link to="/">
					<span class="text-slate-900 text-xl ml-4 py-2 px-3 font-bold border-zinc-900 hover:bg-slate-200 hover:rounded-3xl">
						Desktop
					</span>
				</Link>
				<Link to="features">
					<span class="text-slate-900 text-xl ml-4 py-2 px-3 font-bold border-zinc-900 hover:bg-slate-200 hover:rounded-3xl">
						Features
					</span>
				</Link>
				<Link to="learn">
					<span class="text-slate-900 text-xl ml-4 py-2 px-3 font-bold border-zinc-900 hover:bg-slate-200 hover:rounded-3xl">
						Learn
					</span>
				</Link>
			</div>
		</div>
	</header>
    <main class="min-h-screen">
		<Route path="/">
			<Desktop />
		</Route>
		<Route path="features">
			<Features />
		</Route>
		<Route path="generate">
			<Generate />
		</Route>
		<Route path="learn">
			<Learn />
		</Route>
    </main>
	<footer class="h-20 border-t-2 w-full flex flex-row">
		<div class="basis-1/4 mt-6 ml-5">
			<span class="px-auto mx-auto text-xl font-bold border-zinc-900">
				reqGene
			</span>
		</div>
		<div class="basis-1/4 mt-7">
			<span class="px-auto mx-auto font-bold border-zinc-900"></span>
		</div>
		<div class="basis-1/4 mt-6">
			<a href="https://github.com/ogty/requirements.txt-generator" target="_blank">
				<i class="fab fa-github md:text-3xl"></i>
			</a>	
		</div>
		<div class="basis-1/4 mt-6 mr-5">
			<span class="float-right font-bold">
				&copy;2022 ogty
			</span>
		</div>
	</footer>
</Router>

<style global lang="postcss">
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
</style>
