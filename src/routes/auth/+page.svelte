<div class="flex min-h-screen items-center justify-center">
	<form method="POST" action="?/login" class="w-1/3 space-y-4">
		<h2 class="text-xl">Welcome!</h2>
		<div class="form-control">
			<label class="label">
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
			<label class="label">
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

		<div class="space-x-2">
			<button class="btn btn-primary">Login</button>
			<button formaction="?/signup" class="btn btn-secondary">Sign up</button>
		</div>
	</form>
</div>
