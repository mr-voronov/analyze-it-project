function readOptions() {
    // console.log('readOptions()');
    
    const searchInSelect = document.querySelector('#search-in-select');
    const searchForSelect = document.querySelector('#search-for-select');
    const searchOptions = document.querySelectorAll('input[name="search-option"]');

    // grouping all the chosen options in obj
    const chosenOptions = {
        "searchIn": "",
        "searchFor": "",
        "searchByFields": [],
    }

    // getting options from page
    chosenOptions.searchIn = searchInSelect.value;
    chosenOptions.searchFor = searchForSelect.value;

    searchOptions.forEach(elem => {
        if (elem.checked) chosenOptions.searchByFields.push(elem.value);
    });

    return chosenOptions;
}