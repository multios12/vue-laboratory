<template>
    <div class="container">
        <h1>フォーム入力</h1>
        <label for="title">タイトル</label>
        <input class="form-control" v-model="title" id="title" placeholder="タイトル" />
        <input class="form-check-input" type="checkbox" id="selectData" v-model="selectData" />
        <label class="form-check-label" for="selectData">選択</label>
        <br>
        <button class="form-control btn btn-primary">送信</button>
        <p>Message is: {{ title }}</p>
    </div>
</template>

<script>
import Vue from 'vue'
export default {
};
</script>
