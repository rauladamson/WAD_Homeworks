
//fetchOnlineData()
fetchJSONData()

function fetchJSONData() {
    fetch("message.json")
        .then((res) => res.text())
        .then((text) => {
            addPosts(text)
        })
        .catch((e) => console.error(e));
}

function createPost(data){
    let article = document.createElement("article");
    article.className = "post";
    let header = document.createElement("header");
    header.className = "post-header";
    let prof_pic = document.createElement("img");
    prof_pic.className = "profile-icon";
    prof_pic.src = data.user.profile_picture;

    document.getElementById("all_posts").appendChild(article)
}

function addPosts(json){
    const posts = JSON.parse(json)
    console.log(posts)
    const nr_of_posts = Object.keys(posts.posts).length
    console.log(nr_of_posts)
    console.log(posts.posts[1].user.profile_picture)
    //TODO: create loop for all posts
    //document.getElementById("all_posts").innerHTML = ""
}

function fetchOnlineData(){
    let req = new XMLHttpRequest();

    req.onreadystatechange = () => {
        if (req.readyState == XMLHttpRequest.DONE) {
            addPosts(req.responseText)
        }
    };

    req.open("GET", "https://api.jsonbin.io/v3/b/67237c12ad19ca34f8c1a220/latest", true);
    req.setRequestHeader("X-Master-Key", "$2a$10$H/9wkZrAnGEOWUYY3hH39.JsPFRkfBk.F.ZUNM8dFtccZtpgpagNK");
    req.setRequestHeader("X-Bin-Meta", "false")
    req.send();}