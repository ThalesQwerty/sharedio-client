<script lang="ts">
	import { SharedIOClient } from "../lib";
	import type { Entities } from "./sharedio/accessorSchema";

	let client = new SharedIOClient<Entities>({
		host: "localhost",
		port: 8080
	});

	let online = false;

	client.on("open", () => online = true);
	client.on("close", () => online = false);

	client.on("update", ({view}) => {
		window['testWrite'] = function() {
			if (view.GetSetTest.last && view.GetSetTest.last.owned) {
				view.GetSetTest.last.watched = Math.random();
			}
		}
	});

	window['client'] = client;
</script>

<main>
	<h1>SharedIO Manual Test</h1>
	<p>Current status: {online ? "Connected" : "Disconnected"}</p>
	{#if !online}
		<button on:click={() => client.open()}>Connect</button>
	{:else}
		<button on:click={() => client.close()}>Disconnect</button>
	{/if}
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>