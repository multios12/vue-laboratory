<template>
    <nav class="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
      <b-navbar-brand>{{ title }}</b-navbar-brand>
      <b-button class="navbar-toggler" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </b-button>

      <b-collapse>
        <b-navbar-nav>
          <b-nav-item aria-controls="nav-home" aria-selected="true"><i class="fas fa-home"></i>Home <span class="sr-only">(current)</span></b-nav-item>
          <b-nav-item aria-controls="nav-list" aria-selected="false"><i class="fas fa-list-ul"></i>list</b-nav-item>
          <b-nav-item><i class="fas fa-plus-square"></i>add</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </nav>
</template>

<script>
export default {
  data() {
    return { title: "vue-laboratory" };
  }
};
</script>

<style>

</style>
  