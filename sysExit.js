setImmediate(function() { //prevent timeout
  console.log("[*] Starting script");

  Java.perform(function(){
    console.log("[*] Hooking calls to System.exit");
    var exitClass = Java.use("java.lang.System");
    exitClass.exit.implementation = function(){
      console.log("[*] System.exit called");
    }
    console.log("[*] Hookin calls to setEnabled");
    var enable = Java.use("android.widget.Button");
    enable.setEnabled.implementation = function(True){
        console.log("[*] setEnabled to True");
    }
  });

})