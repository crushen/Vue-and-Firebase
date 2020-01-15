<template>
  <div class="columns is-multiline">
    <div 
      v-for="item in exchanges" :key="item.id"
      class="column is-12-mobile is-6-tablet is-4-widescreen is-6-desktop">
      <div class="item post-card bottom-border">
        <a class="item-link" href="#">
          <figure 
            class="image is-2by1 item-figure background-img" 
            :style="{ 'background-image': `url(${item.image})` }" 
            alt="">
          </figure>
          <div class="item-featured">
            Icon
          </div>
        </a>
        <div class="item-tags">
          <a 
            v-for="tag in item.tags"
            :key="tag"
            class="button is-rounded" 
            href="#" 
            :title="tag">#{{ tag }}</a>
        </div>
        <h2 class="title item-title is-size-4 has-text-weight-extra-bold">
          <a class="item-link" href="#">{{ item.title }}</a>
        </h2>
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
</template>

<script>
export default {
  props: {
    exchanges: { type: Array, required: true }
  }
}
</script>