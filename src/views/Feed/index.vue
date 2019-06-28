<template>
  <section>
    <article v-for="post in feed.posts" v-bind:key="post._id">
      <header>
        <div>
          <span>{{post.author}}</span>
          <span>{{post.place}}</span>
        </div>
        <img src="@/assets/more.svg" alt="more">
      </header>
      <img :src="post.image" alt="author image">
      <footer>
        <div>
          <button>
            <img src="@/assets/like.svg" alt="like">
          </button>
          <img src="@/assets/comment.svg" alt="comment">
          <img src="@/assets/send.svg" alt="send">
        </div>
        <strong>{{post.likes}} curtidas</strong>
        <p>
          {{post.description}}
          <span>{{post.hashtags}}</span>
        </p>
      </footer>
    </article>
  </section>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex';

export default {
  name: 'Feed',
  created() {
    this.$store.dispatch('fetchFeed');
  },
  computed: { ...mapState(['feed']) },
  methods: {
    ...mapMutations(['FETCH_FEED']),
    ...mapActions(['fetchFeed']),
  },
};
</script>


<style lang="scss" scoped>
section {
  width: 100%;
  max-width: 580px;
  margin: 0 auto;
  padding: 0 30px;

  article {
    background: #fff;
    border: 1px solid #ddd;
    margin-top: 30px;

    header {
      padding: 20px;
      display: flex;
      align-items: center;
      justify-content: space-between;

      div {
        display: flex;
        flex-direction: column;
        align-items: flex-start;

        > span {
          font-size: 13px;
        }

        span {
          font-size: 11px;
          color: #666;
          margin-top: 3px;
        }
      }
    }

    > img {
      width: 100%;
    }

    footer {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      padding: 20px;

      div {
        margin-bottom: 10px;

        button {
          background: transparent;
          border: 0;
          cursor: pointer;
        }

        img {
          height: 20px;
          margin-right: 10px;
        }
      }

      p {
        font-size: 13px;
        margin-top: 2px;
        line-height: 18px;

        span {
          display: flex;
          color: #7159c1;
        }
      }
    }
  }
}
</style>
