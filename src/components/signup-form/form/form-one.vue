<template>
  <div class="signup-group">
    <div class="input-form mt-4 mb-5 pt-5 d-flex justify-center">
      <v-form v-model="formIsValid">
        <v-text-field
          label="Username"
          :rules="usernameRules"
          hide-details="auto"
          v-model.trim="field.username"
        ></v-text-field>
        <v-text-field
          label="Password"
          :rules="passwordRules"
          hide-details="auto"
          v-model.trim="field.password"
        ></v-text-field>
        <v-text-field
          label="Re - password"
          :rules="[
            ...rePasswordRules,
            field.password === field.repassword || 'Password does not matched',
          ]"
          hide-details="auto"
          v-model.trim="field.repassword"
        ></v-text-field>
      </v-form>
    </div>
    <div class="buttom-form d-flex justify-center">
      <v-card-actions>
        <v-btn
          outlined
          rounded
          text
          color="success"
          @click="nextStep"
          :disabled="!formIsValid"
          v-if="$store.state.signUp.step < 3"
        >
          Next
        </v-btn>
        <v-btn
          outlined
          rounded
          text
          color="error"
          @click="prevStep"
          :disabled="$store.state.signUp.step == 1"
        >
          Previous
        </v-btn>
      </v-card-actions>
    </div>
  </div>
</template>

<script>
export default {
  name: 'StepOneForm',
  props: [],
  mounted() {
    this.field = this.$store.state.signUp.field;
  },
  data: () => ({
    formIsValid: false,
    field: {
      username: '',
      password: '',
      repassword: '',
    },
    usernameRules: [
      value => !!value || 'Required.',
      value => (value && value.length >= 4) || 'Min 4 characters',
    ],
    passwordRules: [
      value => !!value || 'Required.',
      value => (value && value.length >= 8) || 'Min 8 characters',
    ],
    rePasswordRules: [
      value => !!value || 'Required.',
      value => (value && value.length >= 8) || 'Min 8 characters',
    ],
  }),
  methods: {
    nextStep() {
      this.$store.dispatch('signUp/nextStepButton', this.field);
    },
    prevStep() {
      this.$store.dispatch('signUp/prevStepButton');
    },
  },
};
</script>
<style scoped>
.v-text-field {
  width: 350px;
}
</style>
