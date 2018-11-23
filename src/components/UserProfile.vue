<template>
    <div>
        <nav-bar></nav-bar>
        <br>
        <h1>My profile</h1>
        <br>
        <b-form>
            <b-form-group id="firstnameInputGroup"
                            label="Firstname :"
                            label-for="firstnameInput">
                <b-form-input id="firstnameInput"
                            type="text"
                            v-model="form.firstname"
                            placeholder="firstname">
                </b-form-input>
            </b-form-group>
            <b-form-group id="lastnameInputGroup"
                            label="Lastname :"
                            label-for="lastnameInput">
                <b-form-input id="lastnameInput"
                            type="text"
                            v-model="form.lastname"
                            placeholder="lastname">
                </b-form-input>
            </b-form-group>
            <b-form-group id="emailInputGroup"
                            label="Email :"
                            label-for="emailInput">
                <b-form-input id="emailInput"
                            type="text"
                            v-model="form.email"
                            placeholder="email">
                </b-form-input>
            </b-form-group>
            <b-form-group id="birthdateInputGroup"
                            label="Birthdate :"
                            label-for="birthdateInput">
                <b-form-input id="birthdateInput"
                            type="text"
                            v-model="form.birthdate"
                            placeholder="birthdate">
                            
                </b-form-input>
            </b-form-group>
            <b-form-group id="phoneInputGroup"
                            label="Phone :"
                            label-for="phoneInput">
                <b-form-input id="phoneInput"
                            type="text"
                            v-model="form.phone"
                            placeholder="phone">
                </b-form-input>
            </b-form-group>
            <b-form-group id="addressInputGroup"
                            label="Address :"
                            label-for="addressInput">
                <b-form-input id="addressInput"
                            type="text"
                            v-model="form.address"
                            placeholder="address">
                </b-form-input>
            </b-form-group>
            <b-form-group id="postalCodeInputGroup"
                            label="Postal code :"
                            label-for="postalCodeInput">
                <b-form-input id="postalCodeInput"
                            type="text"
                            v-model="form.postalCode"
                            placeholder="postal code">
                </b-form-input>
            </b-form-group>
            <b-form-group id="cityInputGroup"
                            label="City :"
                            label-for="cityInput">
                <b-form-input id="cityInput"
                            type="text"
                            v-model="form.city"
                            placeholder="city">
                </b-form-input>
            </b-form-group>
            <!-- //TODO: edit method -->
            <b-button type="submit" variant="primary">Edit informations</b-button>
    </b-form>
    </div>
</template>

<script>
    import NavBar from '@/components/NavBar'

    export default {
        name : "UserProfile",
        components: {
            NavBar,
        },
        data() {
            return {
                userProfile:'',
                userId: '',
                form: {
                    firstname: '',
                    lastname: '',
                    email: '',
                    birthdate: '',
                    phone: '',
                    address: '',
                    postalCode: '',
                    city: ''
                }
            }
        },
        mounted() {
            let user = JSON.parse(localStorage.getItem('user'));
            this.retrieveProfile();
        },
        methods: {
            retrieveProfile() {
                let urlDev = 'http://localhost:3000/profile';
                let urlProd = '';

                let userId = this.user.id;
                this.form.email = user.email;
                this.$http.post(urlDev, {
                    userId: userId,
                })
                    .then(response => {
                        localStorage.setItem('profile', JSON.stringify(response.data.userProfile));
                        this.form.firstname = response.data.userProfile.firstname;
                        this.form.lastname = response.data.userProfile.lastname;
                        this.form.birthdate = response.data.userProfile.birthdate;
                        this.form.phone = response.data.userProfile.phone;
                        this.form.address = response.data.userProfile.address;
                        this.form.postalCode = response.data.userProfile.postalCode;
                        this.form.city = response.data.userProfile.city;
                    })
            },
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>