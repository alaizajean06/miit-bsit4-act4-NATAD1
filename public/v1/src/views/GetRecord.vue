<template>
  <div>
      <Navigation/>
  </div>
  <main>
    <div class="container-bar p-3 m-3 bg-success"> <!--bg-success-->
      <h1 class="text-center text-white">GET ALL RECORDS</h1>
      <button @click="getRecord()" class="btn btn-info d-inline-block me-2 m-2">Get Records</button>
      <table class="table table-borderless mt-5">
        <thead>
            <th class="bg-dark text-white">Number </th>
            <th class="bg-dark text-white">First Name </th>
            <th class="bg-dark text-white">Last Name  </th>
            <th class="bg-dark text-white">Age </th>
            <th class="bg-dark text-white">Edit Age</th>
            <th class="bg-dark text-white">Delete</th>
        </thead>
        <tbody>
            <tr v-for="(user, i) in users" :key="i">
                <td>{{ (i+1) }}</td>
                <td>{{ user?.fname }}</td>
                <td>{{ user?.lname }}</td>
                <td>{{ user?.age }}</td>
                <td><button class="btn btn-primary btn-sm" @click="editAge(user)">Edit</button></td>
                <td>
                <button class="btn btn-danger btn-sm" @click="deleteRecords(user)">Delete</button></td>
            </tr>
        </tbody>
      </table>
    </div>

  </main>
</template>
<script lang="ts">

import axios from 'axios';
import Swal from 'sweetalert2';
import Navigation from '@/components/Navigation.vue';
import { toRaw } from 'vue';

export default {
  name: "getRecord",
  components: {Navigation},
  data() {
    return {
      users: {} as any,
      id: 0
    }
  },
  methods: {
    async getRecord() {
      await axios.get("http://127.0.0.1:8000/api/user/getAll").then(async (response) => {
        this.users = response.data;
      });
    },
    async editAge(user: any) {
      Swal.fire({
        title: "Enter new age",
        input: "text",
        inputAttributes: {
          autocapitalize: "off"
        },
        showCancelButton: true,
      }).then(async (result) => {
        if (result.isConfirmed) {
          await axios.get("http://127.0.0.1:8000/api/user/updateRecord/" + user?.dataid + "/" + result.value).then(async () => {
            this.getRecord();
          });
          }
      });
     
    },
    async deleteRecords(user: any) {
      Swal.fire({
        title: "Confirmation",
        text: "Delete selected user?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, delete it!",
      }).then(async (result) => {
        if (result.isConfirmed) {
          await axios.get("http://127.0.0.1:8000/api/user/deleteByID/" + user?.dataid).then( async () => {
            this.getRecord();
          });
         }
      });
    }
  }

}
</script>
<style scope>
.container-bar {
  border: 3px solid rgb(90, 41, 41);
}
</style>

