const array = ['a', 'b', 'c']
for (const key in array) {
    if (Object.hasOwnProperty.call(array, key)) {
        const element = array[key];
        console.log('element')
    }
}