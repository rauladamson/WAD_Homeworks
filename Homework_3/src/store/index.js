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
        deleteAllPosts(state) {
            state.posts = [];
        },
        addPost(state, newPost) {
            state.posts.push(newPost);
        },
        updatePost(state, updatedPost) {
            const index = state.posts.findIndex((p) => p.id === updatedPost.id);
            if (index !== -1) {
                state.posts[index].text = updatedPost.text;
            }
        },
        deletePost(state, postId) {
            state.posts = state.posts.filter((p) => p.id !== postId);
        },
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