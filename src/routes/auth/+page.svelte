<script lang="ts">
	import { enhance } from '$app/forms';
	let loading = false; // Single loading state for simplicity
</script>

<div class="flex min-h-screen items-center justify-center">
	<div class="card card-border w-1/3">
		<div class="card-body">
			<h2 class="card-title">Welcome!</h2>
			<form
				method="POST"
				use:enhance={() => {
					loading = true; // Set loading state when submission starts
				}}
				class="space-y-4"
			>
				<div class="form-control">
					<label class="label" for="email">
						<span class="label-text">Email</span>
					</label>
					<input
						name="email"
						type="email"
						placeholder="promise we won't ever send you annoying emails"
						class="input input-bordered w-full"
						required
					/>
				</div>

				<div class="form-control">
					<label class="label" for="password">
						<span class="label-text">Password</span>
					</label>
					<input
						name="password"
						type="password"
						placeholder="shhh... it's a secret"
						class="input input-bordered w-full"
						required
					/>
				</div>

				<div class="card-actions justify-end">
					<button formaction="?/login" class="btn btn-primary" disabled={loading}>
						Login
						{#if loading}
							<span class="loading loading-bars loading-xs"></span>
						{/if}
					</button>
					<button formaction="?/signup" class="btn btn-secondary" disabled={loading}>
						Sign up
						{#if loading}
							<span class="loading loading-bars loading-xs"></span>
						{/if}
					</button>
				</div>
			</form>
		</div>
	</div>
</div>
