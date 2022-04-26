var posts = [{
    "name": "Hetty Krupka",
    "body": "I went to the park today!",
    "timeStamp": new Date().toISOString().slice(0, 10), 
    "likes": 5,
    },
    {
    "name": "Hetty Krupka",
    "body": "It's my birthday today",
    "timeStamp": new Date().toISOString().slice(0, 10),
    "likes": 10,
  }];

var profileUsername = "Hetty Krupka";

function loadProfile() {
    document.getElementById("profile").innerHTML = profileUsername + '<br><button class="btn btn-primary" type="submit" id = "loginButton" onclick= "changeUser()">Log Out</button>';
}


function loadPosts(){
    var text = "";

    for (let i = 0 ; i < posts.length ; i ++){
        text = text +  '<div class="post"> <div class = "postName">' + posts[i].name + '</div>' + 
        '<div class = "postBody">' + posts[i].body + '</div>' + 
        '<div class = "postTime">' + posts[i].timeStamp + '</div>' + 
        '<div class = "postLikes">  <button onclick = "addLike(' + i + ')" >👍</button>' + posts[i].likes + '</div>' + 
        '</div>';
    }

    document.getElementById("postsSpan").innerHTML = text;
}

function addPost(){
    var newPost = document.getElementById('newPost').value;

    if ( newPost == ""){
        alert("Your post is empty!");
    }

    else {
        var newPostObject = {
            "name": profileUsername,
            "body": newPost,
            "timeStamp": new Date().toISOString().slice(0, 10), 
            "likes": 0,
            };
        posts.push(newPostObject);
        loadPosts();
        document.getElementById('newPost').value = "";

    }
    
}

function addLike(index) {
    posts[index].likes = posts[index].likes + 1;
    loadPosts();
}


function changeUser() {
    let promptText = "";
    let newUser = prompt("Please enter your username:", profileUsername);
     if (newUser == null || newUser == "") {
        promptText = "User cancelled the prompt.";
    } 
    
    else {
        profileUsername = newUser;
    }


    document.getElementById("profile").innerHTML = profileUsername + '<br><button class="btn btn-primary" type="submit" id = "loginButton" onclick= "changeUser()">Log Out</button>';


}