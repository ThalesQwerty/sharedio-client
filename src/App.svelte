<script lang="ts">
	let connected:boolean = false;

	let ws:WebSocket;

	let token:string|null = null;

	function connect() {
		ws = new WebSocket("ws://localhost:8080");

		ws.onopen = () => {
			console.log("Connection open");
			connected = true;

			ws.send(JSON.stringify({
				action: "auth",
				token
			}));
		}

		ws.onclose = () => {
			console.log("Connection lost");
			connected = false;
		}

		ws.onmessage = ({ data }) => {
			token = JSON.parse(data).token || null;
		}
	}

	function disconnect() {
		ws.close();
	}
</script>

<main>
	<h1>SharedIO Manual Test</h1>
	<p>Current status: {connected ? "Connected" : "Disconnected"}</p>
	{#if !connected}
		<button on:click={connect}>Connect</button>
	{:else}
		<button on:click={disconnect}>Disconnect</button>
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