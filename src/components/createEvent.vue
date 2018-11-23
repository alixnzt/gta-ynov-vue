<template>
    <div>
        <b-form @submit="onSubmit" @reset="onReset" v-if="show">
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
            <b-form-group id="birthdateInputGroup"
                            label="Birthdate :"
                            label-for="birthdateInput">
                <b-form-select id="birthdateInput"
                            type="text"
                            v-model="form.birthdate">
                </b-form-select>
            </b-form-group>
            <b-form-group id="phoneInputGroup"
                            label="Phone :"
                            label-for="phoneInput">
                <b-form-select id="phoneInput"
                            type="phone"
                            v-model="form.phone">
                </b-form-select>
            </b-form-group>
            <b-form-group id="addressInputGroup"
                            label="Address :"
                            label-for="addressInput">
                <b-form-select id="addressInput"
                            type="text"
                            v-model="form.address">
                </b-form-select>
            </b-form-group>
            <b-form-group id="postalCodeInputGroup"
                            label="Postal code :"
                            label-for="postalCodeInput">
                <b-form-select id="postalCodeInput"
                            type="number"
                            v-model="form.postalCode">
                </b-form-select>
            </b-form-group>
            <b-form-group id="cityInputGroup"
                            label="City :"
                            label-for="cityInput">
                <b-form-select id="cityInput"
                            type="text"
                            v-model="form.city">
                </b-form-select>
            </b-form-group>
            <b-button type="submit" variant="primary">Edit informations</b-button>
    </b-form>
    </div>
</template>

<script>
export default {
    
}
</script>
