<template>
  <div class="signup-group">
    <div class="text-right">
      <v-btn class="mx-2" fab dark color="indigo" @click="addExp">
        <v-icon dark>
          mdi-plus
        </v-icon>
      </v-btn>
      <v-btn class="mx-2" fab dark small color="pink" @click="delExp">
        <v-icon dark>
          mdi-minus
        </v-icon>
      </v-btn>
    </div>
    <div class="input-form mb-5 d-flex justify-center">
      <v-form v-model="formIsValid">
        <div v-for="i in appendForm" :key="i">
          <div class="pb-5">
            <v-text-field
              class="mb-5"
              label="Company"
              :rules="companyRules"
              hide-details="auto"
              v-model.trim="field.experience[i - 1].company"
            ></v-text-field>
            <v-textarea
              class="mt-5"
              name="responsibility"
              :rules="responsibilityRules"
              v-model="field.experience[i - 1].responsibility"
              label="Responsibility"
              hint="Fill in your Responsibility"
            ></v-textarea>
          </div>
        </div>
      </v-form>
    </div>
    <div class="buttom-form d-flex justify-center">
      <v-card-actions>
        <v-btn
          outlined
          rounded
          text
          color="success"
          @click="onSignUp"
          :disabled="!formIsValid"
          v-if="$store.state.signUp.step == 3"
        >
          SIGN UP
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
import axios from 'axios';

export default {
  name: 'StepThreeForm',
  props: [],
  mounted() {
    this.field = this.$store.state.signUp.field;
  },
  data: () => ({
    appendForm: 1,
    formIsValid: false,
    field: {
      experience: [
        {
          company: '',
          responsibility: '',
        },
      ],
    },
    companyRules: [
      value => !!value || 'Required.',
      value => (value && value.length >= 3) || 'Fill in company',
    ],
    responsibilityRules: [
      value => !!value || 'Required.',
      value => (value && value.length >= 3) || 'Fill in your responsibility',
    ],
  }),
  methods: {
    onSignUp() {
      axios.get('http://localhost:8000/').then(data => {
        console.log('data->>', data);
      });
    },
    prevStep() {
      this.$store.dispatch('signUp/prevStepButton');
    },
    changeBirth() {
      this.$refs.menu.save(this.field.birth);
    },
    addExp() {
      this.field.experience = [
        ...this.field.experience,
        {
          company: '',
          responsibility: '',
        },
      ];
      this.appendForm++;
    },
    delExp() {
      if (this.appendForm > 1) {
        this.field.experience.pop();
        this.appendForm--;
      }
    },
  },
};
</script>
<style scoped>
.v-text-field {
  width: 350px;
}
</style>
