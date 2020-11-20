var task = require('../models/task');

let db = new sqlite3.Database(':RedisInfo:')


// app.post('/add', function(req,res){
//   db.serialize(()=>{
//     db.run('INSERT INTO emp(host,port,password,add_time) VALUES(?,?)', [req.body.host, req.body.port,req.body.password,req.body.add_time], function(err) {
//       if (err) {
//         return console.log(err.message);
//       }
//       console.log("data added");
//       res.send("Data added to db");
//     });
// });
// });

  
// class TaskRepository {
//   // omitting other methods

//   create(name, description, isComplete, projectId) {
//     return this.dao.run(
//       `INSERT INTO tasks (name, description, isComplete, projectId)
//         VALUES (?, ?, ?, ?)`,
//       [name, description, isComplete, projectId])
//   }
// }

// db.close();
// module.exports = TaskRepository;

  