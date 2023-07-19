let secondaryNewsCounter = 0;
let incomingEventCounter = 0;

function saveNewsletter() {
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

    console.log(JSON.stringify(newsletter));

    const options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newsletter)
    };

    fetch('/api/newsletter/save', options)
        .then(response => response.json())
        .then(data => {window.location.href = "/newsletter";})
        .catch(error => console.log(error));
}