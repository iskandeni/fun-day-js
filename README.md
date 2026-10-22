# FunDay.js

FunDay.js is a lightweight, dependency-free JavaScript library for scroll-triggered animations. Built with vanilla JavaScript and designed to be simple and easy to use.

## Features

- Seven scroll animation presets
- Simple HTML data-attribute configuration
- Customizable animation duration, easing, and movement distance
- No external dependencies or frameworks required

## Installation

Add the following script tag inside your HTML `<head>` element:

```html
<script src="funday.min.js" defer></script>
```

## Usage

Add the `data-scroll` attribute to any element you want to animate.

```html
<div data-scroll="slide-left">
  Hello, World!
</div>
```

### Animation Configuration

You can customize the animation using additional data attributes.

```html
<div
  data-scroll="slide-left"
  data-duration="0.5s"
  data-easing="ease-in-out"
  data-start="100"
  data-threshold="0.05">
  Hello, World!
</div>
```

## Options

| Attribute | Description | Default |
|---|---|---|
| `data-scroll` | Animation preset: `slide-left`, `slide-right`, `slide-up`, `slide-down`, `scale-in`, `scale-out`, or `fade` | Required |
| `data-duration` | Animation duration in seconds (`s`) or milliseconds (`ms`) | `0.5s` |
| `data-easing` | CSS timing function, such as `ease-in`, `ease-out`, `ease-in-out`, or `linear` | `ease-in-out` |
| `data-start` | Initial movement distance in pixels for slide animations | `100` |
| `data-threshold` | Minimum intersection ratio required to trigger the animation, from `0.05` to `1` | `0.05` |

Animation behavior depends on the combination of the selected preset and its configuration options.

## Important Notes

- Avoid applying your own `transform` or `opacity` styles to the same elements controlled by FunDay.js, as the library modifies these properties.
- If your layout uses `overflow-x` or `overflow-y`, some slide animations may cause unwanted clipping or horizontal scrolling. Choose an appropriate animation or adjust the overflow settings of the parent element.
- Make sure to use valid preset names and CSS values for the configuration attributes.

## Feedback and Contributions

Found a bug or have an idea for improvement? Feedback and suggestions are welcome!

Thank you for checking out FunDay.js.
