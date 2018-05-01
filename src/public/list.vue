<template>
    <main role="main" class="container">
      <h2>リストレンダリング</h2>
      <div class="container">
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
  </div>

    </main><!-- /.container -->
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
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
