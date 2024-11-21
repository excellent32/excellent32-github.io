<script lang="ts">
    import {link} from 'svelte-spa-router'
</script>
<div class="mt-10 flex gap-10">
    <a href="#/contract/btcusdt" class="p-2 bg-purple-100 underline decoration-dashed rounded-lg text-blank">contract</a>
    <a href="#/spot" class="p-2 bg-purple-100 underline decoration-dashed rounded-lg text-blank">Sport</a>
</div>

<div class="mt-10 flex gap-10">
    <a href="/contract/btcusdt" use:link class="p-2 bg-purple-100 underline decoration-dashed rounded-lg text-blank">contract</a>
    <a href="/spot" use:link class="p-2 bg-purple-100 underline decoration-dashed rounded-lg text-blank">Sport</a>
</div>