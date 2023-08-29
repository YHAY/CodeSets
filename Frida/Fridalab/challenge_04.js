Java.perform(function(){
    Java.choose("uk.rossmarks.fridalab.MainActivity", {
        onMatch: function(activity){
            activity.chall04("frida");
        },
        onComplete: function(){
            console.log("Solved challenge04");
        }
    })
})