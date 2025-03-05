<script lang="ts">
	let { data } = $props();
	let { reading_plans } = $derived(data);
</script>

<div class="flex min-h-screen justify-center">
	<fieldset class="fieldset">
		<legend class="fieldset-legend">Study Plan</legend>
		<select class="select">
			<option disabled selected>Pick a plan</option>
			{#each reading_plans as plan}
				<option>{plan.name}</option>
			{/each}
		</select>
	</fieldset>
</div>
