function setMembers(){
    firebase.database().ref("Group 13/Team Members/").child("Team Member Names").set({
        Member1:"Hyeonguk Shin",
        Member2:"Yeonsil Choi",
        Member3:"Timothy Khan ",
        Member4:"Aaron Osborne"
    })
}
function addLocations(){
    var nameDB=document.getElementById('place-name').textContent;
    var phoneDB=document.getElementById('place-phone').textContent;
    var addressDB=document.getElementById('place-address').textContent;
    var dateDB=Date();
    // var itemId = firebase.database().ref().child("Team Data").push();
    var itemId = firebase.database().ref("Group 13/Team Data").child("Search_Location_Info").push();

    
     itemId.set({
         name:nameDB,
         address:addressDB,
         phoneNumber:phoneDB,
         date:dateDB
    
     }).then(function(){
         console.log('Success');
     }).catch(function(error){
         console.error('Error occured');
     });
     
    
 }

 firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
      $(".login-cover").hide();

      var dialog = document.querySelector('#loginDialog');
      if (! dialog.showModal) {
        dialogPolyfill.registerDialog(dialog);
      }
      dialog.close();
     
    } else {
      // No user is signed in.
      var dialog = document.querySelector('#loginDialog');
      if (! dialog.showModal) {
        dialogPolyfill.registerDialog(dialog);
      }
      dialog.showModal();
     
    }
  });

$("#loginBtn").click(
    function(){
        var email = $("#loginEmail").val();
        var password = $("#loginPassword").val();

        if(email != "" && password !=""){
            $("#loginProgress").show();
            $("#loginBtn").hide();

            firebase.auth().signInWithEmailAndPassword(email,password).catch(function(error){
                $("#loginError").show().text(error.message);

                $("#loginProgress").hide();
                $("#loginBtn").show();
            });


        }


    }
);