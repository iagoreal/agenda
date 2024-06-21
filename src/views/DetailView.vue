<template>
        <div>
            <h1>{{ schedule?.name }}</h1>
            <article>{{ schedule?.phone }}</article>
            <article > {{ schedule?.email }}</article>
        </div>
     
</template>

<script lang="ts">
import {Schedule} from '../model/schedule.model'
import ContactService from "./detail.service"

  export default {
    data(){
      return {
        schedule: new Schedule()
      }
    },
    
    computed: {
      contactId(){
        return String(this.$route.params.id)
        
      },
      service(){
        return new ContactService()
      }
    },

    methods:{
      async fetchData(){
        this.service.contact.pipe().subscribe({next: (response) => this.schedule = response})
        this.service.getContactById(this.contactId)

      }
    },
    created(){
     this.fetchData()
}
  }

</script>
<style></style>
