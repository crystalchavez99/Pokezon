<div align='center'>
<img src="https://res.cloudinary.com/dreambssd/image/upload/v1654026653/PokezonSolid_zu548p.png" alt="Logo" width="80" hight="80">

<h1 text-align="center">Pokezon</h1>

<p align="center">
Pokemon Mart E-Commerce Site
</p>

<a href="https://github.com/crystalchavez99/Pokezon"><strong>Explore The Docs</strong></a>
</div>

<br>

**Table of Contents**
- [Live Link](#live-link)
- [About The Project](#about-the-project)
- [Wiki](#wiki)
- [Built With](#built-with)
- [Features](#features)
- [Future Feature Ideas](#future-feature-ideas)
  - [Reach Me](#reach-me)

<br>


## Live Link
https://aa-pokezon.herokuapp.com/

<br>

## About The Project
Pokezon is a digital store application that sells supplies necessary for Pokémon training and lifestyle. We aim to help merchants sell standard adventure supplies
and special items that are often unique to Pokemon trainers out there.

<img src="https://res.cloudinary.com/dreambssd/image/upload/v1653506909/POKE_iphzvu.png">

<br>

## Wiki
<a href="https://github.com/crystalchavez99/Pokezon/wiki">Pokezon Wiki</a>

<br>

## Built With
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg" width=50px height=50px/><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg" width=50px height=50px/><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" width=50px height=50px/><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" width=50px height=50px/><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" width=50px height=50px/><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original-wordmark.svg" width=50px height=50px/><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original-wordmark.svg" width=50px height=50px/>
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original-wordmark.svg" width=50px height=50px/><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlalchemy/sqlalchemy-original-wordmark.svg" width=50px height=50px/><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/heroku/heroku-plain-wordmark.svg" width=50px height=50px/><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original-wordmark.svg" width=50px height=50px/>

<br>

## Features

**<h3>Items</h3>**
* <p>Users can view items and post item listings on Pokezon, also able to see them on a user's profile</p>
* <p>Users that have posted a item listing can edit and delete them</p>
<img src="https://res.cloudinary.com/dreambssd/image/upload/v1654026874/Capture_nqbegn.png"/>

**<h3>Reviews</h3>**
* <p>Users can view reviews and post review listings on Pokezon, also able to see them on the item detail page.</p>
* <p>Users that have posted a review listing can edit and delete them.</p>
<img src="https://res.cloudinary.com/dreambssd/image/upload/v1654026929/Capture_wlgjlt.png"/>

**<h3>Profile</h3>**
* <p>Users can view the profile of another user.</p>
* <p>Only current logged in users can edit their own profile, specifically username and bio</p>
<img src="https://res.cloudinary.com/dreambssd/image/upload/v1654026980/Capture_cr1bmf.png"/>

## Future Feature Ideas
* Search
* Order history
* Incorporate AWS

<!-- ## Getting started
1. Clone this repository (only this branch)

   ```bash
   git clone https://github.com/appacademy-starters/python-project-starter.git
   ```

2. Install dependencies

      ```bash
      pipenv install --dev -r dev-requirements.txt && pipenv install -r requirements.txt
      ```

3. Create a **.env** file based on the example with proper settings for your
   development environment
4. Setup your PostgreSQL user, password and database and make sure it matches your **.env** file

5. Get into your pipenv, migrate your database, seed your database, and run your flask app

   ```bash
   pipenv shell
   ```

   ```bash
   flask db upgrade
   ```

   ```bash
   flask seed all
   ```

   ```bash
   flask run
   ```

6. To run the React App in development, checkout the [README](./react-app/README.md) inside the `react-app` directory.

***


*IMPORTANT!*
   psycopg2-binary MUST remain a dev dependency because you can't install it on alpine-linux.
   There is a layer in the Dockerfile that will install psycopg2 (not binary) for us.
***

### Dev Containers (OPTIONAL for M1 Users)
The following instructions detail an *optional* development setup for M1 Mac users having issues with the `psycopg` package.

1. Make sure you have the [Microsoft Remote - Containers](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers) extension installed.
2. Make sure you have [Docker](https://www.docker.com/products/docker-desktop/) installed on your computer.
3. Clone the repository (only this branch)
   ```bash
   git clone https://github.com/appacademy-starters/python-project-starter.git
   ```
4. Open the repo in VS Code.
5. Click "Open in Container" when VS Code prompts to open container in the bottom right hand corner.
6. **Be Patient!** The initial install will take a LONG time, it's building a container that has postgres preconfigured and even installing all your project dependencies. (For both flask and react!)

   **Note:** This will take much less time on future starts because everything will be cached.

7. Once everything is up, be sure to make a `.env` file based on `.env.example` in both the root directory and the *react-app* directory before running your app. You do not need a `DATABASE_URL` in the `.env` file if you are using this Docker setup for development - the URL is already set in the image (see `.devcontainer/Dockerfile` for the URL).

8. Get into your pipenv, migrate your database, seed your database, and run your flask app

   ```bash
   pipenv shell
   ```

   ```bash
   flask db upgrade
   ```

   ```bash
   flask seed all
   ```

   ```bash
   flask run
   ```

9. To run the React App in development, checkout the [README](./react-app/README.md) inside the `react-app` directory.

<br>

## Deploy to Heroku
This repo comes configured with Github Actions. When you push to your main branch, Github will automatically pull your code, package and push it to Heroku, and then release the new image and run db migrations.

1. Write your Dockerfile. In order for the Github action to work effectively, it must have a configured Dockerfile. Follow the comments found in this [Dockerfile](./Dockerfile) to write your own!

2. Create a new project on Heroku.

3. Under Resources click "Find more add-ons" and add the add on called "Heroku Postgres".

4. Configure production environment variables. In your Heroku app settings -> config variables you should have two environment variables set:

   | Key            | Value                                            |
   | -------------- | ------------------------------------------------ |
   | `DATABASE_URL` | Autogenerated when adding postgres to Heroku app |
   | `SECRET_KEY`   | Random string full of entropy                    |

5. Generate a Heroku OAuth token for your Github Action. To do so, log in to Heroku via your command line with `heroku login`. Once you are logged in, run `heroku authorizations:create`. Copy the GUID value for the Token key.

6. In your Github Actions Secrets you should have two environment variables set. You can set these variables via your Github repository settings -> secrets -> actions. Click "New respository secret" to create
each of the following variables:

   | Key               | Value                            |
   | ----------------- | -------------------------------- |
   | `HEROKU_API_KEY`  | Heroku Oauth Token (from step 6) |
   | `HEROKU_APP_NAME` | Heroku app name                  |

7. Push to your `main` branch! This will trigger the Github Action to build your Docker image and deploy your application to the Heroku container registry. Please note that the Github Action will automatically upgrade your production database with `flask db upgrade`. However, it will *not* automatically seed your database. You must manually seed your production database if/when you so choose (see step 8).

8. *Attention!* Please run this command *only if you wish to seed your production database*: `heroku run -a HEROKU_APP_NAME flask seed all`

## Helpful commands
| Command                        | Purpose                                                                                                                                      |
| ------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------- |
| `pipenv shell`                 | Open your terminal in the virtual environment and be able to run flask commands without a prefix                                             |
| `pipenv run`                   | Run a command from the context of the virtual environment without actually entering into it. You can use this as a prefix for flask commands |
| `flask db upgrade`             | Check in with the database and run any needed migrations                                                                                     |
| `flask db downgrade`           | Check in with the database and revert any needed migrations                                                                                  |
| `flask seed all`               | Just a helpful syntax to run queries against the db to seed data. See the **app/seeds** folder for reference and more details                |
| `heroku login -i`              | Authenticate your heroku-cli using the command line. Drop the -i to authenticate via the browser                                             |
| `heroku authorizations:create` | Once authenticated, use this to generate an Oauth token                                                                                      |
| `heroku run -a <app name>`     | Run a command from within the deployed container on Heroku                                                                                   | -->

[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/cchavez99/

### Reach Me
[![LinkedIn][linkedin-shield]][linkedin-url]
