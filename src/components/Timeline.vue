<template>
  <div class="vt">
    <agile ref="nav" class="vt__nav" :dots="false" :slidesToShow="8" :infinite="false" :unagile="disable" :responsive="navResponsive" @agile:settingSlide="navSettingSlide" @agile:setSlide="navSetSlide">
      <div v-for="(slide, index) in slides" :key="slide.id" @click="navigateBothToSlide(index)">{{ slide.date }}</div>
    </agile>
    <agile ref="timeline" :dots="false" :infinite="false" :unagile="disable" class="vt__timeline vt-timeline" @agile:settingSlide="timelineSettingSlide" @agile:setSlide="timelineSetSlide">
      <div v-for="slide in slides" :key="slide.id" class="vt-timeline__slide vt-slide">
          <h3 class="vt-slide__date">{{ slide.date }}</h3>
          <h2 class="vt-slide__title">{{ slide.title }}</h2>
          <div class="vt-slide__content" v-html="slide.content"></div>
      </div>
    </agile>
  </div>
</template>

<script>
export default {
  props: {
    slides: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      navTransitioning: false,
      timelineTransitioning: false,
      disable: false,
      navResponsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 4,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    };
  },
  mounted() {
    // force the agile slides to reload, hopefully recalculating widths
    window.setTimeout(() => {
      this.$refs.nav.getWidth();
      this.$refs.nav.reload();
      this.$refs.timeline.getWidth();
      this.$refs.timeline.reload();
    }, 100);
  },
  methods: {
    navigateBothToSlide(index) {
      if (!this.navTransitioning) {
        this.$refs.nav.setSlide(index);
      }
      if (!this.timelineTransitioning) {
        this.$refs.timeline.setSlide(index);
      }
    },
    navSettingSlide() {
      this.navTransitioning = true;
    },
    navSetSlide(index) {
      if (!this.timelineTransitioning) {
        this.$refs.timeline.setSlide(index);
      }
      this.navTransitioning = false;
    },
    timelineSettingSlide() {
      this.timelineTransitioning = true;
    },
    timelineSetSlide(index) {
      if (!this.navTransitioning) {
        this.$refs.nav.setSlide(index);
      }
      this.timelineTransitioning = false;
    },
  },
};
</script>

<style lang="scss" scoped>
/deep/ .agile {
  &__arrow {
    border: none;
    min-width: 20px;
  }
}

.vt__nav /deep/ {
  .agile {
    &__list {
      width: 90%;
      margin-left: auto;
      margin-right: auto;
    }

    &__arrow {
      position: absolute;
      top: 0;
      height: 100%;
      width: auto;

      &--prev {
        left: 0;
      }

      &--next {
        right: 0;
      }
    }

    &__slide {
      cursor: pointer;
    }
  }
}
</style>
