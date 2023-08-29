Java.perform(function(){
    // MainActivity 라서 static 명시 없어도 Java.use를 사용할 수 있음
    var activity = Java.use("uk.rossmarks.fridalab.MainActivity")
    activity.chall03.implementation = function(){
        console.log("[*] chall03() got called!");
        return true;
    }
})