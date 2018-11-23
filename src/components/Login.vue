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
console.log('test')
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
                        console.log(response.data.user)
                        let role = response.data.user.role
                        localStorage.setItem('user',JSON.stringify(response.data.user))
                        localStorage.setItem('jwt',response.data.token)

                        if (localStorage.getItem('jwt') != null){
                            this.$emit('loggedIn')
                            if(this.$route.params.nextUrl != null){
                                this.$router.push(this.$route.params.nextUrl)
                            }
                            else {
                                switch (role) {
                                            case "Director":
                                                console.log('Director')
                                                this.$router.push('admin')
                                                break
                                            case "HR":
                                                console.log('HR')
                                                this.$router.push('admin')
                                                break
                                            case "Employe":
                                                console.log("Employe")
                                                this.$router.push('dashboard')
                                                break
                                            default:
                                                break
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