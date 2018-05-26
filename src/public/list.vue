<template>
  <b-container>
    <h1>リストレンダリング</h1>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">First</th>
          <th scope="col">Last</th>
          <th scope="col">Handle</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in items" v-bind:key="item.no">
          <th scope="row">{{item.no}}</th>
          <td>{{item.First}}</td>
          <td>{{item.Last}}</td>
          <td>{{item.Handle}}</td>
        </tr>
      </tbody>
    </table>
  </b-container>
</template>

<script>
export default {
  data() {
    return {
      items:
      [{
        no:1,
        First:"Mark",
        Last:"Otto",
        Handle:"@mdo"
      },{
        no:2,
        First:"Jacob",
        Last:"Thornton",
        Handle:"@fat"
      },{
        no:3,
        First:"Larry",
        Last:"the Bird",
        Handle:"@twitter"        
      }]
    }
    ;
  }
};
</script>

<style>
</style>
