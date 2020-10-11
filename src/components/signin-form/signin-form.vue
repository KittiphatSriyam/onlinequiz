<template>
  <v-card class="mx-auto pa-5" max-width="450" outlined style="margin-top:200px;">
    <v-list-item three-line>
      <v-list-item-content>
        <v-list-item-title class="overline ">
          SIGN IN FORM
        </v-list-item-title>
        <div class="input-form mt-4 mb-5">
          <v-text-field label="Username" :rules="usernameRules" hide-details="auto"></v-text-field>
          <v-text-field label="Password" :rules="passwordRules" hide-details="auto"></v-text-field>
        </div>
        <v-list-item-subtitle
          >Don't have an account?
          <router-link to="/signup">Sign up</router-link>
        </v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
    <v-card-actions>
      <v-btn outlined rounded text block>
        SIGN IN
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: 'SignInForm',
  props: [],
  data: () => ({
    usernameRules: [
      value => !!value || 'Required.',
      value => (value && value.length >= 4) || 'Min 4 characters',
    ],
    passwordRules: [
      value => !!value || 'Required.',
      value => (value && value.length >= 8) || 'Min 8 characters',
    ],
  }),
};
</script>
