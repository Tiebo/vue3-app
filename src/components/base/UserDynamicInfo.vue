<template>
<div class="card">
    <div class="card-body">
        <div class="row">
            <div class="col-3">
                <img class="img-fluid" :src=user.photo alt="">
            </div>
            <div class="col-9">
              <div class="name">{{ user.username }}</div>
              <div class="follower">粉丝：{{ user.followerCount }}</div>
              <button v-if="!user.is_followed && !is_me" @click="follow" class="btn btn-secondary btn-sm">+关注</button>
              <button v-if="user.is_followed && !is_me" @click="unfollow" class="btn btn-secondary btn-sm">取消关注</button>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import $ from 'jquery';
import {useStore} from 'vuex';
import {computed} from "vue";

export default {
  name: " UserDynamicInfo ",
  components: {},
  props: {
    user: {
      type: Object,
      required: true,
    }
  },
    setup(props, context) {
      const store = useStore();
      let is_me = computed(() => store.state.user.id === props.user.id);
      const follow = () => {
        $.ajax({
          //关注
          url: "https://app165.acapp.acwing.com.cn/myspace/follow/",
          type: "POST",
          headers: {'Authorization': 'Bearer ' + store.state.user.access},
          data: {
            target_id: props.user.id,
          },
          success(resp) {
            if (resp.result === "success") {
              context.emit('follow');
            }
          }
        });
      };
        const unfollow = () => {
          $.ajax({
            //取消关注
            url: "https://app165.acapp.acwing.com.cn/myspace/follow/",
            type: "POST",
            headers: {'Authorization': "Bearer " + store.state.user.access},
            data: {
              target_id: props.user.id,
            },
            success(resp) {
              if (resp.result === "success") {
                context.emit('unfollow');
              }
            }
          });
        }
        return {
            follow,
            unfollow,
          is_me
        }
    }

}
</script>

<style scoped>
img {
    border-radius: 50%;
}

.name {
    font-weight: bold;
}

.follower {
    color: gray;
    font-size: 12px;
}

button {
    padding: 2px 4px;
    font-size: 12px;
}
</style>
