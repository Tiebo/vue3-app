<template>
  <div class="row">
    <form class="g-3 needs-validation" novalidate>
      <div class="col-md-3">
        <label for="validationCustom01" class="form-label">用户名</label>
        <input
            type="text"
            class="form-control"
            id="validationCustom01"
            value=""
            required
        />
        <div class="valid-feedback">Looks good!</div>
      </div>

      <div class="col-md-3">
        <label for="validationCustom05" class="form-label">密码</label>
        <input
            type="password"
            class="form-control"
            id="validationCustom05"
            required
        />
        <div class="invalid-feedback">请输入有效密码.</div>
      </div>
      <div class="col-md-3">
        <label for="validationCustom04" class="form-label">状态</label>
        <select class="form-select" id="validationCustom04" required>
          <option selected disabled value="">选择...</option>
          <option>在线</option>
          <option>隐身</option>
          <option>忙碌</option>
        </select>
        <div class="invalid-feedback">请选择有效状态.</div>
      </div>
      <div class="col-3">
        <button class="btn btn-primary" type="submit">登录</button>
      </div>
      <div class="row">
        <router-link class="right col-6" :to="{name : 'RegisterView'}">注册</router-link>
        <span>|</span>
        <router-link class="left col-5  " :to="{name : 'RegisterView'}">忘记密码</router-link>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "Login",
  components: {},
};
</script>

<style scoped>
span{
  width: 1px;
}
.right{
    color: gray;
    display: flex;
    justify-content: right;
}
.left{
  color: gray;
  display: flex;
  justify-content: left;
}
button{
  margin-top: 15px;
  width: 100%;
}

div {
  margin: 15px auto auto;
}
form {
  vertical-align: middle;
}

</style>
