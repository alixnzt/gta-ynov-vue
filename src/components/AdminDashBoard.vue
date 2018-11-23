<template>
    <div>
        <nav-bar></nav-bar>
        <br>
        <h1>Team director dashboard</h1>
        <br>
        <hr>
        <h2>My employees</h2>
        <b-container>
            <b-row>
                <b-card v-for="employe in employees" v-bind:key="employe.id" class="mb-2">
                    <h3 class="reason-card">{{employe.firstname}} {{employe.lastname}}</h3>
                    <p class="card-text">Phone : 0{{employe.phone}}</p>
                </b-card>
            </b-row>
        </b-container>
        <hr>
        <h2>Employees requests</h2>
        <b-container>
            <b-row>
                <b-card v-for="employeesRequest in employeesRequests" v-bind:key="employeesRequest.id" class="mb-2">
                    <h3 class="reason-card">{{employeesRequest.reason}}</h3>
                    <p class="card-text">Request type : {{employeesRequest.type}}</p>
                    <p class="date-card">Date begin : {{formatDisplayDate(employeesRequest.dateBegin)}}</p>
                    <p class="date-card">Date end : {{formatDisplayDate(employeesRequest.dateBegin)}}</p>
                    <b-row>
                        <b-button class="success" v-on:click="manageRequest(employeesRequest,employeesRequest.id,true)">Validate</b-button>
                        <b-button class="danger" v-on:click="manageRequest(employeesRequest,employeesRequest.id,false)">Cancel</b-button>
                    </b-row>
                </b-card>
            </b-row>
        </b-container>
    </div>
</template>

<script>
    import NavBar from '@/components/NavBar'
    import moment from 'moment'

    export default {
        components: {
            NavBar
        },
        data () {
            return {
                directorId: '',
                employees: [],
                employeesRequests: [],
            }
        },
        mounted() {
            this.director = JSON.parse(localStorage.getItem('user'));
            this.retrieveEmployees();
            this.retrieveEmployeRequests();
        },
        methods: {
            retrieveEmployees() {
                let urlDev = 'http://localhost:3000/retrieve-employees';
                let urlProd = '';

                this.employees = [];
                let directorId = this.director.id;
                this.$http.post(urlDev, {
                    directorId: directorId,
                })
                    .then(response => {
                        console.log(response.data);
                        response.data.profile.forEach(profile => {
                            this.employees.push(profile)
                        });
                    });
            },
            retrieveEmployeRequests() {
                let urlDev = 'http://localhost:3000/employees-requests';
                let urlProd = '';

                this.employeesRequests = [];
                let directorId = this.director.id;
                this.$http.post(urlDev, {
                    directorId: directorId,
                })
                    .then(response => {
                        response.data.request.forEach(request => {
                            this.employeesRequests.push(request)     
                        });
                    });
            },
            manageRequest(request, requestId, manage) {
                let urlDev = 'http://localhost:3000/manageRequests';
                let urlProd = '';

                this.$http.post(urlDev, {
                    requestId: requestId,
                    manage: manage,
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
    .success {
        font-weight: bold;
        color: #5be923;
    }
    .danger {
        font-weight: bold;
        color: #f13030;
    }
</style>
