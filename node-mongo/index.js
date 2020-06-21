const MongoClient = require('mongodb').MongoClient;


const assert=require('assert')

const url = 'mongodb://localhost:27017/';


const dbname="conFusion";


MongoClient.connect(url,(err,client)=>{

    assert.equal(err,null);

    console.log("connected to databse properly");
    

    const db=client.db(dbname)
   
    const collection=db.collection('dishes');

    collection.insertOne({"name":"nk","description":"menu"},(err,result)=>{
        assert.equal(err,null);

        console.log("after insert:\n");
        console.log(result.ops); // gthis will tell how amny operations are carried out
        
        collection.find({}).toArray((err,docs)=>{
            assert.equal(err,null);

            console.log("found the below items\n");
            console.log(docs);

            db.dropCollection('dishes',(err,result)=>{
                assert.equal(err,null);
                client.close();  

            })
            
        });

        

    })



})