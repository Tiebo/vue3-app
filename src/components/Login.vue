<template>
  <div class="row">
    <form class="g-3 needs-validation" novalidate>
      <div class="col-md-3">
        <label for="validationCustom01" class="form-label">用户名</label>
        <input
          type="username"
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
        <div class="form-check">
          <input
            class="form-check-input"
            type="checkbox"
            value=""
            id="invalidCheck"
            required
          />
          <label class="form-check-label" for="invalidCheck">
            Agree to terms and conditions
          </label>
          <div class="invalid-feedback">You must agree before submitting.</div>
        </div>
      </div>
      <div class="col-3">
        <button class="btn btn-primary" type="submit">Submit form</button>
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
div {
  margin: auto;
  margin-top: 15px;
}
form {
  vertical-align: middle;
}
</style>
