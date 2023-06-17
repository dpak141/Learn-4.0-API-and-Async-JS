fetch("https://apis.scrimba.com/jsonplaceholder/posts")
  .then((res) => res.json())
  .then((data) => {
    const postArr = data.slice(0, 5);
    console.log(postArr);
    let html = "";
    for (let post of postArr) {
      html += `
        <h3>${post.title}</h3>
        <p>${post.body}</h3>
        <hr>
        `;
    }
    document.getElementById("blog-list").innerHTML = html;
  });
