<template>
    <b-container>
        <h1>フォーム入力</h1>
        <b-form-group label="タイトル"><b-form-input placeholder="タイトル"></b-form-input></b-form-group>
        <b-check-group label="選択"><b-form-checkbox></b-form-checkbox></b-check-group>
        <br>
        <b-button variant="primary">送信</b-button>
        <p>Message is: {{ title }}</p>
    </b-container>
</template>

<script>
import Vue from 'vue'
export default {
};
</script>
