<template>
  <v-card
    class="mx-auto pt-5"
    max-width="60%"
    outlined
    style="margin-top:100px; padding-bottom:150px;"
  >
    <v-list-item three-line>
      <v-list-item-content>
        <v-list-item-title class="overline" style="margin-bottom:150px;">
          SIGN UP FORM
        </v-list-item-title>
        <v-row no-gutters>
          <v-col cols="12" md="4">
            <ProgressBar />
          </v-col>
          <v-col cols="12" offset-md="1" md="7">
            <StepOneForm v-if="$store.state.signUp.step == 1" />
            <StepTwoForm v-if="$store.state.signUp.step == 2" />
            <StepThreeForm v-if="$store.state.signUp.step == 3" />
          </v-col>
        </v-row>
      </v-list-item-content>
    </v-list-item>
  </v-card>
</template>

<script>
import ProgressBar from './progress-bar.vue';
import StepOneForm from './form/form-one.vue';
import StepTwoForm from './form/form-two.vue';
import StepThreeForm from './form/form-three.vue';

export default {
  name: 'SignUpForm',
  props: [],
  components: {
    ProgressBar,
    StepOneForm,
    StepTwoForm,
    StepThreeForm,
  },
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
