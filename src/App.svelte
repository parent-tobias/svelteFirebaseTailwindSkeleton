<script lang="ts">
	import router from "page";
	import About from "./routes/About.svelte";
	import Auth from "./routes/Auth.svelte";        
	import Chat from "./routes/Chat.svelte";
	import Index from "./routes/Index.svelte";
	import Main from './routes/Main.svelte';

	import NotFound from "./routes/NotFound.svelte";
	import { queryString } from "./services/util"

	import { darkMode } from './stores/store.js';

	let page;
	let params = {};
	let qs = {};
	router("/", () => page = Index)
	router("/about", () => page = About)
	router("/404/:msg", (ctx: {params: {}, querystring: string}, next) => {
			params = ctx.params;
			next();
	}, () => page = NotFound)
	router("/auth", (ctx, next) => {
			qs = queryString(ctx.querystring)
			next();
	}, () => page = Auth)
	router("/login", () => router.redirect("/auth"))
	router("/register", () => router.redirect("/auth"))
	router("/chat", () => page = Chat)
	router("/main", ()=>page = Main)
	router("/*", () => page = NotFound)

	router.start();

</script>

<main class={$darkMode ? "dark" : "light"}>
  <svelte:component this={page} {params} {qs} />
</main>

<style global>
@import 'tailwindcss/base';
@import 'tailwindcss/components';

@import 'tailwindcss/utilities';

</style>