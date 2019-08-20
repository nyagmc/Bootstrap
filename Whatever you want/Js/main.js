
 /*Lbold italic msatter*/
 function myone(){
    if(document.getElementById("psst").style.fontWeight!="bold"){
        document.getElementById("psst").style.fontWeight="bold" ;} 
        else document.getElementById("psst").style.fontWeight=""
}


function mytwo(){
    if(document.getElementById("psst").style.fontStyle!="italic"){
        document.getElementById("psst").style.fontStyle="italic" ;} 
        else document.getElementById("psst").style.fontStyle=""
}


function mythree(){
    if(document.getElementById("psst").style.textDecoration!="underline"){
        document.getElementById("psst").style.textDecoration="underline" ;} 
        else document.getElementById("psst").style.textDecoration="none"
}

/*lsizez*/

function Size(){
        document.getElementById("psst").style.fontSize=document.getElementById("fs").value;
}

   

/*lboulis*/

function Police(){

        document.getElementById("psst").style.fontFamily=document.getElementById("fp").value;
}      


/*jskweri*/

$("document").ready(function(){
        $(".imgcontainer").hover(function(){
                $(".viewmore").toggle()
        })
})

/*$(document).ready(function(){
$(".tsawer").parent(".divet").hover(function(){
        $(this).find(".btns").toggle();
})
})*/


$(document).ready(function(){
        // console.log($(".ezouz"));
        $(".btns").css("opacity",0);
        $(".divet").hover(function(){
          $(this).css("opacity",0.4);
          $(this).find(".btns").css("opacity",1);
        },function(){
          $(this).css("opacity",1);
          $(this).find(".btns").css("opacity",0);

 });
 });

