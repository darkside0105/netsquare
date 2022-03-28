Java.perform(function(){
    var varName = Java.use("PATH");

    varName.function.overload(<args_type>).implementation=function(args)
    {
        console.log("Function called");
        console.log("Arguments are:",args);
    }
});