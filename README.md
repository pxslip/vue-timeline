# Vue Timeline Slider #

## Installation ##

The usual ways:

```sh
npm install --save vue-timeline-slider
```

-or-

```sh
yarn add vue-timeline-slider
```

Add the timeline component to your project with

```javascript
import VueTimeline from 'vue-timeline-slider';
Vue.use(VueTimeline);
```

Or just add the timeline component

```javascript
import VueTimelineComponent from 'vue-timeline-editor/src/components/Timeline';

Vue.component('vue-timeline', VueTimelineComponent);
```

## Usage ##

### Props ###

- `slides`

The `slides` prop is used to set the array of objects representing each slide. The objects contained within the array should be of the form:

```json
[
    {
        "title": "Title of the slide",
        "content": "Text or html content of the slide",
        "date": "iso date or timestamp (allows for more flexible formatting)"
    },
    ...
]
```

- `navSlidesToShow`

An integer indicating the default number of options to show in the navigation slider. This value can also be set using the `responsiveNavOptions` by setting the `slidesToShow` in the options object for each breakpoint.

- `loopTimeline`

A boolean indicating whether the timeline should wrap back around to the start upon passing the last slide.

- `timelineDots`

A boolean indicating whether dots should be shown for the timeline slider

- `responsiveNavOptions`

An object that can be used to set responsive options for the nav slider. Should be of the form:

```json
{
  "720": {
    "slidesToShow": 2,
    ...
  },
  ...
}
```

- `navArrows`

Sets the html for the arrows shown on the navigation slider. Should be an object of the form:

```json
{
  "prevArrow": "<i class=\"fa fa-caret-left\"></i>",
  "nextArrow": "<i class=\"fa fa-caret-right\"></i>"
}
```

The component exposes the contents of each slide in the timeline as a slot, with the slide data bound to the slot scope as `slide` allowing you to customize the appearance of the slide.

```html
<vue-timeline :slides="slides">
  <template slot-scope="{ slide }">
    ...create your slide template here using the provided slide data
  </template>
</vue-timeline>
```

## Development/Contributing ##

This project leans heavily on [Vue-Agile](https://github.com/lukaszflorczak/vue-agile), forked to take advantage of some development work that has not landed in the main branch.

To run the demo of the project use the command `npm run serve`, to build for publishing use `npm run build:lib`.

## TODO ##

- [] How to handle the v-for key on the timeline slides
