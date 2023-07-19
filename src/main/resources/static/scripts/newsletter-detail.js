const url = window.location.href;
const id = url.split('/').pop();

let newsletter = {};

fetch(`/api/newsletter/${id}`)
    .then(response => response.json())
    .then(data => {newsletter = data,
        console.log(newsletter),
        setBreadcrumb(newsletter),
        renderNewsletter(newsletter)
    })
    .catch(error => console.log(error));

function setBreadcrumb(newsletter) {
    const breadcrumb = document.getElementById("newsletter-title");
    let title = newsletter.title;
    breadcrumb.insertAdjacentHTML("beforeend", title);
}

function setSecondaryNewsHtml(newsletter) {
    let html = ``;
    for (let i = 0; i < newsletter.secondaryNewsList.length; i++) {
        html += `<tr>
            <td align="left" style="padding:10px;border-bottom:1px solid #666666;text-align:left">
            <span style="font-weight:bold;font-size:21px">
                <a href="${newsletter.secondaryNewsList[i].url}" style="color:#000000;text-decoration:none" target="_blank">${newsletter.secondaryNewsList[i].title}</a>
            </span>
            </td>
        </tr>`
    }
    return html;
}

function setIncomingEventHtml(newsletter) {
    let html = ``;
    for (let i = 0; i < newsletter.incomingEventList.length; i++) {
        html += `<td style="padding-right:5px;border-bottom:1px solid #aaaaaa" valign="top" width="50%">
            <table border="0" cellSpacing="0" style="margin-bottom:10px" width="100%">
                <tbody>
                <tr>
                <td>&nbsp;</td>
                </tr>
                <tr>
                                <td align="center"
                                    style="height:26px;line-height:14px;border:1px solid #aaaaaa;padding:5px 3px 4px 3px"
                                    valign="top" width="11%">
                                    <strong><span>${newsletter.incomingEventList[i].day}</span></strong><br>
                                    <span style="font-size:14px">${newsletter.incomingEventList[i].month}</span>
                                </td>
                                <td align="left" rowSpan="2" style="padding:0 10px" valign="top" width="89%">
                                                    <span style="font-size:18px">
                                                        <a href="${newsletter.incomingEventList[i].url}"
                                                           style="color:#000000;text-decoration:none" target="_blank">
                                                            <strong>${newsletter.incomingEventList[i].name}</strong>
                                                        </a>
                                                    </span>
                                </td>
                            </tr>
                            <tr>
                                <td>&nbsp;</td>
                            </tr>
                            </tbody>
                        </table>
                    </td>`
        if (i % 2 !== 0) {
            html += `</tr><tr>`
        }
    }
    return html;
}

function renderNewsletter(newsletter) {
    const newsletterHtml = `<tbody>
    <tr>
        <td align="left">
            <a href="http://www.escueladelenguas.unlp.edu.ar/" target="_blank"><img
                src="http://www.escueladelenguas.unlp.edu.ar/@@site-logo/logoEscuelaLenguas.png" width="325"
                height="45" alt="" className="CToWUd" data-bit="iit"></a>
        </td>
        <td align="right">
            <a href="https://www.facebook.com/EscueladeLenguasUNLP" title="Facebook" target="_blank"><img
                src="https://ci6.googleusercontent.com/proxy/A7MKiFjSSRnzEYhIrmBliG4OaNgJlKeq8Mrl2yc4MtBXLriALQl0YuCvUN7-gqBETkg8sIl01F0K7vQwmh2oDkNqYVTXhNnshvcbKwo=s0-d-e1-ft#https://www.fahce.unlp.edu.ar/imagenesboletin/facebook.png"
                alt="Facebook" style="padding:0 2px" className="CToWUd" data-bit="iit"></a>
            <a href="https://www.instagram.com/escuela_de_lenguas_unlp/" title="Instagram" target="_blank"><img
                src="https://ci3.googleusercontent.com/proxy/QDxDzBgeKBC02CtYbNyqprLTFU5Rp4RW9v5-xkKsmvqpHi87izpRbhLjavsMr5s6FBUcgdCcEO3yXHA6Wz2UiI0TW1vygpD_FeHkdnTW=s0-d-e1-ft#https://www.fahce.unlp.edu.ar/imagenesboletin/instagram.png"
                alt="Instagram" style="padding:0 2px" className="CToWUd" data-bit="iit"></a>
        </td>
    </tr>

    <tr>
        <td colSpan="2">


            <table border="0" cellPadding="0" cellSpacing="0" height="172" width="100%">
                <tbody>
                <tr>
                    <td>
                        <a href="${newsletter.url}" target="_blank"><img src="${newsletter.image}"
                                                                          width="656" height="329" alt=""
                                                                          className="CToWUd" data-bit="iit">
                        </a>
                    </td>
                </tr>
                <tr>
                    <td colSpan="2" align="left">
                        <h2
                            style="font-size:28px;color:#252525;font-weight:normal;margin:10px 0 0 0;line-height:33px;text-align:left">
                            <a href="${newsletter.url}" style="color:#252525;text-decoration:none"
                               target="_blank">${newsletter.title}</a>
                        </h2>
                        <p style="font-size:19px;color:#252525;margin:7px 0 17px 0;text-align:left">
                            ${newsletter.preview}<br><a href="${newsletter.url}"
                                                         style="color:#639f1f;text-decoration:underline"
                                                         target="_blank">Leer
                            mas...</a></p>
                    </td>
                </tr>
                </tbody>
            </table>


            <table border="0" cellPadding="0" cellSpacing="0" width="100%">
                <tbody>
                <tr>
                    <td align="left"
                        style="background-color:#8aca40;border-bottom:1px solid #8aca40;padding:4px 2px 0px 10px"
                        valign="middle" width="26%"><span
                        style="color:#ffffff;font-size:18px;font-weight:bold">NOTICIAS</span></td>
                    <td style="border-bottom:1px solid #8aca40" width="74%">&nbsp;</td>
                </tr>
                <tr>
                    <td colSpan="2" style="padding:6px 0">
                        <table border="0" style="background-color:#fbfbfb" width="100%">
                            <tbody>
                            
                            ${setSecondaryNewsHtml(newsletter)}

                            </tbody>
                        </table>
                    </td>
                </tr>
                <tr>
                    <td>&nbsp;</td>
                </tr>
                </tbody>
            </table>


            <table border="0" cellPadding="0" cellSpacing="0" width="100%">
                <tbody>
                <tr>
                    <td align="left"
                        style="background-color:#8aca40;border-bottom:1px solid #8aca40;padding:4px 2px 0px 10px"
                        valign="middle" width="19%">
                        <span style="color:#ffffff;font-size:18px;font-weight:bold;padding-left:10px">AGENDA</span>
                    </td>
                    <td style="border-bottom:1px solid #8aca40" width="81%">&nbsp;</td>
                </tr>
                <tr>
                
                    ${setIncomingEventHtml(newsletter)}

                </tr>
                </tbody>
            </table>
        </td>
    </tr>
    </tbody>`;
    let newsletterContainer = document.getElementById("newsletter-container");
    newsletterContainer.insertAdjacentHTML("beforeend", newsletterHtml);
}

