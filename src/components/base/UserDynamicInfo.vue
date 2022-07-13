<template>
<div class="card">
    <div class="card-body">
        <div class="row">
            <div class="col-3">
                <img class="img-fluid" :src=user.photo alt="">
            </div>
            <div class="col-9">
              <div class="name">{{ user.username }}</div>
                <div class="follower">粉丝：{{user.followerCount}}</div>
                <button v-if="!user.is_followed" @click="follow" class="btn btn-secondary btn-sm">+关注</button>
                <button v-if="user.is_followed" @click="unfollow" class="btn btn-secondary btn-sm">取消关注</button>
            </div>
        </div>
    </div>
</div>
</template>

<script>
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
        const follow = () => {
            context.emit('follow');
        };
        const unfollow = () => {
            context.emit('unfollow')
        }
        return {
            follow,
            unfollow,
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
