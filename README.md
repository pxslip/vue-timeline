# vue-timeline #

## Project setup ##

```bash
npm install
```

### Compiles and hot-reloads for development ###

```bash
npm run serve
```

### Compiles and minifies for production ###

```bash
npm run build
```

### Run your tests ###

```bash
npm run test
```

### Lints and fixes files ###

```bash
npm run lint
```

### Run your unit tests ###

```bash
npm run test:unit
```

### Customize configuration ###

See [Configuration Reference](https://cli.vuejs.org/config/).

### Usage ###

Data has to be in the form:

```json
[
    {
        "title": "Title of the slide",
        "date": "Text or html content of the slide",
        "date": "iso date or timestamp (allows for more flexible formatting)"
    },
    ...
]
```

### TODO ###

- [] How to handle the v-for key on the timeline slides
