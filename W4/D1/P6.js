//finally

function example(){
    try{
        console.log("Example in try  block");
        return "TRY_RETURN";
    }
    finally{
        console.log("This is printed!");
    }
}
console.log("Example result : ",example());


//return in catch block and still not skip finally
//No matter anything finally will execute

function Example1() {
    try {
        try {
            throw new Error("New error created");
        }
        catch (e) {
            console.log("Example:1 -Caught Error");
            // return 10;
            throw (e);

        }
        finally {
            console.log("Finally Still runs ");
        }
    }
    catch(e){
        console.log("Example 1 outer catch",e.message);
    }
}
console.log("example 1 result", Example1());