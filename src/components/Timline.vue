<template>
    <agile>
        <div v-for="slide in slides" :key="slide.id" class="vt-slide">
            <h2 class="vt-slide__title">{{ slide.title }}</h2>
            <h2 class="vt-slide__date">{{ slide.date }}</h2>
            <div class="vt-slide__content">{{ slide.content }}</div>
        </div>
    </agile>
</template>

<script>
export default {
  props: {
    slides: {
      type: Array,
      required: true
    }
  },
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
</style>
