<template>
    <b-navbar toggleable="md" type="light" variant="light">
        <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
        <b-navbar-brand href="#">GTA app</b-navbar-brand>
        <b-collapse is-nav id="nav_collapse">
            <!-- Right aligned nav items -->
            <b-navbar-nav class="ml-auto">
                <b-nav-item-dropdown v-bind:text="email" right>
                <b-nav-item><router-link to="/profile">my profile</router-link></b-nav-item>
                <b-nav-item v-if="role=='Employe'"><router-link to="/dashboard">dashboard</router-link></b-nav-item>
                <b-nav-item v-if="role=='Employe'"><router-link to="/request">make a request</router-link></b-nav-item>
                <b-nav-item v-if="role=='Director'"><router-link to="/admin">dashboard</router-link></b-nav-item>
                <b-nav-item v-if="role=='Director'"><router-link to="/register">add employe</router-link></b-nav-item>
                <!-- TODO: créer un dashboard pour les RH -->
                <b-nav-item v-if="role=='HR'"><router-link to="/admin">dashboard</router-link></b-nav-item>
                <b-nav-item v-if="role=='HR'"><router-link to="/register">add employe</router-link></b-nav-item>
                </b-nav-item-dropdown>
                <b-button v-on:click="disconect">
                    Logout
                </b-button>
            </b-navbar-nav>

        </b-collapse>
    </b-navbar>
</template>

<script>
    export default {
        name: "navBar",
        data() {
            return {
                user: '',
                email: '',
                role: '',
            }
        },
        mounted() {
            this.user = JSON.parse(localStorage.getItem('user'));
            this.email = this.user.email;
            this.role = this.user.role;
        },
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
