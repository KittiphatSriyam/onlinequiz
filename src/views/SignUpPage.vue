<template>
  <div class="sign-up">
    <SignUpForm />
  </div>
</template>

<script>
import SignUpForm from '@/components/signup-form/signup-form.vue';

export default {
  name: 'SignUpPage',
  components: {
    SignUpForm,
  },
};
</script>
