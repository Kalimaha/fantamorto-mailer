# FANTAMORTO Mailer
This simple service is used to send an email to the FANTAMORTO admin to approve
new players.

## Setup
`npm install`

## Configuration
The following environmental variables are required to run the service:
```
export FANTAMORTO_URL="???"
export FANTAMORTO_ADMIN_EMAIL="???"
export FANTAMORTO_EMAIL="???"
export FANTAMORTO_EMAIL_PASSWORD="???"
export FANTAMORTO_DB_URL="???"
export FANTAMORTO_PROJECT_ID="???"
export FANTAMORTO_CLIENT_EMAIL="???"
export FANTAMORTO_PRIVATE_KEY="???"
```

## Run
`node index.js`

## Usage
There's a single entry point to the service:
```
[GET] http://<BASE_URL>/request/:id
```
where `:id` is the Firebase ID of the new user requesting to join the game.
