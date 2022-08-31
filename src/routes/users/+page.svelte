<script lang="ts">
	let pwd = '';
	let confirm_pwd = '';
	let error: string | undefined;
	function checkPwd() {
		if (confirm_pwd && pwd != confirm_pwd) {
			error = 'las claves coinciden';
			return;
		}
		error = undefined;
	}
</script>

<h2>Crear Usuario</h2>
<form action="/api/users" method="post">
	<input type="text" name="username" placeholder="nombre" />
	<input type="password" bind:value={pwd} name="password" placeholder="Clave" />
	<input
		on:keyup={checkPwd}
		bind:value={confirm_pwd}
		type="password"
		name="confirm_pwd"
		placeholder="Confirmar Clave"
	/>
	{#if error}
		<p class="error">{error}</p>
	{/if}
	<button>Crear</button>
</form>

<style>
	.error {
		color: red;
	}
</style>
