<script lang="ts">
    import Setting from '@/modules/setting/index.svelte'
</script>

<div class="p-10">
    <div class="pointer p-1 bg-red-100 rounded-lg h-[100px] ">
        <div class="flex gap-6">
            <a href="/" class="pointer p-1 text-orange-500 bg-orange-100 rounded-lg">首页</a>
            <!-- <a href="/account" class="pointer p-1 text-orange-500 bg-orange-100 rounded-lg">Account</a> -->
            <a href="/user" class="pointer p-1 text-orange-500 bg-orange-100 rounded-lg">User</a>
        </div>
    </div>

    <Setting/>
</div>
