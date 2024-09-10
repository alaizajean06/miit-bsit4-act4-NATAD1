<template> 
    <nav>
        <ul>
            <li>
                <router-link to="./">Insert Record </router-link>
            </li>
            <li>
                <router-link to="./getRecord">Get Record </router-link>
            </li>
        </ul>
    </nav>
</template>

<script lang="ts">

export default {
    name: "Navigation",

}
</script>

<style scoped>
    ul{
        list-style-type: none;
    }
    
    ul li{
        padding: 20px, 30px;
        margin: 10px;
        display: inline-block;
    }
</style>