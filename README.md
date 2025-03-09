npm init -y
npm install express mongoose cors body-parser dotenv nodemon


Start the Server
Run the following command:

Testing with Postman
### `Create Item (POST)`

URL: http://localhost:3030/api/items
Body (JSON):

Edit
{
  "name": "Test Item",
  "description": "This is a test description"
}
### `Get All Items (GET)`

URL: http://localhost:3030/api/items

### `Get Single Item by ID (GET)`

URL: http://localhost:3030/api/items/{id}
(Replace {id} with an actual item ID)

### `Update Item (PUT)`
URL: http://localhost:3030/api/items/{id}
Body (JSON):

Edit
{
  "name": "Updated Name",
  "description": "Updated Description"
}

### `Delete Item (DELETE)`

URL: http://localhost:5000/api/items/{id}