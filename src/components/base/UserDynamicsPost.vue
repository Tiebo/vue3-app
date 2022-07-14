<template>
    <div class="card ">
        <div class="card-body">
            <div v-for="post in posts.posts" :key = "post.id">
                <div class="card single-post">
                    <div class="card-body">
                        {{post.content}}
                      <button v-if="is_me" @click="deletePost(post.id)" type="button" class="btn btn-danger btn-sm">删除
                      </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {useStore} from 'vuex';
import $ from 'jquery';
import {computed} from "vue";

export default {
  name: " UserDynamicsPost ",
  components: {},
  props: {
    posts: {
      type: Object,
      required: true,
    },
    user: {
      type: Object,
      required: true,
    }
  },

  setup(props, context) {
    const store = useStore();

    let is_me = computed(() => store.state.user.id === props.user.id);

    const deletePost = (post_id) => {
      $.ajax({
        //删除帖子
        url: "https://app165.acapp.acwing.com.cn/myspace/post/",
        type: "DELETE",
        headers: {
          'Authorization': "Bearer " + store.state.user.access,
        },
        data: {
          post_id
        },
        success(resp) {
          if (resp.result === "success") {
            context.emit('deletePost', post_id);
          }
        }
      })
    }
    return {
      deletePost,
      is_me
    }
  }
}

</script>

<style scoped>
button {
  color: honeydew;
  display: flex;
  float: right;
  justify-content: center;
}

.single-post {
  margin-bottom: 10px;
}
</style>
