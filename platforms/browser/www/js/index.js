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