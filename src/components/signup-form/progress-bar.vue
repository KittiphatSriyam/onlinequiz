<template>
    <v-card-text class="mt-5">
      <div class="font-weight-bold ml-8 mb-2">
        Today {{step}}
      </div>

      <v-timeline
        align-top
        dense
      >
        <v-timeline-item
          v-for="(progress, index) in progresses"
          :key="index"
          :color="progress.color"
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
  props: ['step'],
  data: () => ({
    progresses: [
      {
        state: 'Account',
        message: 'ตั้งค่าบัญชี',
        color: 'deep-purple lighten-1',
      },
      {
        state: 'Information',
        message: 'ข้อมูลส่วนตัว',
        color: 'grey',
      },
      {
        state: 'Experience',
        message: 'ประวัติการทำงาน',
        color: 'grey',
      },
    ],
  }),
};
</script>

<style>

</style>
