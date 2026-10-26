const lessons = {
  intro: {
    title: "Intro to HTML",
    code: `<style>
  body {
      background-color: lightskyblue
  }
  
  h1 {
    border-bottom: 1px solid black
  }
</style>
<body>
  <h1>Hello; World</h1>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis veritatis doloribus, corrupti pariatur ipsa eligendi maxime, tempore, nobis facere commodi nemo beatae in reprehenderit assumenda iusto itaque fuga alias dolorum?</p>
</body>
`,
  },
  basic: {
    title: "Basic tags",
    code: `<h1>This is a header</h1>`,
  },
  test: {
    title: "Test",
    code: `<!DOCTYPE html>
<html>
  <head>
    <script src="https://cdn.tailwindcss.com"></script>
  </head>
<body class="m-10">
  <h1 class="text-xl font-black border-b-4">Hello; World</h1>
  <p class="p-10 text-gray-700">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis veritatis doloribus, corrupti pariatur ipsa eligendi maxime, tempore, nobis facere commodi nemo beatae in reprehenderit assumenda iusto itaque fuga alias dolorum?</p>
  <p>Now a line break<br>And an image:</p>
  <grid class="w-full grid place-content-center m-10">
    <img class="h-60 align-center" src="https://christopher.jp.net/assets/japanese-street.jpg">
    <span class="text-gray-600 text-sm mt-1">Figure 1.</span>
  </grid>
</body>
</html>`,
  },
};

module.exports = lessons;
