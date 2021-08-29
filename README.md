# Pet Store Inventory

A pet store inventory site made with Node, Express, MongoDB, Mongoose, and MongoDB Atlas.

## Home Page /
Displays a list of categories that a user can click on see the items under said category in the Category Page

## New Item Page /newItem
To start click on the add a new item button to add a new item. The user will then be redirected to the homepage where the new item's category will be displayed. Click on the category to view item/itmes.

## Category Page /category/category
On this page a user will view all items under the same catgeory and click on an item to view more details

## Item Page /:itemid
On this page a user can view more details about an item. The user may also choose to update or delete the item from the database.

## Further Details
* Run project using nodemon: npm run devstart & navigate to localhost:3000
* This project uses a .env file
* To populate database using populatedb.js: node populatedb < your mongodb url >
    * https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/mongoose
* Does not display errors if failure to upload new product or fail to edit product properly

## Resources
Display Categories on homepage: https://flaviocopes.com/how-to-get-unique-properties-of-object-in-array/