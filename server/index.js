require('dotenv').config();
const app = require('./app');
require('./database');

async function main(){
    await app.listen(app.get('port'));
    console.log(`Server on : http://localhost:${app.get('port')}`);
}

main();
