<script>
    import { Router, Link, Route } from "svelte-routing";
	import Desktop from "./pages/Desktop.svelte";
	import Features from "./pages/Features.svelte";
	import Generate from "./pages/Generate.svelte";
</script>
  
<Router>
	<header class="text-gray-100body-font w-full h-100 border-b-2">
		<div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
			<a href="/" class="text-4xl mb-2 font-['ui-sans-serif']">reqGene</a>
			<nav class="flex lg:w-2/5 flex-wrap items-center text-base md:ml-auto"></nav>
			<div class="lg:w-2/5 inline-flex lg:justify-end ml-5 lg:ml-0">
				<a href="/" class="text-xl ml-4 py-2 px-3 font-bold border-zinc-900 hover:bg-slate-200 hover:rounded-3xl" style="margin-top:5px;">
					<span class="text-slate-900">
						<Link to="generate">Generate</Link>
					</span>
				</a>
				<a href="/" class="text-xl ml-4 py-2 px-3 font-bold border-zinc-900 hover:bg-slate-200 hover:rounded-3xl" style="margin-top:5px;">
					<span class="text-slate-900">
						<Link to="desktop">Desktop</Link>
					</span>
				</a>
				<a href="/" class="text-xl ml-4 py-2 px-3 font-bold border-zinc-900 hover:bg-slate-200 hover:rounded-3xl" style="margin-top:5px;">
					<span class="text-slate-900 hover:rounded-full ">
						<Link to="features">Features</Link>
					</span>
				</a>
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
    </main>
	<footer class="h-100 border-t-2">
		requirements.txt Generator

		We are TECH.C. 2022
		<a href="https://github.com/ogty/requirements.txt-generator" target="_blank">
			<i class="fab fa-github"></i>
			<span class="name">ogty</span>
		</a>
		&copy;2022 ogty
	</footer>
</Router>

<style global lang="postcss">
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
</style>
