# Mongo

Loaded die simulator with MongoDB Cursor

### Example

~~~js
const MongoDie = require('spb25-mongodie');

// let col = await db.collection('col');

let die = new MongoDie(col.find());

die.get().then(console.log); // ObjectID
~~~


## Install

~~~sh
npm install spb25-mongodie
~~~


### License

MIT License
