
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
    document.getElementById("all_posts").appendChild(article)

    let header = document.createElement("header");
    header.className = "post-header";
    article.appendChild(header);

    let prof_pic = document.createElement("img");
    prof_pic.className = "profile-icon";
    prof_pic.src = "images/prof_pics/" + data.user.profile_picture;
    prof_pic.alt = "User Icon"
    header.appendChild(prof_pic);

    let date = document.createElement("h4");
    date.className = "post-date";
    date.textContent = data.date;
    header.appendChild(date);

    if (data.image != null){
        let post_pic = document.createElement("img");
        post_pic.src = "images/post_pics/" + data.image;
        post_pic.alt = "Tartu 2022";
        post_pic.className = "post-image";
        article.appendChild(post_pic);
    }

    let post_text = document.createElement("p");
    post_text.textContent =data.text;
    post_text.className = "post-text";
    article.appendChild(post_text);

    let like = document.createElement("img");
    like.className = "like-icon";
    like.src = "images/thumb_up_24dp_434343_FILL0_wght400_GRAD0_opsz24.svg"
    like.alt = "Like Icon";
    article.appendChild(like);
}

function addPosts(json){
    const posts = JSON.parse(json)
    console.log(posts)
    const nr_of_posts = Object.keys(posts.posts).length
    console.log(nr_of_posts)

    for (let i = 0; i < nr_of_posts; i++) {
        createPost(posts.posts[i])
    }
}

function fetchOnlineData(){
    let req = new XMLHttpRequest();

    req.onreadystatechange = () => {
        if (req.readyState === XMLHttpRequest.DONE) {
            addPosts(req.responseText)
        }
    };

    req.open("GET", "https://api.jsonbin.io/v3/b/67237c12ad19ca34f8c1a220/latest", true);
    req.setRequestHeader("X-Master-Key", "$2a$10$H/9wkZrAnGEOWUYY3hH39.JsPFRkfBk.F.ZUNM8dFtccZtpgpagNK");
    req.setRequestHeader("X-Bin-Meta", "false")
    req.send();}