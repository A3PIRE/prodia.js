<img src="https://raw.githubusercontent.com/unburn/assets/main/prodia/prodia-header.png">

***

<p align="center">A simple and up to date wrapper for prodia api with all features included.</p>

<p align="center">
    <a href="https://github.com/unburn/prodia.js"><b>Github</b></a> •
    <a href="https://discord.gg/66uGX7t4ww"><b>Support</b></a>
</p>

<div align="center">

[![NPM Version](https://img.shields.io/npm/v/prodia.js?style=flat-square&color=%230059CD)](https://www.npmjs.com/package/prodia.js)
[![NPM Downloads](https://img.shields.io/npm/dw/prodia.js?style=flat-square&color=%230059CD)](https://www.npmjs.com/package/prodia.js)
[![NPM License](https://img.shields.io/npm/l/prodia.js?style=flat-square&color=%230059CD)](https://github.com/unburn/prodia.js/blob/main/LICENSE)
[![GitHub Repo stars](https://img.shields.io/github/stars/unburn/prodia.js?style=flat-square&color=%230059CD)](https://github.com/unburn/prodia.js)

</div>

***

# Installation
```
npm install prodia.js
```

# Usage
For detailed **docs** about parameters and **api** key, go to https://prodia.com

## Text to Image
```js
import { Prodia } from "prodia.js"

// ----- OR -----

const { Prodia } = require("prodia.js");
const { generateImage, wait } = Prodia("x-x-x-x-x");

const input = async (prompt) => {
    const result = await generateImage({
        prompt: prompt,
        model: "juggernaut_aftermath.safetensors [5e20c455]"
    })

    return await wait(result);
}

input("a photograph of an astronaut riding a horse in the sky").then(console.log)
```

> **Tip**: play with parameters like **negative_prompt**, **style_preset**, **steps** etc. to get awesome output.
>
> Know more about generation parameters **[here](https://docs.prodia.com/reference/generate)**

![Image Example](https://raw.githubusercontent.com/unburn/assets/main/prodia/generate-example.png)

## Transform Image
```js
const { Prodia } = require("prodia.js");
const { transform, wait } = Prodia("x-x-x-x-x");

const input = async (prompt) => {
    const result = await transform({
        imageUrl: "https://images.prodia.xyz/4d81be60-6cf2-417e-a800-eab097295f23.png",
        prompt: prompt,
        model: "juggernaut_aftermath.safetensors [5e20c455]"
    })

    return await wait(result);
}

input("").then(console.log)
```

> Know more about transform parameters **[here](https://docs.prodia.com/reference/transform)**

![Transform Example](https://raw.githubusercontent.com/unburn/assets/main/prodia/transform-example.png)

## SDXL Generation
```js
const { Prodia } = require("prodia.js");
const { generateImageSDXL, wait } = Prodia("x-x-x-x-x");

const input = async (prompt) => {
    const result = await generateImageSDXL({
        prompt: prompt,
        model: "sd_xl_base_1.0.safetensors [be9edd61]",
        style_preset: "photographic"
    })

    return await wait(result);
}

input("a giant monster hybrid of dragon and spider, in dark dense foggy forest").then(console.log)
```

> **Tip**: Use **getSDXLModels()** to get the list or all SDXL models, same for other.
> 
> Know more about sdxl parameters **[here](https://docs.prodia.com/reference/sdxl-generate)**

![SDXL Example](https://raw.githubusercontent.com/unburn/assets/main/prodia/sdxl-example.png)

## Face Swap
```js
const { Prodia } = require("prodia.js");
const { faceSwap, wait } = Prodia("x-x-x-x-x");

const input = async ({ sourceUrl, targetUrl }) => {
    const result = await faceSwap({
        sourceUrl,
        targetUrl,
    });

    return await wait(result);
}

input({
    sourceUrl: "https://images.prodia.xyz/fe8bd9b3-c3e6-4c7c-bef2-4038fac54dec.png",
    targetUrl: "https://images.prodia.xyz/2a3ea80c-fd56-49a2-be83-180a3fdc5abe.png"
}).then(console.log)
```

> **Tip**: Here you may get confused about **sourceUrl** & **targetUrl**, targetUrl is main face image and sourceUrl is the face image your want to put on targetUrl.
> 
> Know more about faceswap parameters **[here](https://docs.prodia.com/reference/faceswap)**

![Face Swap Example](https://raw.githubusercontent.com/unburn/assets/main/prodia/faceswap-example.png)

## Face Restore
```js
const { Prodia } = require("prodia.js");
const { faceRestore, wait } = Prodia("x-x-x-x-x");

const input = async (imageUrl) => {
    const result = await faceRestore({
        imageUrl
    });

    return await wait(result);
}

input("https://images.prodia.xyz/2913f270-3511-4bec-96f3-4ad0b84c1230.png").then(console.log)
```

> Know more about face restore parameters **[here](https://docs.prodia.com/reference/facerestore)**

![Face Restore Example](https://raw.githubusercontent.com/unburn/assets/main/prodia/facerestore-example.png)

***

There are more features, like **Inpainting**, **ControlNet** & **Upscale** etc.

# Support
Our discord **[community](https://discord.gg/MmweKCgU5f)** & prodia official **[server](https://discord.gg/vGu6KvsRJ2)**