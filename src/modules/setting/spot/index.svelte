<script lang="ts">
    import {location, querystring} from 'svelte-spa-router'
    import active from 'svelte-spa-router/active'
</script>

<div class="bg-red-200 text-white w-1/8 h-[300px] flex items-center justify-center rounded-lg flex-col">
    Spot
    <div class="mt-10" use:active={{path: '/spot', className: 'text-black', inactiveClassName: ''}}>The current page is: {$location}</div>
    <div>The querystring is: {$querystring}</div>
</div>