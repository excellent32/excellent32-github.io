<script lang="ts">
    import Router from 'svelte-spa-router'
    import Content from './content.svelte'
    import Contract from './contract/index.svelte'
    import Spot from './spot/index.svelte'
    const routes = {
    // Exact path
    '/': Content,

    // Using named parameters, with last being optional
    '/contract/:last?': Contract,

    // Wildcard parameter
    '/spot/': Spot,

}
</script>
<div class="mt-5">
    <Router {routes}/>
</div>

