//try catch finally with async/await

function processPayment(isSucceeded){
    return new  Promise(function(resolve,reject){
        setTimeout(function(){
            if(isSucceeded){
                resolve("Payement processed successfull.");
            }
            else{
                reject("Payement couldn't processed successfull.");
            }
        },700);
    });
}

async function runPaymentFlow(isSucceeded){
    try{
        const result = await processPayment(isSucceeded);
        console.log("Success ",result);
    }
    catch(error){
        console.log("Failure: ",error);
        
    }
    finally{
        console.log("Payment flow completed.");
        
    }
}
runPaymentFlow(true).then(function(){
    return runPaymentFlow(false);
});