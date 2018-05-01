<template>
    <nav class="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
      <a class="navbar-brand" href="#">{{ title }}</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarsExampleDefault">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <a class="nav-link active" id="nav-home-tab" href="#nav-home" aria-controls="nav-home" aria-selected="true"><i class="fas fa-home"></i>Home <span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" id="nav-list-tab" href="#nav-list" aria-controls="nav-list" aria-selected="false"><i class="fas fa-list-ul"></i>list</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#"><i class="fas fa-plus-square"></i>add</a>
          </li>
        </ul>
      </div>
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
  