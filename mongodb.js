const dotenv = require('dotenv');
const {MongoClient} = require('mongodb');

dotenv.config();

async function main() {
    const uri = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.jy5mg.mongodb.net/`;
    const client = new MongoClient(uri);
    try {
        await client.connect();
    
        await listDatabases(client);
     
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}
//main().catch(console.error);

async function listDatabases(client){
    databasesList = await client.db().admin().listDatabases();
 
    console.log("Databases:");
    databasesList.databases.forEach(db => console.log(` - ${db.name}`));
};

module.exports = {
    main,
    listDatabases
}