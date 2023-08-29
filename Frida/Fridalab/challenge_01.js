Java.perform(function(){
    var activity = Java.use("uk.rossmarks.fridalab.challenge_01")
    activity.chall01.value = 1;
    console.log("activity.chall01 :"+activity.getChall01Int());
})