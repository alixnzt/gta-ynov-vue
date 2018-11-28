<template>
    <div>
        <nav-bar></nav-bar>
        <br>
        <h1>Register an employe</h1>
        <br>
        <b-form @submit="handleSubmit">
            <b-form-group id="nameInputGrp"
                            label="Name : "
                            label-for="name">
                <b-form-input id="nameInput"
                            type="text"
                            v-model="name"
                            required
                            placeholder="Enter name">
                </b-form-input>
            </b-form-group>
            <b-form-group id="EmailInputGrp"
                            label="Email address : "
                            label-for="email">
                <b-form-input id="emailInput"
                            type="email"
                            v-model="email"
                            required
                            placeholder="Enter email">
                </b-form-input>
            </b-form-group>
            <b-form-group id="PasswordInputGrp"
                            label="Password : "
                            label-for="password">
                <b-form-input id="passwordInput"
                            type="password"
                            v-model="password"
                            required
                            placeholder="Enter password">
                </b-form-input>
            </b-form-group>
            <b-form-group id="PasswordConfirmationInputGrp"
                            label="PasswordConfirmation : "
                            label-for="passwordConfirmation">
                <b-form-input id="passwordConfirmationInput"
                            type="password"
                            v-model="password_confirmation"
                            required
                            placeholder="Enter password confirmation">
                </b-form-input>
            </b-form-group>
            <b-form-group id="roleInputGrp"
                        label="Role : "
                        label-for="roleInput">
                <b-form-select id="roleInput"
                            :options="roles"
                            required
                            v-model="role">
                </b-form-select>
            </b-form-group>
            <b-button type="submit" variant="primary">Submit</b-button>
        </b-form>
    </div>
</template>

<script>
    import NavBar from '@/components/NavBar'

    export default {
        props : ["nextUrl"],
        components: {
            NavBar,
        },
        data(){
            return {
                name : "",
                email : "",
                password : "",
                password_confirmation : "",
                role: null,
                roles: [
                    { 
                        text: 'Select One', 
                        value: null 
                    },
                        'Employe', 'Director', 'HR'
                ],
            }
        },
        methods : {
            handleSubmit(e) {
                let urlDev = 'http://localhost:3000/register';
                let urlProd = 'https://gta-ynov-server.herokuapp.com/register';

                e.preventDefault()
                if (this.password === this.password_confirmation && this.password.length > 0)
                {
                    this.$http.post(urlProd, {
                        name: this.name,
                        email: this.email,
                        password: this.password,
                        role: this.role,
                    })
                    .then(response => {
                        localStorage.setItem('user',JSON.stringify(response.data.user))
                        localStorage.setItem('jwt',response.data.token)

                        if (localStorage.getItem('jwt') != null){
                            this.$emit('loggedIn')
                            if(this.$route.params.nextUrl != null){
                                this.$router.push(this.$route.params.nextUrl)
                            }
                            else{
                                this.$router.push('/')
                            }
                        }
                    })
                    .catch(error => {
                        console.error(error);
                    });
                } else {
                    this.password = ""
                    this.passwordConfirm = ""

                    return alert("Passwords do not match")
                }
            }
        }
    }
</script>