const app = require('./app');

app.listen(app.get(port));
console.log('abrir nessa porta', app.get('port'));