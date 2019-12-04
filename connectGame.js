//jQuery
$(document).ready(function(){
   var count = 0; 
   var tie = 0;
   var arr1=[13,9,5,1]; // First column 
   var arr2=[14,10,6,2]; // second column 
   var arr3=[15,11,7,3]; // Third column 
   var arr4=[16,12,8,4]; // Fourth column 
    
    //First column
    $(".r1").on('click', function(event){
        //check if row is full
        if($('#col1').hasClass('red') || $('#col1').hasClass('yellow')){
            swal({title:"ROW IS FULL!"});
             
        }else{
            if (count == 0){  
            $("#col"+arr1[0]).addClass("red");
            count++;
            arr1.shift();
        
            }else if (count == 1){  
                $("#col"+arr1[0]).addClass("yellow");
                count--;
                arr1.shift();
            }
        }
        winCheck(); // check for win
        checkTie(); // check for Tie
    });
    
    //Second column
    $(".r2").on('click', function(event){ 
        //check if row is full
        if($('#col2').hasClass('red') || $('#col2').hasClass('yellow')){
            swal({title:"ROW IS FULL!"});
             
        }else{
            if (count == 0){ 
                $("#col"+arr2[0]).addClass("red");
                count++;
                arr2.shift();
            }else if (count == 1){ 
                $("#col"+arr2[0]).addClass("yellow");
                count--;
                arr2.shift();
            }
        }
        winCheck(); // check for win
        checkTie(); // check for Tie
    });
    
    //Third column
    $(".r3").on('click', function(event){
        //check if row is full
        if($('#col3').hasClass('red') || $('#col3').hasClass('yellow')){
            swal({title:"ROW IS FULL!"});
            
        }else{
            if (count == 0){ 
                $("#col"+arr3[0]).addClass("red");
                count++;
                arr3.shift();
            }else if (count == 1){  
                $("#col"+arr3[0]).addClass("yellow");
                count--;
                arr3.shift();
            }
        }
        winCheck(); // check for win
        checkTie(); // check for Tie
    }); 
    
    //Fourth column
    $(".r4").on('click', function(event){
        //check if row is full
        if($('#col4').hasClass('red') || $('#col4').hasClass('yellow')){
            swal({title:"ROW IS FULL!"});
            
            
        }else{  
            if (count == 0){   
                $("#col"+arr4[0]).addClass("red");
                count++;
                arr4.shift();
            }else if (count == 1){ 
                $("#col"+arr4[0]).addClass("yellow");
                count--;
                arr4.shift();
            }
        }
         winCheck(); // check for win
         checkTie(); // check for Tie
    });
    
    //Function that check for Tie 
    function checkTie(){
       if ($(".row").not(".red").length==8 && $(".row").not(".yellow").length==8){
            swal({title:"It's a Tie!"});
            $('.row').off("click");
        }
    }
    
    // Winner check function 
    function winCheck(){
       for(i = 1; i <= 8; i++){
           if(($(".r"+i).not(".red").length)==0){
                swal({title: "RED WINS!"});
                $('.row').off("click");
           } 
           if(($(".r"+i).not(".yellow").length)==0){
                swal({title: "BLUE WINS!"});
                $('.row').off("click");
           } 
       }
        // X win
        for(i = 1; i <= 2; i++){
            if(($(".v"+i).not(".red").length)==0){
                 swal({title: "RED WINS!"});
                $('.row').off("click");
            }
            if(($(".v"+i).not(".yellow").length)==0){
                swal({title: "BLUE WINS!"});
                $('.row').off("click");
            }
        }
    }
});// end of ready function 
