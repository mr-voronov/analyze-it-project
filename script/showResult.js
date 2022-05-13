function showResult(dataObj, rootElem) {
    // console.log('showResult()');
    // console.log(dataObj);

    const article = document.createElement('article');

    for (const keyFile in dataObj) {

        for (const keyPerson in dataObj[keyFile]) {
            const section = document.createElement('section');
            const h3 = document.createElement('h3');
            const p = document.createElement('p');
    
            h3.textContent = `${keyPerson}`;
            p.textContent = `Файл: "${keyFile}"`
            section.append(h3, p);
    
            dataObj[keyFile][keyPerson].forEach( (elem, ind) => {
                const p = document.createElement('p');
    
                p.textContent = `${ind + 1}. ${elem}`;
                section.append(p);
            });
    
            article.append(section);
        }
    }

    document.querySelector(rootElem).append(article);
}