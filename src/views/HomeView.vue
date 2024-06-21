<script lang="ts">
import { defineComponent } from 'vue';
import view from './DetailView.vue';
import {HomeService} from './home.service';
import {Schedule} from '../model/schedule.model'
import { pipe } from "rxjs";

export default defineComponent({
  name: "home",
  data(){
    return{
      datas: [] as Schedule[]
    }
  },
  computed:{
    service(){
      return new HomeService()
    },
    
    contactId(){
        return String(this.$route.params.id)
        
      }

  },
  methods:{
    getSchedule(){
      this.service.scheduleHome.pipe().subscribe({next:(response) => this.datas = response})
      this.service.getSchedule();
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
    <li v-for="contact in datas" :key="contact.name">
    name: <routerLink to="/"+${contactId}> {{ contact.name}}</routerLink>
    </li>
  </ul>
  <RouterView/>
</template>
