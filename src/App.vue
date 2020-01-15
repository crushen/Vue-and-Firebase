<template>
  <div>

    <app-header/>

    <hero />

    <pagination />

    <section class="posts">
      <div class="container">
        <div class="posts-type">Latest Posts</div>
        <div class="columns is-multiline">
          <div class="column is-12-mobile is-6-tablet is-4-widescreen is-6-desktop">
            <div class="item post-card bottom-border">
              <a class="item-link" href="#">
                <figure class="image is-2by1 item-figure background-img" :style="{ 'background-image': 'url(https://images.unsplash.com/photo-1517457210348-703079e57d4b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80)' }" alt="">
                </figure>
                <div class="item-featured">
                  Icon
                </div>
              </a>
              <div class="item-tags">
                <a class="button is-rounded" href="#" title="Some Title">#Art</a>
              </div>
              <h2 class="title item-title is-size-4 has-text-weight-extra-bold"><a class="item-link" href="#">Some Title</a></h2>
              <div class="level">
                <div class="level-left">
                  <div class="item-author">Filip Jerga</div>
                </div>
                <div class="level-right">
                  27th December 2019
                </div>
              </div>
            </div>
          </div>
          <div class="column is-12-mobile is-6-tablet is-4-widescreen is-6-desktop">
            <div class="item post-card has-border">
              <a class="item-link" href="#">
                <div class="item-featured">
                  Icon
                </div>
              </a>
              <div class="item-tags">
                <a class="button is-rounded" href="#" title="Some Title">#Art</a>
              </div>
              <h2 class="title item-title is-size-4 has-text-weight-extra-bold"><a class="item-link" href="#">Some Title</a></h2>
              <div class="item-description">
                Aaaaaaa
              </div>
              <div class="level">
                <div class="level-left">
                  <div class="item-author">Filip Jerga</div>
                </div>
                <div class="level-right">
                  27th December 2019
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import AppHeader from '@/components/Header';
import Hero from '@/components/Hero';
import Pagination from '@/components/Pagination';

export default {
  name: 'app',
  components: {
    AppHeader,
    Hero,
    Pagination
  }
}
</script>

<style lang="scss">
  @import 'assets/styles/variables.scss';
  @import '~bulma/bulma.sass';
  @import 'assets/styles/main.scss';
  .hero-section {
    position: relative;
  }
  .posts {
    padding-top: 70px;
  }
  .posts-type {
    font-size: 34px;
    margin-bottom: 10px;
    font-weight: bold;
  }
  .search-lookup {
      width: 960px;
      margin: 0 auto;
      background-color: #262d32;
      padding: 20px;
      color: white;
      border-radius: 10px;
  }
  .search-lookup-wrap {
    width: 100%;
    z-index: 2;
    position: absolute;
    top: auto;
    bottom: -42px;
  }
  .search-card-find {
    width: 100%;
    height: 180px;
    position: relative;
    display: block;
    border-radius: 3px;
    text-decoration: none;
    box-shadow: 0 0 1px rgba(0,0,0,.05);
    background-clip: content-box;
    background-size: cover;
    background-position: 50% 20%;
    border: 1px solid rgba(0,0,0,.12);
    -webkit-tap-highlight-color: transparent;
    &-interest {
      position: absolute;
      bottom: 12px;
      right: 12px;
      > p {
        font-weight: bold;
      }
    }
    .title {
      color: white;
    }
    .subtitle {
      color: white;
    }
    &-content {
      &-date {
        margin: 10px;
        width: 70px;
        text-align: center;
        border-radius: 50%;
        .day {
          display: block;
          font-size: 21px;
          color: white;
          font-weight: bold;
        }
        .month {
          display: block;
          color: #ff5050;
          font-weight: bold;
          font-size: 23px;
          margin-bottom: -5px;
        }
      }
      &-info {
        position: absolute;
        bottom: 0;
        left: 0;
        padding: 15px;
        width: 100%;
      }
    }
  }
</style>