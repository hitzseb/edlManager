let newsletterList = [];

getNewsletterList();

function fillTable(newsletterList) {
    const table = document.getElementById("newsletters-table");
    let tableHtml = '';
    for (let i = 0; i < newsletterList.length; i++) {
        tableHtml += `<tr>
        <td className="align-middle">${newsletterList[i].title}</td>
        <td className="align-middle" >${newsletterList[i].creationDate}</td>
        <td className="align-middle"><a href="/newsletter/${newsletterList[i].id}">Ver</a></td>
        <td className="align-middle"><a href="/newsletter/update/${newsletterList[i].id}">Editar</a></td>
        <td className="align-middle"><a href="" onclick="deleteNewsletter(${newsletterList[i].id})">Borrar</a></td>
        </tr>`
    }
    table.insertAdjacentHTML("beforeend", tableHtml);
}

function getNewsletterList() {
    fetch('/api/newsletter')
        .then(response => response.json())
        .then(data => {newsletterList = data, fillTable(newsletterList)})
        .catch(error => console.log(error));
}

function deleteNewsletter(id) {
    const url = `/api/newsletter/delete/${id}`;
    fetch(url, {method:'DELETE'})
        .then(response => {console.log(`Successfully deleted currency value with id: ${id}`),
            getNewsletterList()
        })
        .catch(error => {
            console.error(`Failed to delete currency value with id ${id}.`, error);
        });
}