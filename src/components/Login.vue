<template>
    <div>
        <h4>Login</h4>
        <b-form @submit="handleSubmit">
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
        <b-button type="submit" variant="primary">Submit</b-button>
        </b-form>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                email : "",
                password : ""
            }
        },
        methods : {
            handleSubmit(e){
                e.preventDefault()
                if (this.password.length > 0) {
                    this.$http.post('https://gta-ynov-server.herokuapp.com/login', {
                        email: this.email,
                        password: this.password
                    })
                    .then(response => {
                        let role = response.data.user.role
                        localStorage.setItem('user',JSON.stringify(response.data.user))
                        localStorage.setItem('jwt',response.data.token)

                        if (localStorage.getItem('jwt') != null){
                            this.$emit('loggedIn')
                            if(this.$route.params.nextUrl != null){
                                this.$router.push(this.$route.params.nextUrl)
                            }
                            else {
                                if(role === 'Director' || 'HR'){
                                    this.$router.push('admin')
                                }
                                else if(role === 'Employe'){
                                    this.$router.push('dashboard')
                                }
                            }
                        }
                    })
                    .catch(function (error) {
                        console.error(error.response);
                    });
                }
            }
        }
    }
</script>