<template>
  <Content>
    <Login />
  </Content>
</template>

<script>
import Content from "../components/Content.vue";
import Login from "../components/Login.vue";
export default {
  name: "LoginView",
  components: {
    Login,
    Content,
  },
};
</script>

<style scoped></style>
