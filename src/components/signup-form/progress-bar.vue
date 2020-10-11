<template>
  <v-card-text class="mt-5">
    <div class="font-weight-bold ml-8 mb-2">Today</div>
    <v-timeline align-top dense>
      <v-timeline-item
        v-for="(progress, index) in progresses"
        :key="index"
        :color="$store.state.signUp.step - 1 == index ? 'deep-purple lighten-1' : 'grey'"
        small
      >
        <div>
          <div class="font-weight-normal">
            <strong>{{ progress.state }}</strong>
          </div>
          <div>{{ progress.message }}</div>
        </div>
      </v-timeline-item>
    </v-timeline>
  </v-card-text>
</template>

<script>
export default {
  name: 'ProgressBar',
  data: () => ({
    progresses: [
      {
        state: 'Account',
        message: 'ตั้งค่าบัญชี',
      },
      {
        state: 'Information',
        message: 'ข้อมูลส่วนตัว',
      },
      {
        state: 'Experience',
        message: 'ประวัติการทำงาน',
      },
    ],
  }),
};
</script>

<style></style>
