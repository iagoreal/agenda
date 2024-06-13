<script lang="ts">
import { defineComponent } from 'vue';
import { HomeService } from './home.service';
import { ScheduleRestHome } from '../service/rest/schedule.rest'


export default defineComponent({
  data(){
    return{

    }
  }, 
  mounted(){
    ScheduleRestHome
  }
})
</script>

<template>
  <main>
    <>
  </main>
</template>
