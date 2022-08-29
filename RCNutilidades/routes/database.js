const mysql = require('mysql2');

//database

const con = mysql.createConnection(
    {
        host: "127.0.0.1",
        user: "root",
        password: "root123",
        database: "teste_rcn",
        multipleStatements: true,
    }
  );
  
  con.connect((error) => {
    if(error) throw error;
    console.log('Conexão estabelecida com sucesso: id ' + con.threadId);
  });

module.exports = con;