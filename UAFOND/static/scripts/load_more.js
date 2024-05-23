var currentCount = 5;
var allNews = JSON.parse(document.getElementById("slideshow-container").getAttribute("data-news"));

function loadMore() {
    var container = document.getElementById("slideshow-container");
    
    for (var i = currentCount; i < currentCount + 5 && i < allNews.length; i++) {
        var newsItem = allNews[i];
        var newsHtml = '<div class="news"><div class="news_img"><img src="' + newsItem.img_url + '" alt="Image"></div><div class="infoblock"><p class="title">' + newsItem.title + '</p><p class="text">' + newsItem.text + '</p><p class="author">' + newsItem.author + '</p><p class="time">' + newsItem.time + '</p></div></div><hr>';
        container.innerHTML += newsHtml;
    }

    currentCount += 5;
}

document.getElementById("load-more-btn").addEventListener("click", loadMore);
