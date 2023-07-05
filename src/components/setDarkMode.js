import { dom, articles} from '../data.js'

const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

for(let item of articles) {
    let articleBuilder = document.createElement('article');
    articleBuilder.classList.add('post');

    let title = document.createElement('h2');
    title.innerText = item.title;
    articleBuilder.appendChild(title);

    let postInfo = document.createElement('div');
    postInfo.classList.add('post-info');

    let formatDate = document.createElement('span');

    formatDate.innerText += `
    ${monthNames[item.date.getMonth() - 1]} ${item.date.getDate()}th ${item.date.getFullYear()}`;

    postInfo.appendChild(formatDate);

    let length = document.createElement('span');
    length.innerText = `${item.length} min read`;
    postInfo.appendChild(length);
    articleBuilder.appendChild(postInfo);

    let snippet = document.createElement('p');
    snippet.innerText = item.snippet;
    articleBuilder.appendChild(snippet);

    console.log(articleBuilder.outerHTML);

    dom.articlesContainer.innerHTML += articleBuilder.outerHTML;
}
