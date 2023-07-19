function buildNewsletter() {
    const title = document.getElementById("title").value;
    const url = document.getElementById("url").value;
    const image = document.getElementById("image").value;
    const preview = document.getElementById("preview").value;

    const secondaryNewsList = [];
    const secondaryNewsElements = document.querySelectorAll("#secondaryNewsList input[type='text']");
    const numberOfSecondaryNews = secondaryNewsElements.length / 2; // Dividir por 2 ya que hay dos campos por cada noticia secundaria

    for (let i = 0; i < numberOfSecondaryNews; i++) {
        const inputTitle = secondaryNewsElements[i * 2].value;
        const inputUrl = secondaryNewsElements[i * 2 + 1].value;
        const secondaryNews = {
            title: inputTitle,
            url: inputUrl,
        };
        secondaryNewsList.push(secondaryNews);
    }

    const incomingEventList = [];
    const incomingEventElements = document.querySelectorAll("#incomingEventList input[type='text']");
    const numberOfIncomingEvents = incomingEventElements.length / 4; // Dividir por 4 ya que hay cuatro campos por cada evento entrante

    for (let i = 0; i < numberOfIncomingEvents; i++) {
        const inputEventName = incomingEventElements[i * 4].value;
        const inputUrl = incomingEventElements[i * 4 + 1].value;
        const inputDay = incomingEventElements[i * 4 + 2].value;
        const inputMonth = incomingEventElements[i * 4 + 3].value;
        const incomingEvent = {
            name: inputEventName,
            url: inputUrl,
            day: inputDay,
            month: inputMonth,
        };
        incomingEventList.push(incomingEvent);
    }

    const newsletter = {
        title: title,
        url: url,
        image: image,
        preview: preview,
        secondaryNewsList: secondaryNewsList,
        incomingEventList: incomingEventList,
    };
    return newsletter;
}

function addSecondaryNews(secondaryNewsCounter) {
    const secondaryNewsList = document.getElementById("secondaryNewsList");
    const formHtml = `<div class="form-group" id="secondaryNews-${secondaryNewsCounter}">
        <label>Titulo:</label>
        <input class="form-control" type="text" name="secondaryNewsList[${secondaryNewsCounter}].title" required>
        <label>URL:</label>
        <input class="form-control" type="text" name="secondaryNewsList[${secondaryNewsCounter}].url" required>
        <button class="btn btn-link float-end" onclick="removeSecondaryNews(${secondaryNewsCounter})">Quitar</button>
        <br></div>`;

    // Incrementar el contador para el próximo subformulario
    secondaryNewsCounter++;

    // Agregar el formulario generado al final de la lista
    secondaryNewsList.insertAdjacentHTML('beforeend', formHtml);
}

function removeSecondaryNews(counter) {
    const secondaryNewsHtml =  document.getElementById("secondaryNews-" + counter);
    secondaryNewsHtml.remove();
}

function addIncomingEvent(incomingEventCounter) {
    const incomingEventList = document.getElementById("incomingEventList");
    const formHtml = `<div class="form-group" id="incomingEvent-${incomingEventCounter}">
        <label>Nombre:</label>
        <input class="form-control" type="text" name="incomingEventList[${incomingEventCounter}].name" required>
        <label>URL:</label>
        <input class="form-control" type="text" name="incomingEventList[${incomingEventCounter}].url" required>
        <label>Dia:</label>
        <input class="form-control" type="text" name="incomingEventList[${incomingEventCounter}].day" required>
        <label>Mes:</label>
        <input class="form-control" type="text" name="incomingEventList[${incomingEventCounter}].month" required>
        <button class="btn btn-link float-end" onclick="removeIncomingEvent(${incomingEventCounter})">Quitar</button>
        </div><br>`;

    // Incrementar el contador para el próximo subformulario
    incomingEventCounter++;

    // Agregar el formulario generado al final de la lista
    incomingEventList.insertAdjacentHTML('beforeend', formHtml);
}

function removeIncomingEvent(counter) {
    const incomingEventHtml =  document.getElementById("incomingEvent-" + counter);
    incomingEventHtml.remove();
}

function addSecondaryNews() {
    const secondaryNewsList = document.getElementById("secondaryNewsList");
    const formHtml = `<div class="form-group" id="secondaryNews-${secondaryNewsCounter}">
        <label>Titulo:</label>
        <input class="form-control" type="text" name="secondaryNewsList[${secondaryNewsCounter}].title" required>
        <label>URL:</label>
        <input class="form-control" type="text" name="secondaryNewsList[${secondaryNewsCounter}].url" required>
        <button class="btn btn-link float-end" onclick="removeSecondaryNews(${secondaryNewsCounter})">Quitar</button>
        <br></div>`;

    // Incrementar el contador para el próximo subformulario
    secondaryNewsCounter++;

    // Agregar el formulario generado al final de la lista
    secondaryNewsList.insertAdjacentHTML('beforeend', formHtml);
}

function removeSecondaryNews(counter) {
    const secondaryNewsHtml =  document.getElementById("secondaryNews-" + counter);
    secondaryNewsHtml.remove();
}

function addIncomingEvent() {
    const incomingEventList = document.getElementById("incomingEventList");
    const formHtml = `<div class="form-group" id="incomingEvent-${incomingEventCounter}">
        <label>Nombre:</label>
        <input class="form-control" type="text" name="incomingEventList[${incomingEventCounter}].name" required>
        <label>URL:</label>
        <input class="form-control" type="text" name="incomingEventList[${incomingEventCounter}].url" required>
        <label>Dia:</label>
        <input class="form-control" type="text" name="incomingEventList[${incomingEventCounter}].day" required>
        <label>Mes:</label>
        <input class="form-control" type="text" name="incomingEventList[${incomingEventCounter}].month" required>
        <button class="btn btn-link float-end" onclick="removeIncomingEvent(${incomingEventCounter})">Quitar</button>
        <br></div>`;

    // Incrementar el contador para el próximo subformulario
    incomingEventCounter++;

    // Agregar el formulario generado al final de la lista
    incomingEventList.insertAdjacentHTML('beforeend', formHtml);
}

function removeIncomingEvent(counter) {
    const incomingEventHtml =  document.getElementById("incomingEvent-" + counter);
    incomingEventHtml.remove();
}