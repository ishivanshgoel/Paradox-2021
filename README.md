# Paradox-2021
![npm package](/client/public/paradox-event-icon.png)

PARADOX - A two-day online cryptic hunt organized by IEEE Computer Society of VIT Chennai.

- [ Installation Setup ](#Installation)
- [ File Structure ](#File-Structure)
- [ How to Contribute ](#Contributing)
- [ The Team ](#The-Team)  

## Installation
- Clone the repository
- Add all the files required for [ setting up the project. ](#Setting-Up-credentials-and-adding-secrets)
- Install all the [ dependencies ](#Installing-dependencies)
- Start [ backend server ](#Start-backend-server)
- Start the [ frontend development server ](#Start-Frontend-server)

## File Structure
---

### Setting Up credentials and adding secrets

| File name  | Location | Description |
| ------------- | ------------- |------------- |
| credentials.json  | /Database/Config/credentials.json   | file containing credentials of the database.
| constants.js  | /Router/Admin/constants.js  | secret string/ codes used on server side.
| Constants.json | /client/src/Helper/Constants.js| secret string/ codes used on client side.|
- Refer to these [ file structures ](#File-Structures)

### Installing dependencies
- In the root directory ```npm install``` this installs all the dependencies required on the server-side.
- Move to client directory ```cd client```
- In Client Directory ```npm install``` this installs all the dependencies required on the client-side.

### Start backend server
- In root directory ```npm start```
- The node server will start at port ```5000```
- ``` Express app listening at port  5000 Connected to database!! ``` message in the console indicates that the backend server is up and running successfully on your local machine.  

### Start Frontend server
-  Move to the client directory by writing ```cd client``` in the console and give another command ```npm start``` to start the server.

### File Structures
- credentials.json

```json
{
    "username": "data_base_username",
    "password": "password_of_database",
    "collection": "collection_name"
}
```
- constants.js
```js
const ADMINTOKEN = 'admin_token'

module.exports = ADMINTOKEN
```
- Constants.js
```js
// do not push this file to git

const EVENTDATE = 2 // starting date of event
const ADMINTOKEN = 'admin_token'

export default {}
export { EVENTDATE, ADMINTOKEN }
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## The Team

### Event Coordinator
- Samank Gupta
- Tanay Bhadula

### Developers
- Shivansh Goel
- Tejas Vaichole
- Sanika Kulkarni
- Prabhat Singh
- Praneeth Sethumadhavan

### Graphic Designer
- Prathiba Narayan 
