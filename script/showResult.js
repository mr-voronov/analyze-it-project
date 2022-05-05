function showResult(dataObj, rootElem) {
    // console.log('showResult()');

    const article = document.createElement('article');
    const h2 = document.createElement('h2');

    // total amount of matched data
    h2.append(`(загальна кількість: ${Object.keys(dataObj).length})`);
    article.append(h2);

    for (const keyPerson in dataObj) {
        const section = document.createElement('section');
        const h3 = document.createElement('h3');    

        h3.textContent = `Із "${keyPerson}" співпадають наступні особи:`;
        section.append(h3);

        dataObj[keyPerson].forEach( (elem, ind) => {
            const p = document.createElement('p');

            p.textContent = `${ind + 1}. ${elem}`;
            section.append(p);
        });

        article.append(section);
    }

    document.querySelector(rootElem).append(article);
}