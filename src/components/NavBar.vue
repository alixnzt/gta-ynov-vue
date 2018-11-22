<template>
    <b-navbar toggleable="md" type="light" variant="light">
        <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
        <b-navbar-brand href="#">GTA app</b-navbar-brand>
        <b-collapse is-nav id="nav_collapse">
            <!-- Right aligned nav items -->
            <b-navbar-nav class="ml-auto">
                <b-nav-item><router-link to="/dashboard">dashboard</router-link></b-nav-item>
                <b-nav-item><router-link to="/register">add user</router-link></b-nav-item>
                <b-button v-on:click="disconect" :variant="danger">
                    Logout
                </b-button>
            </b-navbar-nav>

        </b-collapse>
    </b-navbar>
</template>

<script>
    export default {
        name: "navBar",
        methods: {
            disconect() {
                localStorage.removeItem('jwt');
                this.$router.push('/');
            }
        }
    }
</script>

<style scoped>

</style>
