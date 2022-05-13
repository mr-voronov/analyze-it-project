function compareData(searchOptions) {
    // console.log('compareData()');

    // chosen options of data to compare stored in variable for brevity; got by 'option' value
    const searchIn = dataToCompare[searchOptions.searchIn]['variable'];
    const searchFor = dataToCompare[searchOptions.searchFor]['variable'];

    // search options array
    const searchFields = searchOptions.searchByFields;

    // returned result object
    const comparisonResult = {};

    // loping over data to compare
    searchFor.forEach( (elem, ind) => {
        const familyNameFor = elem['Прізвище'];
        const givenNameFor = elem['Ім\'я'];
        const middleNameFor = elem['По батькові'];
        const birthDateFor = elem['Дата народження'];

        const fileNameFor = elem['Файл оригінал'];

        // string key
        const combinedKeyFor = `${familyNameFor} ${givenNameFor} ${middleNameFor}, ${birthDateFor}`;

        searchIn.forEach( elem => {
            const familyNameIn = elem['Прізвище'];
            const givenNameIn = elem['Ім\'я'];
            const middleNameIn = elem['По батькові'];
            const birthDateIn = elem['Дата народження'];

            // condition 1 (searchFields: [1, 2, 3, 4]);
            if (searchFields.includes('1') && searchFields.includes('2') && searchFields.includes('3') && searchFields.includes('4')) {
                if (familyNameFor === familyNameIn && givenNameFor === givenNameIn && middleNameFor === middleNameIn && birthDateFor === birthDateIn) {
                    if (!comparisonResult[fileNameFor]) comparisonResult[fileNameFor] = [];
                    if (!comparisonResult[fileNameFor][combinedKeyFor]) comparisonResult[fileNameFor][combinedKeyFor] = [];

                    comparisonResult[fileNameFor][combinedKeyFor].push(`${familyNameIn} ${givenNameIn} ${middleNameIn}, ${birthDateIn}`);
                }
            }

            // condition 2 (searchFields: [1, 2, 3]);
            if (searchFields.includes('1') && searchFields.includes('2') && searchFields.includes('3') && !searchFields.includes('4')) {
                if (familyNameFor === familyNameIn && givenNameFor === givenNameIn && middleNameFor === middleNameIn && birthDateFor !== birthDateIn) {
                    if (!comparisonResult[fileNameFor]) comparisonResult[fileNameFor] = [];
                    if (!comparisonResult[fileNameFor][combinedKeyFor]) comparisonResult[fileNameFor][combinedKeyFor] = [];

                    comparisonResult[fileNameFor][combinedKeyFor].push(`${familyNameIn} ${givenNameIn} ${middleNameIn}, ${birthDateIn}`);
                }
            }

            // condition 3 (searchFields: [2, 3, 4]);
            if (!searchFields.includes('1') && searchFields.includes('2') && searchFields.includes('3') && searchFields.includes('4')) {
                if (familyNameFor !== familyNameIn && givenNameFor === givenNameIn && middleNameFor === middleNameIn && birthDateFor === birthDateIn) {
                    if (!comparisonResult[fileNameFor]) comparisonResult[fileNameFor] = [];
                    if (!comparisonResult[fileNameFor][combinedKeyFor]) comparisonResult[fileNameFor][combinedKeyFor] = [];

                    comparisonResult[fileNameFor][combinedKeyFor].push(`${familyNameIn} ${givenNameIn} ${middleNameIn}, ${birthDateIn}`);
                }
            }
        });

        // visual representation of processing data
        console.log(`searchFor ${ind} is done`);
    });

    return comparisonResult;
}