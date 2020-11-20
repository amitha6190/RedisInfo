
class RedisInfo {
    constructor(dao) {
      this.dao = dao
    }  
   createTable() {
      const sql = `
        CREATE TABLE IF NOT EXISTS  (
         md5 INTEGER(32) PRIMARY KEY,
         host VARCHAR(32),
         port INTEGER(32),
         password VARCHAR(32),
         add_time DATE`
        return this.dao.run(sql)
    }
  }
  
  module.exports = RedisInfo;