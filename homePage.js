let user = JSON.parse(window.localStorage.getItem("userAuth"));

document.body.innerHTML = `<h1 class="pink">Hello ${user.displayName}</h1>`;


