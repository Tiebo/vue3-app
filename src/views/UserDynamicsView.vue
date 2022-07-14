<template>
  <Content>
    <div class="container">
      <div class="row">
        <div class="col-3">
          <UserDynamicInfo @follow="follow" @unfollow="unfollow" :user="user" />
          <UserDynamicsWrite v-if="is_me" @post_a_post="post_a_post"/>
        </div>
        <div class="col-9">
          <UserDynamicsPost :posts="posts" :user="user" @deletePost="deletePost"/>
        </div>
      </div>
    </div>
  </Content>
</template>

<script>
import Content from "../components/Content.vue";
import UserDynamicInfo from "../components/base/UserDynamicInfo.vue";
import UserDynamicsPost from "../components/base/UserDynamicsPost.vue";
import UserDynamicsWrite from "../components/base/UserDynamicsWrite.vue";
import {computed, reactive} from "vue";
import {useRoute} from "vue-router";
import {useStore} from "vuex";
import $ from 'jquery';

export default {
  name: "UserDynamicsView",
  components: {
    Content,
    UserDynamicInfo,
    UserDynamicsPost,
    UserDynamicsWrite,
  },
  setup() {
    const route = useRoute();
    const store = useStore();
    const user = reactive({});
    const posts = reactive({});
    const userId = parseInt(route.params.userId);

    $.ajax({
      url: "https://app165.acapp.acwing.com.cn/myspace/getinfo/",
      type: "GET",
      crossDomain: true,
      data: {
        user_id: userId,
      },
      headers: {'Authorization': "Bearer " + store.state.user.access},
      success(resp) {
        user.id = resp.id;
        user.username = resp.username;
        user.photo = resp.photo;
        user.followerCount = resp.followerCount;
        user.is_followed = resp.is_followed;
      }
    });

    $.ajax({
      url: "https://app165.acapp.acwing.com.cn/myspace/post/",
      type: "GET",
      crossDomain: true,
      headers: {'Authorization': "Bearer " + store.state.user.access},
      data: {
        user_id: userId,
      },
      success(resp) {
        posts.count = resp.length;
        posts.posts = resp;
      }
    })

    const follow = () => {
      if (user.is_followed) return;
      user.is_followed = true;
      user.followerCount++;
    };
    const unfollow = () => {
      if (!user.is_followed) return;
      user.is_followed = false;
      user.followerCount--;
    };
    const post_a_post = (content) => {
      posts.count++;
      posts.posts.unshift({
        id: posts.count,
        userId: 1,
        content: content,
      });
      $.ajax({
        url: "https://app165.acapp.acwing.com.cn/myspace/post/",
        type: "POST",
        headers: {'Authorization': "Bearer " + store.state.user.access},
        data: {
          content,
        },
      })
    };
    const deletePost = post_id => {
      console.log(post_id);
      posts.posts = posts.posts.filter(post => post.id !== post_id);
      posts.count = posts.posts.length;
    }

    const is_me = computed(() => userId === store.state.user.id);


    return {
      user,
      follow,
      unfollow,
      posts,
      post_a_post,
      route,
      deletePost,
      is_me
    };
  },
};
</script>

<style scoped></style>
