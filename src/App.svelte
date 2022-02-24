<script lang="ts">
	import { SharedIOClient } from "../lib";
	import type { TestSchema } from "./sharedio/schema";

	let client = new SharedIOClient<TestSchema>({
		host: "localhost",
		port: 8080
	});

	let online = false;

	client.on("open", () => online = true);
	client.on("close", () => online = false);

	client.on("update", ({view}) => {
		const player = view.Player.last;

		// if (player.owned) {
		// 	player.shootPrivately();
		// } else {
		// 	player.shoot();
		// }

		// console.log("my player", view.Player.mine);

		window['testWrite'] = function() {
			if (player && player.owned) {
				player.name = "Ratinho";
				player.power = 4;
			}
		}

		window['testCall'] = function() {
			if (player && player.owned) {
				player.shoot();
				player.shootPrivately();
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