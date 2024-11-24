import postsData from "@/message.json";
import { createStore } from 'vuex';

const store = createStore({
    state() {
        return {
            posts: postsData.posts
        };
    },
    mutations: {
        incrementLikes(state, postId) {
            const post = state.posts.find((p) => p.id === postId);
            if (post) post.likes++;
        },
        resetLikes(state) {
            state.posts.forEach((post) => {
                post.likes = 0;
            });
        }
    }
});
export default store;