const array2D = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, -9]
];

function negsPerRow(arr, rowIdx) {
    return new Promise((resolve, reject) => {
        if (arr.length > rowIdx) {
            setTimeout(() => {
                arr[rowIdx].filter((e) => {
                    return e < 0;
                }).length > 0 ? resolve(`Found Evidence: ${arr[rowIdx]}`) : resolve
            }, 0);
        } else {
            reject(`Row Index ${rowIdx} must be within 0 and ${arr.length}`);
        }
    })
}

const negPromises = [];
for (let x = 0; x < array2D.length; x++) {
    negPromises.push(negsPerRow(array2D, x));
}

Promise.all(negPromises)
    .then(results => {
        results.forEach(result => {
            console.log(result);
        });
    })
    .catch(error => console.log(`Error Msg: ${error}`));