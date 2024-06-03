document.addEventListener('DOMContentLoaded', function() {
    const searchButton = document.getElementById('search');
    const searchBar = document.getElementById('searchbar');
    const newsSpace = document.getElementById('news_space');
    const newsItems = newsSpace.querySelectorAll('.news');
    const hrElements = newsSpace.querySelectorAll('hr');

    searchButton.addEventListener('click', function() {
        const query = searchBar.value.toLowerCase();

        newsItems.forEach(function(newsItem, index) {
            const title = newsItem.querySelector('.title').innerText.toLowerCase();
            if (title.includes(query)) {
                newsItem.style.display = '';
                if (index < hrElements.length) {
                    hrElements[index].style.display = '';
                }
            } else {
                newsItem.style.display = 'none';
                if (index < hrElements.length) {
                    hrElements[index].style.display = 'none';
                }
            }
        });
    });
});
