const lessons = {
  intro: {
    title: "Introduction",
    code: `<!DOCTYPE html>
<html>
  <head>
    <script src="https://cdn.tailwindcss.com"></script>
  </head>
<body class="m-10">
  <h1 class="text-xl font-black border-b-4">Welcome to libHTML!</h1>
  <div class="bg-gray-100 m-8 p-8 rounded-lg text-gray-700 flex flex-col">
    <div class="flex flex-row gap-2 text-lg items-center">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.7" stroke="currentColor" class="size-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
      </svg>
      <span class="font-bold">Info</span>
    </div>
    <span>To your left you will see the sidebar with each lesson</span>
    <span>Feel free to skip ahead and go at your own pace</span>
  </div>
  
  <p>This example uses <span class="text-blue-500">TailwindCSS</span><br>TailwindCSS is a CSS library which helps you style your website faster</p>
  <p>You'll learn more about that later</p>
  <grid class="w-full grid place-content-center m-10">
    <img class="h-40 align-center shadow-gray-400 shadow-2xl" src="../assets/japanese-street.jpg">
    <span class="text-gray-600 text-sm mt-1">Figure 1.</span>
  </grid>
  <p>You can also include images and all kinds of media</p>
</body>
</html>`,
  },
  basic_tags: {
    title: "Basic tags",
    code: `<!DOCTYPE html>
<html>
<head>
  <style>
    /* inside of the <style> tag is CSS code for changing how your html elements look */
    
    /* 'code' means that the styles inside this block affects any text inside a <code></code> element */
    code {
      background-color: antiquewhite;
      color: black; /* The color attribute changes the text color */
    }

    /* These next two blocks of CSS add '<' and '>' prefix and postfix to the text inside the <code></code> element */
    code:before {
      content: "<"
    }
    
    code:after {
      content: ">"
    }

    /* Add some space between list items */
    li {
      margin: 8px 0;
    }

    /* Margin and padding are used to add spacing around your elements */
    img {
      padding-top: 5px;
    }
  </style>
</head>
<body>
  <h1 style="font-family:system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif">
    Basic HTML syntax
  </h1>
  <hr>
  <!-- This is a comment which is not rendered by the browser -->
  <pre>In an HTML document, elements are defined by tag pairs such as &lt;h1&gt;&lt;/h1&gt;</pre>

  <h3>Common tags:</h3>

  <!-- <ul> stands for 'unordered list' Fill a list with <li> 'list item' elements -->
  <ul> 
    <li><code>h1</code> This is a header which is used for titles<br><span style="font-size: 13px">Note: There are many header tags from h1-h6</span></li>
    <h1>Here is a header</h1>
    <li><code>p</code> Paragraph tags define a text paragraph</li>
    <p>Here is text in a paragraph tag Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    <li><code>body</code> The body tag is used once per page and all content goes inside it</li>
    <li><code>img</code> Used to display an image from a link or file<br><span style="font-size: 13px">Note: Some tags don't need a closing tag like <code style="font-size: 10px">img</code></span>
    <br><img height="50px" src="../assets/icon.png"></li>
    <li><code>a</code> Anchor tag (link) used for navigating to other sites or content on the page<br>Here is a link to <a href="https://google.com">google.com</a><br>Here is a link to a secret page on this <a href="/pages/supersecret.html">site</a></li>
  </ul>
  
  <h1></h1>
  
</body>
</html>
`,
  },
  attributes: {
    title: "Attributes",
    code: ``,
  },
};

module.exports = lessons;
