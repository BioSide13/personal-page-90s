if (localStorage.pageViews) {
    localStorage.pageViews = Number(localStorage.pageViews) + 1;
} else {
    localStorage.pageViews = 1;
}

document.getElementById("visitorCount").innerText = localStorage.pageViews.padStart(7, '0');