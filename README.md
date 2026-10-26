<picture>
	<source media="(prefers-color-scheme: light)" srcset="https://github.com/user-attachments/assets/65d33944-ce22-4c1d-99c8-586e59527ac7">
	<img align="left" height="120" src="https://github.com/user-attachments/assets/0dc0f4d9-a5ed-44af-b9da-f7818f434e69" alt="libHTML logo" style="float: left;"/>
</picture>
<div align="right"></div><br>
<h3 align="right">Web education platform, <br>project for Algebra-Bernays AIT Course</h3>

<!-- 2400x891 actual image size -->

## Preview

<div align="center">
<img width="700" src="https://github.com/user-attachments/assets/4ebccbe2-e0b2-4ea7-a00d-c299a5257b53" />
</div>

## Database Architecture

```SQL
CREATE TABLE users (
	user_id INTEGER PRIMARY KEY AUTOINCREMENT,
	username TEXT NOT NULL UNIQUE,
	password TEXT NOT NULL,
	firstname TEXT,
	lastname TEXT,
	createdAt TEXT NOT NULL)
```

## Credit

https://stackoverflow.com/questions/59812003/tailwindcss-fixed-sticky-footer-on-the-bottom
https://medium.com/@jasondotparse/add-user-authentication-to-your-node-expressjs-application-using-bcrypt-81bb0f618ab3
https://www.geeksforgeeks.org/node-js/what-is-express-session-middleware-in-express/
https://expressjs.com/en/5x/guide/routing/
https://www.w3schools.com/nodejs/nodejs_api_auth.asp
https://github.com/WiseLibs/better-sqlite3/blob/HEAD/docs/api.md#class-database
https://preline.co/docs/components/toasts.html
