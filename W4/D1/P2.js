//try catch and finally
function parseConfig(text){
    
    try{
        let config =JSON.parse(text);
        console.log(config);
        return config;
    }
    catch(err){
        console.log("Error Parsing configuration:",err.message,err.name);
        return null;
    }
    finally{
        console.log("This is finally Block");
    }
}

parseConfig('{"theme":"dark"}');
parseConfig('{"theme"}');