<template>
  <Content>
    <div class="card getinit" v-for="user in users" :key="user.id" @click="open_Dynamics(user.id)">
      <div class="card-body">
        <div class="row">
          <div class="col-1">
            <img class="img-fluid" :src="user.photo" alt=""/>
          </div>
          <div class="col-11">
            <div class="username">{{ user.username }}</div>
            <div class="follow-count">{{ user.followerCount }}</div>
          </div>
        </div>
      </div>
    </div>
  </Content>
</template>

<script>
import Content from "../components/Content.vue";
import $ from "jquery";
import {ref} from "vue";
import router from "@/router/index"
import {useStore} from 'vuex';


export default {
  name: " FriendsListView ",
  components: {
    Content,
  },
  setup() {
    let users = ref([]);
    const store = useStore();
    $.ajax({
      type: "get",
      url: "https://app165.acapp.acwing.com.cn/myspace/userlist/",
      success: function (response) {
        users.value = response;
      },
    });
    const open_Dynamics = (userId) => {
      if (store.state.user.is_login) {
        router.push({
          name: "UserDynamicsView",
          params: {
            userId
          }
        })
      } else {
        router.push({
          name: "LoginView"
        });
      }
    }
    return {
      users,
      open_Dynamics,
    };
  },
};
</script>

<style scoped>
img {
  border-radius: 50%;
}
.card {
  margin-top: 20px;
  cursor: pointer;
  transition: 400ms;
}
.username {
  font-weight: bold;
  height: 50%;
}
.follow-count {
  color: gray;
  font-size: 13px;
  height: 50%;
}
.card:hover {
  box-shadow: 2px 2px 10px lightgrey;
  transition: 400ms;
}
</style>
