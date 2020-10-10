<template>
  <v-card
    class="mx-auto pa-5"
    max-width="850"
    outlined
    style="margin-top:100px;"
  >
    <v-list-item three-line>
      <v-list-item-content>
        <v-list-item-title class="overline ">
              SIGN UP FORM
        </v-list-item-title>

      <v-row no-gutters>
        <v-col
          cols="6"
          md="4"
        >
        <ProgressBar v-bind:step="step"/>
        </v-col>
        <v-col
          cols="12"
          sm="6"
          md="8"
        >
        <SignupGroup />
        </v-col>
      </v-row>
      </v-list-item-content>
    </v-list-item>
  </v-card>
</template>

<script>
import ProgressBar from './progress-bar.vue';
import SignupGroup from './form.vue';

export default {
  name: 'SignUpForm',
  props: [],
  components: {
    ProgressBar,
    SignupGroup,
  },
  data: () => ({
    step: 1,
    usernameRules: [
      (value) => !!value || 'Required.',
      (value) => (value && value.length >= 4) || 'Min 4 characters',
    ],
    passwordRules: [
      (value) => !!value || 'Required.',
      (value) => (value && value.length >= 8) || 'Min 8 characters',
    ],
  }),
};
</script>
