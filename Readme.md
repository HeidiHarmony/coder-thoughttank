# Coder-ThoughtTank

Where the best minds in tech come together to think deep thoughts.
<https://github.com/HeidiHarmony/coder-thoughttank>

## Table of Contents

[About](#about)  
[Features](#features)
[Dependencies](#dependencies)
[Installation](#installation)
[Getting Started](#getting-started)  
[Endpoints](#endpoints)
[Plans for Future Development](#plans-for-future-development)  
[Report Issues](#report-issues)  
[License](#license)  
[About the Developer](#about-the-developer)

### About

Coder-ThoughtTank is an API designed for basic social sharing, offering user management, "thought" posts, and the ability to add comments ("reactions") and make friends with other users. This is a back-end application that you can use with your front-end web site to quickly get a basic social network up and running. The database uses MongoDB and can handle a large data set and update easily according to your needs.

### Features

Users: create, update, delete, see all users, and add and remove friends
Thoughts: create, update, delete, see all thoughts, and add and remove reactions

### Dependencies

Express.js
Moment
Mongoose

Development Dependency: Nodemon

### Installation

First, Node.js needs to be downloaded and installed on your computer. If you don't already have it, you can get Node at: (<https://nodejs.org/en/download>).

Next, you can install the necessary dependencies by running
`npm install` from your project's root directory. This may take a few minutes, but then you will have a node_modules folder containing the libraries needed for Coder-ThoughtTank to run.

### Getting Started

You can use Coder-ThoughtTank out of the box by typing `npm run start` to start the server and begin making API calls. As configured, the server will run on port 3000 but this can be customized to your needs in the index.js file.

If you already have some data you want to seed into your database, you can start by overriding the data that is in the userData file with your own users, and use a similar process for seeding any thoughts and reactions.

### Endpoints

If running locally with existing configuration, the base URL is `localhost:3000/api`.
Use the http requests as shown below (get, put, post, delete)
Anywhere that ':id' is indicated in a URL, replace it with the actual ID number for the desired user, thought, or reaction.
Anywhere that empty quotes are shown, your data should be added.

### Demo Video

The routes described below are demonstrated in this video.

<https://www.awesomescreenshot.com/video/27837570?key=c516b3d7c6a20b94f9150274ecdfb279>

#### Users

To get all users (helpful for finding the id numbers you'll need):
![Static Badge](https://img.shields.io/badge/GET-blue)`/users`

To get a single user by id:
![Static Badge](https://img.shields.io/badge/GET-blue) `/users/:id`

To update a user:
![Static Badge](https://img.shields.io/badge/PUT-gold) `/users/:id`
Provide in the body of the request:
`{
"userName": "",
"email": ""
}`

To create a user:
![Static Badge](https://img.shields.io/badge/POST-green) `/users`
Provide in the body of the request:
`{
"userName": "",
"email": ""
}`

To delete a user:
![Static Badge](https://img.shields.io/badge/DELETE-red) `/users/:id`

To add a friend to a user:
![Static Badge](https://img.shields.io/badge/POST-green) `/users/:id/friends/:id`

To delete a friend from a user:
![Static Badge](https://img.shields.io/badge/DELETE-red) `/users/:id/friends/:id`

#### Thoughts

To get all thoughts (helpful for finding the id numbers you'll need):
![Static Badge](https://img.shields.io/badge/GET-blue) `/thoughts`

To get a single thought:
![Static Badge](https://img.shields.io/badge/GET-blue) `/thoughts/:id`

To update a thought:
![Static Badge](https://img.shields.io/badge/PUT-gold) `/thoughts/:id`

To create a new thought:
![Static Badge](https://img.shields.io/badge/POST-green) `/thoughts/:id`
Provide in the body of the request:
`{
"thoughtText": "",
"user_id": ""
}`

To delete a thought:
![Static Badge](https://img.shields.io/badge/DELETE-red) `/thoughts/:id`

To add a reaction to a thought:
![Static Badge](https://img.shields.io/badge/POST-green) `/thoughts/:id/reactions`
Provide in the body of the request:
{
"reactionBody": "",
"user_id": "",
"thought_id": ""
}

To delete a reaction:
![Static Badge](https://img.shields.io/badge/DELETE-red) `/thoughts/:id/reactions/:id`

### Plans for Future Development

The data presently being stored for users and thoughts is very basic. Future development could include more information about a user, such as a short bio, qualifications, and interests. Thoughts could be categorized or tagged by subject matter to bring more utility to users.

### Report Issues

Report issues on Github here: <https://github.com/HeidiHarmony/coder-thoughttank/issues>

### License

MIT License, copyright (c) 2024 HeidiHarmony

### About the Developer

I am a graphic artist, newbie web developer, and musician. I enjoy innovating, solving problems creatively, laughing at life's absurdities, and making the world a nicer place to be. You can find me on Github at <https://github.com/HeidiHarmony> and LinkedIn at <https://www.linkedin.com/in/heidi-carrier-dual-hemisphere/>
