<script lang="ts">
	import { invalidate } from '$app/navigation';
	import { onMount } from 'svelte';

	let { data } = $props();
	let { session, supabase, user } = $derived(data);
	onMount(() => {
		const { data } = supabase.auth.onAuthStateChange((_, newSession) => {
			if (newSession?.expires_at !== session?.expires_at) {
				invalidate('supabase:auth');
			}
		});

		return () => data.subscription.unsubscribe();
	});
</script>

<div class="flex min-h-screen items-center justify-center">
	<div class="flex flex-col">
		{#if user}
			<h2 class="text-xl">Hmmm... have we met before?</h2>
			<h3 class="text-xl">
				Please <a href="/auth" class="text-xl font-bold">Login</a> or
				<a href="/auth" class="text-xl font-bold">Signup</a>
			</h3>
		{:else}
			<h2 class="text-xl">Hey, I know you!</h2>
		{/if}
	</div>
</div>
