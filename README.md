# d3-rs-text-multiline

`d3-rs-text-multiline` is a component for creating animateable multi-line text elements in a SVG container.

## Builds

[![Circle CI](https://circleci.com/gh/Redsift/d3-rs-text-multiline.svg?style=svg)](https://circleci.com/gh/Redsift/d3-rs-text-multiline)

## Example

<iframe height='300' scrolling='no' src='//codepen.io/rahulpowar/embed/ONqZOQ/?height=300&theme-id=23815&default-tab=result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/rahulpowar/pen/ONqZOQ/'>@redsift/d3-rs-text-multiline</a> by Rahul Powar (<a href='http://codepen.io/rahulpowar'>@rahulpowar</a>) on <a href='http://codepen.io'>CodePen</a>.
</iframe>

## Usage

### Browser
	
	<script src="//static.redsift.io/reusable/d3-rs-text-multiline/latest/d3-rs-text-multiline.umd-es15.min.js"></script>
	<script>
		var text = d3_rs_text_multiline.svg();
		...
	</script>

### ES6

	import { text } from "@redsift/d3-rs-text-multiline";
	let eml = text.svg();
	...
	
### Require

	var text = require("@redsift/d3-rs-text-multiline");
	var eml = text.svg();
	...

### Parameters

|Name|Description|Transition|
|----|-----------|----------|
|classed|SVG custom class|N|
|text|text accessor function|N|
|tweenText|text tween function|N|
|lineHeight|custom line height. if 0 (default), calculated using getBBox()|N|