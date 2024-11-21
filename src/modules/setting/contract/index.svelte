<script lang="ts">
    import {location, querystring} from 'svelte-spa-router'
</script>
<div class="bg-gray-200 text-orange-500 w-1/8 h-[300px] flex items-center justify-center rounded-lg flex-col">
    Contract
    
    <div class="mt-10">The current page is: {$location}</div>
    <div>The querystring is: {$querystring}</div>
</div>