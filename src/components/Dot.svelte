<script lang="ts">
  export let title: string;
</script>
<div class="w-8 h-8 m-2 flex items-center justify-center hover:bg-neutral-800 rounded-sm" {title} role="region" on:mouseover on:mouseout on:focus on:blur>
    <div class="w-2 h-2 bg-neutral-100 rounded-full" ></div>
</div>