Java.perform(function(){
    // challenge01
    var activity = Java.use("uk.rossmarks.fridalab.challenge_01")
    activity.chall01.value = 1;
    console.log("Solved challenge01");

    // challenge02
    Java.choose("uk.rossmarks.fridalab.MainActivity", {
        onMatch: function(activity){
            activity.chall02();
            console.log("Found challenge02");
        },
        onComplete: function(){
            console.log("Solved challenge02");
        }
    })

    //challenge03
})