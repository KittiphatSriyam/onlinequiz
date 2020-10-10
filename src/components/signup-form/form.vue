<template>
  <div class="signup-group">
    <div class="input-form mt-4 mb-5 pt-5">
        <v-text-field label="Username"
        :rules="usernameRules"
        hide-details="auto"
      ></v-text-field>
        <v-text-field label="Password"
        :rules="passwordRules"
        hide-details="auto"
      ></v-text-field>
        <v-text-field label="Re - password"
        :rules="rePasswordRules"
        hide-details="auto"
      ></v-text-field>
    </div>
    <v-card-actions>
      <v-btn
        outlined
        rounded
        text
        block
         color="success"
         @click="nextStep"
      >
        ถัดไป
      </v-btn>
    </v-card-actions>
  </div>
</template>

<script>
export default {
  name: 'SignupGroup',
  props: [],
  data: () => ({
    usernameRules: [
      (value) => !!value || 'Required.',
      (value) => (value && value.length >= 4) || 'Min 4 characters',
    ],
    passwordRules: [
      (value) => !!value || 'Required.',
      (value) => (value && value.length >= 8) || 'Min 8 characters',
    ],
    rePasswordRules: [
      (value) => !!value || 'Required.',
      (value) => (value && value.length >= 8) || 'Min 8 characters',
    ],
  }),
  methods: {
    nextStep() {
      console.log('nextStep->>', this.usernameRules);
    },
  },
};
</script>
<style scoped>
.v-text-field{
      width: 250px;
      margin: 0px 25%;
}
</style>
