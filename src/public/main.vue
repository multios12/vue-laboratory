<template>
  <div class="container" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
    <alert-message :message="alertMessage" v-on:close="alertMessage = ''"></alert-message>

    <h1>アラート</h1>
    <p class="lead">アラートメッセージの表示・非表示</p>
    <button @click="show" class="btn btn-primary">メッセージの表示</button>
    <br>
  </div>
</template>

<script>
import Vue from "vue";
import alertComponent from "./alert.vue";

//  デフォルト値定義
export default {
  data() {
    return {
      alertMessage: "メッセージをクリックすると閉じます"
    };
  },
  methods: {
    show: function(event) {
      this.alertMessage = "メッセージを表示しました"
    }
  }
};
Vue.component("alert-message", alertComponent);

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
