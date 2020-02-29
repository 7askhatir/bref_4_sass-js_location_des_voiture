// - Events - Click / Dblclick / Mouseenter / Mouseleave / Hover
// $(document).ready(function()
// {
    // $("button").click(function(){
    //     $(this).css("color","red");
    // });
    // $("button").mouseenter(function(){
    //     $("h2").css("color","yellow");
    // });
    // $("button").mouseleave(function(){
    //     $("h2").css("color","green");
    // });
    // $("button").hover(function(){
    //     $("h2").css("color","red");


    // },
    // function(){
    //     $("h2").css("color","black")

    // }
    // )
   



// });
// Effects - Hide / Show / Toggle
// $(document).ready(function(){
//     $("button").click(function(){
//         $(this).hide();
//     });
//     $("h2").mouseenter(function(){
//     $("button").show();

//     });

// $(document).ready(function(){
//     $("button").click(function(){
//         $("h2").hide(3000, function(){
//             $("h3").toggle(3000,function(){
//                 $("button").css("color","red");
                

//             });
//         });
//     });

// });
// Effects - Fade In / Fade Out / Fade Toggle / Fade To


$(document).ready(function(){
 $("button").click(function(){
     $("h3").fadeIn(3000,function(){
         $("h2").fadeOut(3000,function(){
             $("h3").FadeToggle(3000);
         });
     });
 });
});


