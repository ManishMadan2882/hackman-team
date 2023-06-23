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

### 1. LAWYERS
#### GET '/api/v1/lawyers' : 
* Responds as {success:true,lawyers:Array}

#### GET /api/v1/lawyer/:id 
* Responds with {success:true : lawyer:Object}

#### POST '/api/v1/lawyer/register' 
* Send {name,address,city,regNo,cases,courts,experience,contact,desc,email} as Request body
* Responds as {success:true, lawyer:Object}

### 2. USERS

#### GET '/api/v1/users' 
* Responds as {success:true,users:Array}

#### GET /api/v1/user/:id 
* Responds with {success:true : user:Object}

#### POST '/api/v1/lawyer/register' 
* Send {name,email,contact,role} as Request body
* Responds as {success:true, msg:"comment added successfully"}
* Responds as

### 3. POSTS

#### POST /api/v1/post/create
* Send {title,desc,user} as the Request body
* Responds with {success:true,message:"Comment added successfully"}
* Responds as {"error": "User Id required"} in case of missing body data
#### GET /api/v1/posts
* Responds with {success:true,posts:Array}
#### GET /api/v1/post/:id
* Accepts the post _id from Request Parameters and responds with {success:true,post:Object}
#### POST /api/v1/post/addComment
* Request body contains  {postId,commentDesc,userEmail}
* Responds with {success:true,message:"Comment Added Successfully"}
