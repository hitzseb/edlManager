const url = window.location.href;
const id = url.split('/').pop();

let newsletter = {};

let secondaryNewsCounter = 0;
let incomingEventCounter = 0;

fetch(`/api/newsletter/${id}`)
    .then(response => response.json())
    .then(data => {newsletter = data,
        console.log(newsletter),
        document.getElementById('title').value = newsletter.title,
        document.getElementById('url').value = newsletter.url,
        document.getElementById('image').value = newsletter.image,
        document.getElementById('preview').textContent = newsletter.preview,
        secondaryNewsCounter = newsletter.secondaryNewsList.length,
        incomingEventCounter = newsletter.incomingEventList.length,
        renderSecondaryNews(newsletter),
        renderIncomingEvent(newsletter)
    })
    .catch(error => console.log(error));

function updateNewsletter() {
    const newsletter = buildNewsletter();

    const apiEndpoint = '/api/newsletter/update/' + id;

    const options = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newsletter)
    };

    fetch(apiEndpoint, options)
        .then(response => response.json())
        .then(data => {window.location.href = "/newsletter";})
        .catch(error => console.log(error));
}

function renderSecondaryNews(newsletter) {
    const secondaryNewslist = document.getElementById("secondaryNewsList");
    let formHtml = '';
    for (let i = 0; i < secondaryNewsCounter; i++) {
        formHtml += `<div class="form-group" id="secondaryNews-${i}">
        <label>Titulo:</label>
        <input class="form-control" type="text" name="secondaryNewsList[${i}].title" value="${newsletter.secondaryNewsList[i].title}" required>
        <label>URL:</label>
        <input class="form-control" type="text" name="secondaryNewsList[${i}].url" value="${newsletter.secondaryNewsList[i].url}" required>
        <button class="btn btn-link float-end" onclick="removeSecondaryNews(${i})">Quitar</button>
        <br></div>`;
    }
    secondaryNewslist.insertAdjacentHTML('beforeend', formHtml);
}

function renderIncomingEvent(newsletter) {
    const incomingEventList = document.getElementById("incomingEventList");
    let formHtml = '';
    for (let i = 0; i < incomingEventCounter; i++) {
        formHtml += `<div class="form-group" id="incomingEvent-${i}">
        <label>Nombre:</label>
        <input class="form-control" type="text" name="incomingEventList[${i}].name" value="${newsletter.incomingEventList[i].name}" required>
        <label>URL:</label>
        <input class="form-control" type="text" name="incomingEventList[${i}].url" value="${newsletter.incomingEventList[i].url}" required>
        <label>Dia:</label>
        <input class="form-control" type="text" name="incomingEventList[${i}].day" value="${newsletter.incomingEventList[i].day}" required>
        <label>Mes:</label>
        <input class="form-control" type="text" name="incomingEventList[${i}].month" value="${newsletter.incomingEventList[i].month}" required>
        <button class="btn btn-link float-end" onclick="removeIncomingEvent(${i})">Quitar</button>
        <br></div>`;
    }
    incomingEventList.insertAdjacentHTML('beforeend', formHtml);
}