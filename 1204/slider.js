$(function (){


var report = function(a){
    $("#gpaReport").html(a);

}


    $( "#knob" ).draggable({
        axis: "x", 
        containment: "parent",
        stop: function(evt, ui){          
            var kCurrent = $("#knob")
            var position = kCurrent.position();
            console.log("Position: " + position.left);
            var gpaCalc = ((position.left /200) *4);
            console.log("gpaCalc: " + gpaCalc);
            report(gpaCalc);
        }
    });
    

})

