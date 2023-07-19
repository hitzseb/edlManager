let secondaryNewsCounter = 0;
let incomingEventCounter = 0;

function saveNewsletter() {
    const newsletter = buildNewsletter()

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