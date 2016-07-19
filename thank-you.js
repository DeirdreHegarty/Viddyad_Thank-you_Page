/*********** function for dropdown in blue container *************/
$(document).ready(function(){

	$("#dropDown2").hide();
	$("#dropIcon-row").hide();


    $("#bottomFill2").click(function(){
    	$("#icon-row").slideToggle("slow");
        $("#dropDown2").slideToggle("slow");
        $("#dropIcon-row").slideToggle("slow", function(){
			  if($(this).is(":visible")){
			 	$("#bottomFill2").css("border-radius","0px");
			 }else{
			 	$("#bottomFill2").css("border-radius","0px 0px 4px 4px");
			 }
        });
        
    });
});