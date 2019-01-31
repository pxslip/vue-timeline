<template>
  <div class="vt">
    <agile
      ref="nav"
      :class="['vt__nav', {'hidden': navDisabled}]"
      v-if="hasSlides && !navDisabled"
      :dots="false"
      :slidesToShow="navSlidesToShow"
      :infinite="false"
      :options="navOptions"
      @agile:settingSlide="navSettingSlide"
      @agile:setSlide="navSetSlide"
    >
      <div v-for="(slide, index) in slides" :key="`nav-slide_${index}`" @click="navigateBothToSlide(index)">{{ slide.date }}</div>
    </agile>
    <agile
      ref="timeline"
      class="vt__timeline vt-timeline"
      v-if="hasSlides"
      :dots="timelineDots"
      :infinite="loopTimeline"
      :unagile="timelineDisabled"
      @agile:settingSlide="timelineSettingSlide"
      @agile:setSlide="timelineSetSlide"
    >
      <div v-for="(slide, index) in slides" :key="`timeline-slide_${index}`" class="vt-timeline__slide vt-slide">
          <slot v-bind:slide="slide" v-bind:index="index">
            <h3 class="vt-slide__date">{{ slide.date }}</h3>
            <h2 class="vt-slide__title">{{ slide.title }}</h2>
            <div class="vt-slide__content" v-html="slide.content"></div>
          </slot>
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
    navSlidesToShow: {
      type: Number,
      default: 4,
    },
    loopTimeline: {
      type: Boolean,
      default: false,
    },
    timelineDots: {
      type: Boolean,
      default: false,
    },
    responsiveNavOptions: {
      type: Object,
      default: () => {},
    },
    navArrows: {
      type: Object,
      default: () => {},
    },
    navDisabled: {
      type: Boolean,
      default: false,
    },
    timelineDisabled: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      navTransitioning: false,
      timelineTransitioning: false,
      currentSlide: 1,
      navOptions: {
        responsive: [
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
      },
    };
  },
  computed: {
    hasSlides() {
      return this.slides.length > 0;
    },
  },
  created() {
    // if we have the responsiveNavOptions prop map through it and set values as appropriate
    this.setResponsiveNavOptions();
    this.setNavArrows();
  },
  methods: {
    navigateBothToSlide(index) {
      this.currentSlide = index;
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
      this.currentSlide = index;
      if (!this.timelineTransitioning) {
        this.$refs.timeline.setSlide(index);
      }
      this.navTransitioning = false;
    },
    timelineSettingSlide() {
      this.timelineTransitioning = true;
    },
    timelineSetSlide(index) {
      this.currentSlide = index;
      if (!this.navTransitioning) {
        this.$refs.nav.setSlide(index);
      }
      this.timelineTransitioning = false;
    },
    setResponsiveNavOptions() {
      const keys = Object.keys(this.responsiveNavOptions);
      if (keys.length && this.responsiveNavOptions.constructor === Object) {
        this.navOptions.responsive = keys.map(key => {
          return {
            breakpoint: key,
            settings: this.responsiveNavOptions[key],
          };
        });
      }
    },
    setNavArrows() {
      if (this.navArrows.prevArrow) {
        this.navOptions.prevArrow = this.navArrows.prevArrow;
      }
      if (this.navArrows.nextArrow) {
        this.navOptions.nextArrow = this.navArrows.nextArrow;
      }
    },
  },
  watch: {
    responsiveNavOptions(newOptions) {
      this.setResponsiveNavOptions(newOptions);
    },
    navArrows(newArrows) {
      this.setNavArrows(newArrows);
    },
    currentSlide(newIndex) {
      this.$emit('slideChanged', newIndex);
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

.vt__nav {
  &.agile--disabled {
    display: none;
  }

  /deep/ {
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
}

.vt__timeline {
  .agile__slide {
    margin-bottom: 1%;
  }
}
</style>
