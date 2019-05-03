Description:

VA-Golf-Api is an API which contains golf course venue data for locations in and around Fairfax, VA.  The app contains names, locations, and categories data from dozens of courses in the northern Virginia area.

List of features:

The API contains several routes.

https://va-golf-api.herokuapp.com/api/venue
This link will provide a list of ALL courses and sub-data.

https://va-golf-api.herokuapp.com/api/venue/<insertname>
This will return the result for a specific course name.  Be sure to include "%20" for all spaces in the course name.

For those looking to create post, put, and delete requests, fork down the API at:

https://github.com/shadowvulture/golf-api

and then...

install postman at:

https://www.getpostman.com/tools
Postman is a tool that will allow you to run a local server and test paths to see the json data, as well as to create, update, and delete data from the MongoDB.


Adding a golf course to the DB via POST request:

In Postman, go to https://va-golf-api.herokuapp.com/api/venue
Select "POST"
Then, click "body" -> click the "raw" radio button, and type the following into the body:
{
    "name" : "Example Golf Club"
}

Updating a golf course with new data can be done similarly.  
In Postman, select PUT and then type the following URL:   https://va-golf-api.herokuapp.com/api/venue/<insert course id number>
In the body, type out, similar to above, the data you wish to update. 

To DELETE a golf course, enter the following url: https://va-golf-api.herokuapp.com/api/venue/<insertname>
In Postman, select DELETE, and enter the name of the course you wish to delete.  Be sure to include "%20" for all spaces in the course name.


Technologies used:

MongoDB, Mongoose, Express, Axios, Node, Git, Postman, Heroku, and Foursquare Places API.