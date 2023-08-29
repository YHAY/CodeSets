setTimeout(function(){
    console.log("10Sec later..");
    setImmediate(function(){
        Java.perform(function(){
            var chall_06 = Java.use("uk.rossmarks.fridalab.challenge_06");
            Java.choose("uk.rossmarks.fridalab.MainActivity",{
                onMatch: function(activity){                    
                    activity.chall06(chall_06.chall06.value);
                },
                onComplete: function(){
                    console.log("Solved challenge06");
                }
            })
        })
    })
}, 1000);