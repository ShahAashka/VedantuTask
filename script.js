// var ourRequest = new XMLHttpRequest();
// ourRequest.open('GET','https://api.github.com/users/supreetsingh247');
// ourRequest.onload = function(){
//     var ourData = JSON.parse(ourRequest.responseText);
//     console.log(ourData)
// };
// ourRequest.send();

fetch('http://api.github.com/users/supreetsingh247?access_token=31ea4499af3645ffbde121a4eab4c80c28e641df')
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    document.getElementById('avatar').src = myJson.avatar_url;
    document.getElementById("name").innerHTML=myJson.name;
    document.getElementById("uname").innerHTML=myJson.login;
    document.getElementById("bio").innerHTML=myJson.bio;
    document.getElementById("location").innerHTML=myJson.location;
    document.getElementById("company").innerHTML=myJson.company;


  });