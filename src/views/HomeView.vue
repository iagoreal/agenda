<script lang="ts">
import { defineComponent } from 'vue';
import {HomeService} from './home.service';
import {Schedule} from '../model/schedule.model'

export default defineComponent({
  name: "home",
  data(){
    return{
      data: new Schedule()
    }
  },
  computed:{
    service(){
      return new HomeService()
    }

  },
  methods:{
    getSchedule(){
      this.service.getSchedule().then((response:Schedule)=>this.data=response)
    }
  },
  mounted(){
    this.getSchedule()
  }
})
</script>

<template>

</template>
