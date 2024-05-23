let newsIndex = 2;

function loadMore() {
    const newsSpace = document.getElementById('news_space');

    for (let i = newsIndex; i < newsIndex + 2 && i < newsList.length; i++) {
        const newsItem = document.createElement('div');
        newsItem.classList.add('news');

        const newsImg = document.createElement('div');
        newsImg.classList.add('news_img');
        const img = document.createElement('img');
        img.src = `${mediaUrl}${newsList[i].img.url}`;
        img.alt = 'Image';
        newsImg.appendChild(img);

        const infoBlock = document.createElement('div');
        infoBlock.classList.add('infoblock');

        const title = document.createElement('p');
        title.classList.add('title');
        title.textContent = newsList[i].title;

        const text = document.createElement('p');
        text.classList.add('text');
        text.textContent = newsList[i].text;

        const author = document.createElement('p');
        author.classList.add('author');
        author.textContent = newsList[i].author;

        const time = document.createElement('p');
        time.classList.add('time');
        time.textContent = newsList[i].time;

        infoBlock.appendChild(title);
        infoBlock.appendChild(text);
        infoBlock.appendChild(author);
        infoBlock.appendChild(time);

        newsItem.appendChild(newsImg);
        newsItem.appendChild(infoBlock);

        newsSpace.appendChild(newsItem);
        newsSpace.appendChild(document.createElement('hr'));
    }

    newsIndex += 2;

    if (newsIndex >= newsList.length) {
        document.querySelector('.load-more').style.display = 'none';
    }
}
