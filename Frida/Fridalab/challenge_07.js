// setChall07에서 1000부터 쭉 넣어서 
Java.perform(function(){
    var chall07 = Java.use("uk.rossmarks.fridalab.challenge_07");
    var i = 0;
    console.log("start bruteforce");
    for(var i=1000; i<10000; ++i){
        if(chall07.check07Pin( String(i) )){
            Java.choose("uk.rossmarks.fridalab.MainActivity",{
                onMatch: function(activity){                    
                    activity.chall07(String(i));
                },
                onComplete: function(){
                    console.log("Solved challenge06");
                }
            })
            break;
        }
    }
    console.log("end of bruteforce");
})