import postsData from "@/message.json";
import { createStore } from 'vuex';
import VuexPersistence from 'vuex-persist';

const vuexLocal = new VuexPersistence({
    storage: window.localStorage,
});

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
    },
    plugins: [vuexLocal.plugin],
});
export default store;