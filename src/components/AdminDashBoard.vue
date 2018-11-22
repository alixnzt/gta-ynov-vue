<template>
    <div>
        <nav-bar></nav-bar>
        <h1>Administrator</h1>
        This your administrator dashboard
    </div>
</template>

<script>
    import NavBar from '@/components/NavBar'
    export default {
        components: {
            NavBar
        },
        data () {
            return {
        
            }
        }
    }
</script>
<style scoped>
    h1, h2 {
        font-weight: normal;
    }
    ul {
        list-style-type: none;
        padding: 0;
    }
    li {
        display: inline-block;
        margin: 0 10px;
    }
    a {
        color: #42b983;
    }
</style>
