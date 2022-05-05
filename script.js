// sets list of options available for comparing
window.addEventListener('load', populateSelect);


function analyzeData() {
    // console.log('analyzeData()');

    const chosenSearchOptions = readOptions();

    const comparisonResult = compareData(chosenSearchOptions);

    showResult(comparisonResult, '#root');
}

document.querySelector('#compare-lists').addEventListener('click', analyzeData);

document.querySelector('#clear-root').addEventListener('click', () => {
    document.querySelector('#root').textContent = '';
});