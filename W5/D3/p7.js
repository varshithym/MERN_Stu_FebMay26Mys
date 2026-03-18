// seqvential await vs parallel promise execution
function taskA(){
    return new Promise(function(resolve){
        setTimeout(function() {
            resolve("task A complete");

        },1000);
        
    });
}

function taskB(){
    return new Promise(function(resolve){
        setTimeout(function() {
            resolve("task B complete");

        },1000);
        
    });
}
async function runSeqvential() {
    console.time("seqvential");
    const a = await taskA();
    const b = await taskB();
    console.timeEnd("seqvential");
    console.log(a);
    console.log(b);
    
}
runSeqvential()
async function runParallel(){
    console.time("Parallel");
    const result  = await Promise.all([taskA(),taskB()]);
    console.timeEnd("Parallel");
    console.log(result[0]);
    console.log(result[1]);   
}
await runParallel();


