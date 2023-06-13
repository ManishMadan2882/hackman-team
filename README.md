# 201CreatedChaos

Setup the repo in your local system
```
git clone https://github.com/ManishMadan2882/hackman-team
```
Install the dependencies and start the server
```
npm install
node index
```
## Routes
POST '/submit' : 
* Send name,title,description fields from the Client side in the request body
* The time of submission section is default in the Database and need not to be sent from the Client Side
* Response must be "saved"
* There must be bug if the response is "Something went wrong"

GET '/posts':
* This endpoint responds with all the posts in a Array
* 
