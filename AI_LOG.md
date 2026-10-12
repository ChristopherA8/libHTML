# AI Log
> Log of How AI was used to aid in the design and implementation of this project

### [Tue. Oct 6] Project structure folder layout ideas

Example Prompt>
```
I am going to make a fullstack education platform for a school project. Typically I code in C++ lets say with a src and dist folder etc what would be the folder structure for a git repo which contains both the nodejs backend and the front end static html-css-js web app this is for a school project so no react or jsx whatever so it's just simple static html pages with js and css
```

This helped me with finding the folder structure I wanted to organize the project, as well as help with the server.js file.

```js
const express = require("express");
const path = require("path");
const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, "../frontend")));

app.get("/api/courses", (req, res) => {
  res.json([{ id: 1, title: "Intro to Biology" }]);
});

app.listen(3000, () => console.log("Running on http://localhost:3000"));
```

Here is the output it gave me. I took inspiration from this for the server.js file.

### [Thu. Oct 8] Help with a broken import 'require()' in nodejs

Prompt> `I switched from import chalk from "chalk"; in nodejs to const require and it doesn't work anymore`

I was prompted to use chalk@4 version instead of the latest to continue using CommonJS instead of ESM

### [Mon. Oct 12] Help with responsive hero banner

Prompt> 
```
!!! Just tell me about what I am asking about

I need this banner image to be responsive and have the height shrink on different sizes with this html tailwindcss site. How do I get it to shrink the entire hero div
```

And I pasted my index.html and global.css and it told me I needed to set the image width and height to full and set the object-fit css property to cover which makes sense with what I was seeing

Part of the output was this example of recommended changes to use w-full and h-full etc...
```html
<!-- HERO BANNER -->
<div class="hero-banner h-48 sm:h-64 md:h-80 lg:h-[28rem]">
  <img
    class="w-full h-full object-cover"
    src="./assets/hero-banner.jpg"
  />
  <div class="hero-dark-overlay"></div>
  <div class="flex flex-col items-center justify-center hero-text-container">
    <span class="font-medium text-2xl sm:text-3xl lg:text-4xl text-white">Practice</span>
    <span class="hero-effect text-xl sm:text-2xl lg:text-3xl text-purple-200">HTML</span>
  </div>
</div>
```
