<template>
  <div class="sign-in">
    <SignInForm />
  </div>
</template>

<script>
import SignInForm from '@/components/signin-form/signin-form.vue';

export default {
  name: 'SignInPage',
  components: {
    SignInForm,
  },
};
</script>
