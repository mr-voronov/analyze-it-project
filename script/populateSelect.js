function populateSelect() {
    // console.log('populateSelect()');

    const searchInSelect = document.querySelector('#search-in-select');
    const searchForSelect = document.querySelector('#search-for-select');

    // definitely bug; two loops for populating two dropdown lists, have no idea why it doesn`t work for both simultaneously
    // counters for getting keys from obj with all the available data for comparison
    let keyIndexOne = 0;
    let keyIndexTwo = 0;

    // looping over available (and grouped) data to compare
    for (const key in dataToCompare) {
        const option = document.createElement('option');
        const dataKey = Object.keys(dataToCompare)[keyIndexOne]; // further to get data in 'dataVariables' by key

        option.append(dataToCompare[key]['textName']);
        // option.setAttribute('value', dataToCompare[key]['variable']);
        option.setAttribute('value', dataKey);

        searchForSelect.append(option);

        keyIndexOne++;
    }

    // same loop to populate two 'select' tags with options, have no idea why in one loop it populates only the last !
    for (const key in dataToCompare) {
        const option = document.createElement('option');
        const dataKey = Object.keys(dataToCompare)[keyIndexTwo];

        option.append(dataToCompare[key]['textName']);
        // option.setAttribute('value', dataToCompare[key]['variable']);
        option.setAttribute('value', dataKey);

        searchInSelect.append(option);

        keyIndexTwo++;
    }
}