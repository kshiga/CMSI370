$(function (){


var report = function(a){
    $("#gpaReport").html(a);
}

var calculate = function() {
    var kCurrent = $("#knob")
    var position = kCurrent.position();
    return ((position.left /200) *4);
}


    $( "#knob" ).draggable({
        axis: "x", 
        containment: "parent"
    });
    
    $("#knob").mouseup(
          calculate()
     );

})

