const lessons = {
  intro: {
    title: "Introduction",
    editor: true,
    code: `<!DOCTYPE html>
<html>
  <head>
    <script src="https://cdn.tailwindcss.com"></script>
  </head>
<body class="m-10">
  <h1 class="text-3xl font-sans font-semibold border-b-4">Welcome to libHTML!</h1>
  <div class="bg-gray-100 m-7 p-5 rounded-lg text-gray-700 flex flex-col border-t-8 border-t-green-900">
    <div class="flex flex-row gap-2 text-lg items-center">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.7" stroke="currentColor" class="size-6 stroke-green-900">
        <path stroke-linecap="round" stroke-linejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
      </svg>
      <span class="font-bold text-green-900">Info</span>
    </div>
    <span>On the left you will see the sidebar with each lesson</span>
    <span>Feel free to skip ahead and go at your own pace</span>
  </div>
  
  <p class="">Some lessons have an editor where you can apply the lessons in your code and make something of your own!</p>
  <br />
  <p class="">On the left is the editor which lets you see the code used to write this lesson. Make some changes to the code and see what happens here in the output!</p>
  <br />
  <p>HTML, CSS and JavaScript give you endless possibilities to customize websites to exactly how you want.</p>
  <div id="star" class="relative left-3/4 bottom-0">
    <img onclick="moveStar()" class="size-20" src="../assets/star.gif">
    <span id="click-me" class="text-orange-700 text-lg">Click me!</span>
  </div>
  <script>
    var position = 0;
    
    function moveStar() {
      document.getElementById("click-me").classList.add("hidden");
      
      switch(position) {
        case 0:
          document.getElementById("star").classList.replace("left-3/4", "left-1/4");
          document.getElementById("star").classList.replace("bottom-0", "bottom-10");
          break;
        case 1:
          document.getElementById("star").classList.replace("left-1/4", "left-2/4");
          document.getElementById("star").classList.replace("bottom-10", "bottom-24");
          break;
        case 2:
          document.getElementById("star").classList.replace("left-2/4", "left-3/4");
          document.getElementById("star").classList.replace("bottom-24", "bottom-0");
          document.getElementById("click-me").classList.remove("hidden");
          break;
      }
      if (position < 2) position++;
      else position = 0;
    }
  </script>
</body>
</html>`,
  },
  basic_tags: {
    title: "Common tags",
    editor: false,
    code: `<!DOCTYPE html>
<html>
  <head>
    <script src="https://cdn.tailwindcss.com"></script>
    <style>
      /* inside of the <style> tag is CSS code for changing how your html elements look */

      /* 'code' means that the styles inside this block affects any text inside a <code></code> element */
      code {
        background-color: antiquewhite;
        color: black; /* The color attribute changes the text color */
      }

      /* These next two blocks of CSS add '<' and '>' prefix and postfix to the text inside the <code></code> element */
      code:before {
        content: "<";
      }

      code:after {
        content: ">";
      }

      .code-end {
        background-color: antiquewhite;
        color: black; /* The color attribute changes the text color */
      }

      /* These next two blocks of CSS add '<' and '>' prefix and postfix to the text inside the <code></code> element */
      .code-end:before {
        content: "</";
      }

      .code-end:after {
        content: ">";
      }
    </style>
  </head>
  <body class="m-10">
  <h1 class="text-3xl font-sans font-semibold border-b-4">Common HTML tags</h1>
  <div class="bg-gray-100 m-7 p-5 rounded-lg text-gray-700 flex flex-col border-t-8 border-t-green-900">
    <div class="flex flex-row gap-2 text-lg items-center">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.7" stroke="currentColor" class="size-6 stroke-green-900">
        <path stroke-linecap="round" stroke-linejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
      </svg>
      <span class="font-bold text-green-900">Info</span>
    </div>
    <span>In an HTML document, elements are defined by tag pairs such as
        <code>h1</code><code class="code-end">h1</code></span>
  </div>

    <span class="text-xl">Tags:</span>

    <!-- <ul> stands for 'unordered list' Fill a list with <li> 'list item' elements -->
    <ul class="[&>*]:m-4">
      <li>
        <code>h1</code> This is a header which is used for titles<br /><span
          style="font-size: 13px"
          >Note: There are many header tags from h1-h6</span
        >
        <h1>Here is a header</h1>
      </li>
      <li>
        <code>p</code> Paragraph tags define a text paragraph
        <p>
          Here is text in a paragraph tag Lorem ipsum dolor sit amet,
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est
          laborum.
        </p>
      </li>

      <li>
        <code>body</code> The body tag is used once per page and all content
        goes inside it
      </li>
      <li>
        <code>img</code> Used to display an image from a link or file<br /><span
          style="font-size: 13px"
          >Note: Some tags don't need a closing tag like
          <code style="font-size: 10px">img</code></span
        >
        <br /><img class="h-20 p-5" src="../assets/icon.png" />
      </li>
      <li>
        <code>a</code> Anchor tag (link) used for navigating to other sites or
        content on the page<br />Here is a link to
        <a class="text-blue-400 underline" target="_blank" href="https://google.com">google.com</a>
      </li>
    </ul>
  </body>
</html>
`,
  },
  attributes: {
    title: "Tag Playground",
    editor: true,
    code: `<!DOCTYPE html>
<html>
  <body>
    <h1>Try out some of the new tags you learned</h1>
    <br />
    <p>You can always refresh the page to clear everything to this state, or ctrl+z to undo</p>
  </body>
</html>`,
  },
};

module.exports = lessons;
