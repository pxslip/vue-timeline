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

The only prop currently available is `slides` which should be set to an array of objects representing each slides that should be shown. To use the default template the objects must also contain a `title`, `content`, and `date` property:

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
