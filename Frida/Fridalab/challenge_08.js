setImmediate( function(){
    Java.perform(function(){
        // var Resource = Java.use("uk.rossmarks.fridalab.R.id");
        // Resource.check.value = "Confirm";
    
        var Button = Java.use("android.widget.Button");
        Java.choose("uk.rossmarks.fridalab.MainActivity", {
            onMatch: function(instance){
                // 이건 단순 string이 아니기 때문에 Resource에 대해서 단순히 하나의 값으로 접근할 수 없음 -> 값을 받아서 캐스팅 과정을 거침
                var checkid = instance.findViewById(0x7f07002f);
                var check = Java.cast ( checkid, Button );
                var String = Java.use("java.lang.String");
                check.setText(String.$new("Confirm")); // $new() : instance 화
            },
            onComplete: function(){
                console.log("Solved challenge 08");
            }
        })
    })
})
