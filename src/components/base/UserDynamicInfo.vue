<template>
<div class="card">
    <div class="card-body">
        <div class="row">
            <div class="col-3">
                <img class="img-fluid" src="https://cdn.acwing.com/media/user/profile/photo/184248_lg_6ff08d15d0.jpg" alt="">
            </div>
            <div class="col-9">
                <div class="name">{{fullName}}</div>
                <div class="follower">粉丝：{{user.followerCount}}</div>
                <button v-if="!user.is_followed" @click="follow" class="btn btn-secondary btn-sm">+关注</button>
                <button v-if="user.is_followed" @click="unfollow" class="btn btn-secondary btn-sm">取消关注</button>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import {computed} from '@vue/reactivity'

export default {
    name: " UserDynamicInfo ",
    components: {},
    props: {
        user: {
            type: Object,
            required: true,
        }
    },
    setup(props,context) {
        let fullName = computed(
            () => {
                return props.user.firstName + props.user.lastName;
            });
        const follow = () => {
            context.emit('follow');
        };
        const unfollow = () => {
            context.emit('unfollow')
        }
        return {
            fullName,
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
