# Project Image-ai

Develop an AI image generation app using MERN stack. You will also need to create the accounts at MongoDB and Cloudinary. The goal of this project is to practice frontend / backend integration and also to check out new AI technologies. There is also a search images functionality and a few random prompts for generating images that will help you get started with the app.

## System Requirements

To get started with development, you need to install few tools

1. git

   `git` version 2.13.1 or higher. Download [git](https://git-scm.com/downloads) if you don't have it already.

   To check your version of git, run:

   ```shell
    git --version
   ```

2. node & npm

   `node` version 16.15.1 or higher. Download [node](https://nodejs.org/en/download/) if you don't have it already.
   `npm` version 5.6.1 or higher. You will have it after you install node.

   To check your version of node or npm, run:

   ```shell
    node --version
    npm --version
   ```

## Setup

To set up a development environment, please follow these steps:

1. Clone the repo

   ```shell
    git clone https://github.com/pinjamar/image-ai
   ```

2. Change directory to the project directory and install npm to both client and server

   ```shell
   cd image-ai/client
   npm install
   cd image-ai/server
   npm install
   ```

3. Install nodemon package in the server folder

   `npm install --save-dev nodemon`

4. run the app - both client and server at the same time

   ```shell
   cd image-ai/client
   npm run dev
   cd image-ai/server
   npm start
   ```

5. Connect to MongoDb either online or locally

For local connection: Open command prompt and open it as an administrator and run
``net start MongoDB`

Install additional necessary packages that you can find in package.json.

Project will be running in the browser.

Copy your local address from the terminal to the browser to view the frontend and start creating images.
Check if your server is running at [http://localhost:8080](http://localhost:8080).

## CURRENTLY DOESN'T WORK BECAUSE API IS NO LONGER FREE AND THEREFORE NO LONGER USABLE
