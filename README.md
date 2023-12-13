# Prettier plugin kebab to camel

> [!WARNING]
> If you use `<Foo>x` in a `.ts` file, it won't work. But you can instead write `x as Foo`.

A prettier plugin to convet attribute style from `kebab-case` to `camelCase` in typescript and javascript files by the provided attributes list.

### Input

```js
const obj = {
  props: {
    name: "xxx",
    "-one-two": 12,
    "thr-fou-": 34,
    "-fiv-six-": 56,
    props: {
      "name-one": "xxx",
    },
    "before-page-change"() {},
  },
}

export default function () {
  return {
    props: {
      "prop-one": 1,
      "prop-two": 2,
      "prop-three": 3,
      "prop-four": 4,
    },
  }
}
```

### Output

```js
const obj = {
  props: {
    name: "xxx",
    "-one-two": 12,
    "thr-fou-": 34,
    "-fiv-six-": 56,
    props: {
      nameOne: "xxx",
    },
    beforePageChange() {},
  },
}

export default function () {
  return {
    props: {
      propOne: 1,
      propTwo: 2,
      propThree: 3,
      propFour: 4,
    },
  }
}
```

### Install

```shell
npm install --save-dev  @showlotus/prettier-plugin-kebab-to-camel
```

or, using yarn

```shell
yarn add --dev @showlotus/prettier-plugin-kebab-to-camel
```

### Usage

Add plugins and an attributes list in prettier config file.

```js
module.exports = {
  /* ... */
  attributeUnderKeys: ["props"],
  plugins: ["@showlotus/prettier-plugin-kebab-to-camel"],
}
```

### APIs

#### `attributeUnderKeys`

type: `Array<string>`

default value: `["props"]`

A list of attributes to match the `kebab-case` style attributes under that attribute.

```js
"attributeUnderKeys": ["props", "someProp"]
```

As configured above, all objects with properties named `props` and `someProps` under the object are matched, and all `kebab-case` style property names under the matched object are converted to the `camelCase` style.
