# d3-rs-text-multiline

`d3-rs-text-multiline` is a component for creating animateable multi-line text elements in a SVG container.

## Builds

[![Circle CI](https://circleci.com/gh/Redsift/d3-rs-text-multiline.svg?style=svg)](https://circleci.com/gh/Redsift/d3-rs-text-multiline)

## Example

[View @redsift/d3-rs-text-multiline on Codepen](https://codepen.io/rahulpowar/pen/ONqZOQ/)

## Usage

### Browser
	
	<script src="//static.redsift.io/reusable/d3-rs-text-multiline/latest/d3-rs-text-multiline.umd-es2015.min.js"></script>
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