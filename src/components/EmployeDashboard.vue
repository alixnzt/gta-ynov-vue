<template>
    <div>
        <nav-bar></nav-bar>
        <br>
        <h1>My dashboard</h1>
        <br>
        <hr>
        <h2>My contract</h2>
        <b-container>
            <b-row>
                <!-- Affichage des contrats -->
            </b-row>
        </b-container>
        <hr>
        <h2>My requests</h2>
        <b-container>
            <b-row>
                <b-card v-for="userRequest in userRequests" v-bind:key="userRequest.id" class="mb-2">
                    <h3 class="reason-card">{{userRequest.reason}}</h3>
                    <p class="card-text">Request type : {{userRequest.type}}</p>
                    <p class="date-card">Date begin : {{formatDisplayDate(userRequest.dateBegin)}}</p>
                    <p class="date-card">Date end : {{formatDisplayDate(userRequest.dateBegin)}}</p>
                </b-card>
            </b-row>
        </b-container>
        <router-view></router-view>
    </div>
</template>

<script>
    import NavBar from '@/components/NavBar'
    import 'tui-calendar/dist/tui-calendar.css'
    import { Calendar } from '@toast-ui/vue-calendar'
    import moment from 'moment'

    export default {
        components: {
            NavBar,
            'calendar': Calendar,
        },
        data () {
            return {
                userId: '',
                userRequests: [],
            }
        },
        mounted() {
            this.user = JSON.parse(localStorage.getItem('user'));
            this.retrieveRequests();
        },
        methods: {
            retrieveRequests(){
                let urlDev = 'http://localhost:3000/employe-requests';
                let urlProd = 'https://gta-ynov-server.herokuapp.com/employe-requests';
                
                this.userRequests = [];
                let userId = this.user.id;
                let status = 'waiting';
                this.$http.post(urlProd, {
                    userId: userId,
                    status: status,
                })
                    .then(response => {
                        response.data.request.forEach(request => {
                            this.userRequests.push(request)
                        });
                    })
            },
            formatDisplayDate(date) {
                return moment(date).format('DD-MM-YYYY à hh:mm:ss');
            },
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
    .reason-card {
        color: #1266e6;
    }
    .date-card {
        font-weight: bold;
        color: #888888;
    }
</style>