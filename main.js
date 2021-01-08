var btn;
fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(user => {
        for (var i = 0; i < user.length; i++) {
            btn = document.createElement("button");
            btn.style.margin = "10px";
            btn.classList.add(user[i].id);
            btn.innerText = user[i].name;
            document.getElementById("userTab").appendChild(btn);
        }
        getPosts(user[0].id);
    }).catch("error with getting name user")
// User //
document.getElementById("userTab").addEventListener("click", function (event) {
    let id = event.target;
    userId = id.className;
    getPosts(userId);
})
var posts, li;
async function getPosts(Id) {
    var res = await fetch("https://jsonplaceholder.typicode.com/posts?userId=" + Id);
    posts = await res.json();
    console.log(posts);
    t(posts);
}
function t(arr) {
    document.getElementById("postTitleTab").innerHTML = "";
    arr.forEach(p => {
        li = document.createElement("li");
        li.innerText = p.title;
        document.getElementById("postTitleTab").appendChild(li);
    });
}