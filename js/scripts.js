$(document).ready(function(){
  $("#formOne").submit(function(event){
    event.preventDefault();
    const userName = $("#userName").val();
    const description = $("#description").val();
    const date = $("#date").val();
    const startTime = $("#start-time").val(); 
    const endTime = $("#end-time").val();

    window.location.href = "booking_successful.html"
  });
});