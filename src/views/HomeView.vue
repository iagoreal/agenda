<script lang="ts">
import { defineComponent } from 'vue';
import {HomeService} from './home.service';
import {Schedule} from '../model/schedule.model'
import { pipe } from "rxjs";

export default defineComponent({
  name: "home",
  data(){
    return{
      datas: new Schedule()
    }
  },
  computed:{
    service(){
      return new HomeService()
    }

  },
  methods:{
    getSchedule(){
      this.service.scheduleHome.pipe().subscribe({next:(response) => this.datas = response})
    }
  },
  mounted(){
    this.getSchedule()
  }
})
</script>

<template>
  <h1>All contacts from Schedule</h1>
  <ul>
    <li v-for="contact in datas">
    name: {{  }}</li>
  </ul>

</template>
