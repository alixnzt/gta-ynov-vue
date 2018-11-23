<template>
    <div>
        <nav-bar></nav-bar>
        <br>
        <h1>Make a request</h1>
        <br>
        <b-form @submit="handleSubmit">
            <b-form-group id="typeInputGroup"
                            label="Request type :"
                            label-for="typeInput">
                <b-form-select id="typeInput"
                            :options="form.types"
                            required
                            v-model="form.type">
                </b-form-select>
            </b-form-group>
            <b-form-group id="reasonInputGroup"
                            label="Reason :"
                            label-for="reasonInput">
                <b-form-input id="reasonInput"
                            type="text"
                            v-model="form.reason"
                            placeholder="reason">
                </b-form-input>
            </b-form-group>
            <b-form-group style="position: relative"
                            id="dateBeginInputGrp"
                            label="Date begin : "
                            label-for="dateBegin">
                <date-picker v-model="form.dateBegin" :config="form.dateBegin.options"></date-picker>
            </b-form-group>
            <b-form-group style="position: relative"
                            id="dateEndInputGrp"
                            label="Date end : "
                            label-for="dateEnd">
                <date-picker v-model="form.dateEnd" :config="form.dateEnd.options"></date-picker>
            </b-form-group>
            <b-button type="submit" variant="primary">Make a request</b-button>
        </b-form>
    </div>
</template>

<script>
import NavBar from '@/components/NavBar'
import datePicker from 'vue-bootstrap-datetimepicker';
import 'bootstrap/dist/css/bootstrap.css';
import 'pc-bootstrap4-datetimepicker/build/css/bootstrap-datetimepicker.css';

export default {
    name : "UserRequest",
    components: {
            NavBar, datePicker
    },
    data(){
        return {
            form: {
                types: [
                    { 
                        text: 'select a type', 
                        value: null 
                    },
                        'Leave', 'Work recovery', 'Schedule planning'
                ],
                type: null,
                reason: '',
                dateBegin: new Date(),
                    options: {
                    format: 'DD/MM/YYYY h:mm',
                    useCurrent: false,
                    showClear: true,
                    showClose: true,
                },
                dateEnd: new Date(),
                    options: {
                    format: 'DD/MM/YYYY h:mm',
                    useCurrent: false,
                    showClear: true,
                    showClose: true,
                }  
            },
        }
    },
    mounted() {
            this.user = JSON.parse(localStorage.getItem('user'))
        },
    methods : {
        handleSubmit(e){
            let urlDev = 'http://localhost:3000/create-request';
            let urlProd = '';
            
            e.preventDefault()
            this.$http.post(urlDev, {
                dateBegin: this.form.dateBegin,
                dateEnd: this.form.dateEnd,
                reason: this.form.reason,
                type: this.form.type,
                userId: this.user.id,
            })
                .then(response => {
                    console.log(response);
                })
        }
    } 
}
</script>
