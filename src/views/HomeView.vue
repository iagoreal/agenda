<script lang="ts">
import { defineComponent } from 'vue';
import {HomeService} from './home.service';
import {Schedule} from '../model/schedule.model'

export default defineComponent({
  name: "home",
  data(){
    return{
      data:[] as Schedule[],
      
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
  <ul>
    <h1>All contacts from Schedule:</h1>
    <li v-for="contact in this.data" :key="contact">
      name: {{  contact.name}}
    </li>
  </ul>

  <div>
    <h1>Adicionar Novo Contato</h1>
    <form @submit.prevent="addContact">
      <div>
        <label for="name">Nome:</label>
        <input type="text" v-model="newContact.name" required>
      </div>
      <div>
        <label for="phone">Telefone:</label>
        <input type="tel" v-model="newContact.phone" required>
      </div>
      <div>
        <label for="email">Email:</label>
        <input type="email" v-model="newContact.email" required>
      </div>
      <button type="submit">Adicionar</button>
    </form>
  </div>
</template>
