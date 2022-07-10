<template>
<Content>
    <div class="container">
        <div class="row">
            <div class="col-3">
                <UserDynamicInfo @follow="follow" @unfollow="unfollow" :user="user" />
                <UserDynamicsWrite @post_a_post="post_a_post" />
            </div>
            <div class="col-9">
                <UserDynamicsPost :posts="posts" />
            </div>
        </div>
    </div>
</Content>
</template>

<script>
import Content from '../components/Content.vue'
import UserDynamicInfo from '../components/base/UserDynamicInfo.vue'
import UserDynamicsPost from '../components/base/UserDynamicsPost.vue'
import {
    reactive
} from 'vue'
import UserDynamicsWrite from '../components/base/UserDynamicsWrite.vue'

export default {
    name: "UserDynamics",
    components: {
        Content,
        UserDynamicInfo,
        UserDynamicsPost,
        UserDynamicsWrite
    },
    setup() {
        const user = reactive({
            id: 1,
            username: "Tiebo",
            firstName: "Tie",
            lastName: "bo",
            followerCount: 1000,
            is_followed: false,
        });

        const posts = reactive({
            count: 4,
            posts: [{
                    id: 1,
                    user_id: 1,
                    content: "今天天气好好看"
                },
                {
                    id: 2,
                    user_id: 1,
                    content: "今天天气好好看"
                },
                {
                    id: 3,
                    user_id: 1,
                    content: "今天天气好好看"
                },
                {
                    id: 4,
                    user_id: 1,
                    content: "今天天气好好看"
                },
            ],
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
        }
        const post_a_post = (content) => {
            posts.count++;
            posts.posts.unshift({
                id: posts.count,
                userId: 1,
                content: content,
            })
        }

        return {
            user,
            follow,
            unfollow,
            posts,
            post_a_post
        }

    }
}
</script>

<style scoped>
</style>
