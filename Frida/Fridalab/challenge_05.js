Java.perform(function(){
    // Java.use("uk.rossmarks.fridalab.MainActivity")
    var activity = Java.use("uk.rossmarks.fridalab.MainActivity")
    activity.chall05.implementation = function(){
        this.chall05("frida")
    }
})