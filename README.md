# User App

## API:

The User API App allows admin to create users with universally unique identifiers. Each user needs three required fields (First Name, Last Name, and Email) to be created. The UUID would be generated once the user is posted.

You can start the app by first installing the required modules by running `npm i` on your terminal, and then running `npm start`

The default port for this app is 5000. However, that can be edited in the `.env` file.

Here are the API calls that can be made when the app is running!

```
POST /user payload: {first_name: [text], last_name: [text], email: [text], industry: [text],} returns success message and uuid
```
```
GET /user/:uuid returns success status and the user information
```
```
GET /user returns the list of users posted
```

## Web:

Once the app is running, a web version can be accessed via http://localhost:5000

Once again, the required fields must be entered so a user can be created. Besides, there is an option to view the created users on the view.

## Tests:

Unit API tests can be run using `npm test` via terminal. The tests focus on the root functionalities including the following scenarios:
```
Being able to create a new user.
```
```
Being able to fetch the created user with the uuid.
```
```
Not being able to create a user without the required fields.
```

## Docker

This app can be dockerized using the Docekrfile available. If you have Docker running on your machine, simply run the following to build an image of the repository.

`dockebuild -t user-app-express .`

Once the image is built, you need to run the following command so the docker image can be accessible via its port.

`docker run -p 5000:5000 -d user-app-express:latest`

Now, you can run the image using the following command:

`dockerun -i -t user-app-express:latest`

Finally, you can access the web and run the tests again as usual.
