# FullStack TODO APP

## Description

This is Full Stack TODO app built with javaScript, jQuery, node.js, express, postgreSQL

![screenshot of the app](https://github.com/gabinwilliams/To-Do-List/blob/master/server/public/images/todoApp%20ScreenShot.png)

### Prerequisites

- [Node.js](https://nodejs.org/en/)
- [jQuery](https://jquery.com/download/)
- [Tailwind.css](https://tailwindcss.com/) 
    - CDN link
- [Postgres](https://www.postgresql.org/download/)
- [Postico](https://eggerapps.at/postico/)

## Installation

1. Create a SQL database named `weekend-to-do-app`

2. The queries in the `database.sql` file are set up to create all the necessary tables. The INSERT statement will populate the table with dummy data if you'd like to see how the todo-list looks with data already inserted. The project is built on [Postgres](https://www.postgresql.org/download/), so you will need to make sure to have that installed. I recommend using Postico to run those queries as that was used to create the queries.

3. `Node.js/Express`
  - Open up your code editor of choice and run an `npm init`, `npm install`, `npm install express` in the terminal
  - Run `node server/server.js` -- path to your server.js file.

4. `Tailwind.css`
  - npm install tailwind
  - create file 'tailwind.config.js' and put in project root.
  - Source tailwind CDN link in index.html

5. `jQuery.js`
  - Download jQuery
  - Move jQuery file into project root directory
  - Source jQuery file into index.html



## Dependencies

1. `"express": "^4.17.1"`
2. `"pg": "^8.5.1"`

## Usage

- Type the task into the input field.
- Click the add button to add it to you tasks.
- When finished with a task, click the star in the left corner to mark it complete.
- If you wish to delete a task, click the delete button in the top right corner.

## Built With

 Node.js, Express, postgreSQL javaScript, Tailwind.css.

## Acknowledgement
Thanks to [Prime Digital Academy](www.primeacademy.io) who equipped me with the skills to make this application a reality.

