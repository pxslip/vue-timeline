<template>
  <vue-timeline :slides="slides"></vue-timeline>
</template>

<script>
import slides from '../assets/slides';
export default {
  data() {
    return {
      slides,
    };
  },
};
</script>

<style>
</style>
