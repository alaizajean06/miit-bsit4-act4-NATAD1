<template>
  <main class="p-5">
    <div class="card">
      <div class=card-header>
        <h1>Insert Record</h1>
      </div>
      <div class=card-body>
        <table class="table">
          <tbody>
            <tr>
              <td>First name</td>
              <td><input class="form-control" type="text"></td>
            </tr>
            <tr>
              <td>Last name</td>
              <td><input class="form-control" type="text"></td>

            </tr>
            <tr>
              <td>Age</td>
              <td><input class="form-control" type="number"></td>
              
            </tr>
            <tr>
              <td></td>
              <td><button class="btn btn-primary w-100">submit</button></td>
            </tr>
          </tbody>
        </table>
    </div>
    </div>
  </main>
</template>
<script lang="ts">

import axios from 'axios';


export default {
  name: "HomeView",
  methods: {
    async insertRecord() {
      await axios.get("");

    }
  }
}
</script>


