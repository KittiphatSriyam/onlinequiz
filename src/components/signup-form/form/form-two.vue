<template>
  <div class="signup-group">
    <div class="input-form mt-4 mb-5 pt-5 d-flex justify-center">
      <v-form v-model="formIsValid">
        <v-row>
          <v-col cols="6">
            <v-text-field
              label="Name"
              :rules="nameRules"
              hide-details="auto"
              v-model.trim="field.name"
            ></v-text-field
          ></v-col>
          <v-col cols="6">
            <v-text-field
              label="Lastname"
              :rules="lastNameRules"
              hide-details="auto"
              v-model.trim="field.lastName"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="6">
            <v-text-field
              label="Tel"
              :rules="telRules"
              hide-details="auto"
              v-model.trim="field.tel"
            ></v-text-field
          ></v-col>
          <v-col cols="6">
            <v-text-field
              label="Email"
              :rules="emailRules"
              hide-details="auto"
              v-model.trim="field.email"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="6">
            <v-menu
              ref="menu"
              v-model="menu"
              :close-on-content-click="false"
              transition="scale-transition"
              offset-y
              min-width="290px"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-text-field
                  v-model="field.birth"
                  label="Birthday date"
                  prepend-icon="mdi-calendar"
                  readonly
                  v-bind="attrs"
                  v-on="on"
                  :rules="birthRules"
                ></v-text-field>
              </template>
              <v-date-picker
                ref="picker"
                v-model="field.birth"
                :max="new Date().toISOString().substr(0, 10)"
                min="1900-01-01"
                @change="changeBirth"
              ></v-date-picker>
            </v-menu>
          </v-col>
          <v-col cols="6">
            <v-textarea
              name="address"
              :rules="addressRules"
              v-model="field.address"
              label="address"
              hint="Fill in your address"
            ></v-textarea>
          </v-col>
        </v-row>
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
  name: 'StepTwoForm',
  props: [],
  mounted() {
    this.field = this.$store.state.signUp.field;
  },
  data: () => ({
    menu: false,
    formIsValid: false,
    field: {
      name: '',
      lastName: '',
      tel: '',
      email: '',
      address: '',
      birth: null,
    },
    nameRules: [
      value => !!value || 'Required.',
      value => (value && value.length >= 3) || 'Fill in your name',
    ],
    lastNameRules: [
      value => !!value || 'Required.',
      value => (value && value.length >= 3) || 'Fill in your lastname',
    ],
    emailRules: [
      value => !!value || 'Required.',
      value => /.+@.+/.test(value) || 'E-mail must be valid',
    ],
    telRules: [
      value => !!value || 'Required.',
      value => /\d{10}/.test(value) || 'Fill in only 10 numbers.',
    ],
    addressRules: [
      value => !!value || 'Required.',
      value => (value && value.length >= 5) || 'Fill in your address',
    ],
    birthRules: [
      value => !!value || 'Required.',
      value => /\d{4}-\d{2}-\d{2}/.test(value) || 'Fill in your birthday',
    ],
  }),
  methods: {
    nextStep() {
      this.$store.dispatch('signUp/nextStepButton', this.field);
    },
    prevStep() {
      this.$store.dispatch('signUp/prevStepButton');
    },
    changeBirth() {
      this.$refs.menu.save(this.field.birth);
    },
  },
};
</script>
<style scoped>
.v-text-field {
  width: 350px;
}
</style>
