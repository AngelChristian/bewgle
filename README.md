# Bewgle assignment

This is web server having two enpoints to keep track of the received request.It uses MVC architecture.

## Available Enpoints

### Url Routes

#### GET,POST,DELETE,PUT `/process/*`(where * can be query string too, which is optional)

You can do a GET,POST,DELETE,PUT to `/process/*` to get the json response stating information about the request and saving it in the DB.

NOTE:  /* and body is optional

![example](https://res.cloudinary.com/angelchristian/image/upload/v1612686650/processreq_pxn6pg.png)

###  RESPONSE FOR ABOVE REQUEST :

![example](https://res.cloudinary.com/angelchristian/image/upload/v1612686812/processresponse_r6emna.png)

#### GET '/stats'

You can do a GET '/stats' to get the summary of all request.


It returns the following:
on success:
![example](https://res.cloudinary.com/angelchristian/image/upload/v1612687174/stats_ebnhhl.png)
on failure:
STATUS(400) 


#### GET '/stats/:from/:to'

You can do a GET '/stats/:from/:to' to filter the request's summary based on the date and time.


It returns the following:
on success:
![example](https://res.cloudinary.com/angelchristian/image/upload/v1612687174/statsDate_a3a9t9.png)
on failure:
STATUS(400)



## Running it

Just clone the repository, run `npm install`.

If you want to run it on another port, just run `PORT=3000 node server.js` to run it on port 3000 

and then `node index.js`. 

That's it :)


## Author

[Angel Christian](https://github.com/AngelChristian)

