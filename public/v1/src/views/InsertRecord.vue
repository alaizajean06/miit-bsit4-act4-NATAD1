<template>
  <div>
      <Navigation/>
  </div>
<main class="p-5"> <!--bg-warning-->
  <div class="card">
    <div class="card-header bg-warning">
      <h1 class="text-center">Insert Record</h1>
    </div>

    <div class="card-body">
      <table class="table table-borderless">
        <tbody>
          <tr>
            <th>First Name: </th>
            <th><input class="form-control" type="text" v-model="fname" placeholder="Type first name here.."></th>
          </tr>
          <tr>
            <th>Last Name: </th>
            <th><input class="form-control" type="text" v-model="lname" placeholder="Type last name here.."></th>
          </tr>
          <tr>
            <th>Age: </th>
            <th><input class="form-control" type="number" v-model="age"></th>
          </tr>

          <tr>
            <th></th>
            <th> <button class="btn btn-success w-100" @click="insertRecord()"> Save </button></th>
            <!--(w-100) width 100%-->
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</main>
</template>


<script lang="ts">

  import axios from 'axios';
  import Swal from 'sweetalert2';
  import Navigation from '@/components/Navigation.vue';

export default {
  name: "InsertRecord",
  components: {Navigation},
  data() {
      return {
      fname: "",
      lname: "",
      age: 0
      }
  },
  methods: {
      async insertRecord() {
      await axios.get("http://127.0.0.1:8000/api/user/insertRecord/" + this.fname + "/" + this.lname + "/" + this.age).then( async (response) => {
          Swal.fire({
          title: "Successful",
          text: response.data?.message,
          icon: "success"
          }).then(async () => {
              this.fname = '';
              this.lname = '';
              this.age = 0;

          })
      }) ;
      }
 
},
}
</script>
