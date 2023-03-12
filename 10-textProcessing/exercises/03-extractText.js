function extractText(input) {
    let fileInfo = new Map();
    let path = input.split('\\');
    path = path[path.length - 1].split('.');
    if (path.length <= 2) {
        fileInfo.set('File name: ', path[0]);
        fileInfo.set('File extension: ', path[1]);
        // fileInfo.get('File extention: ').add(path[1])
    } else {
        let extention = path[path.length-1];
        path.pop()
        let name = path.join('.');
        fileInfo.set('File name: ', name);
        fileInfo.set('File extension: ', extention);
    }
    for (const key of fileInfo) {
        console.log(`${key[0]}${key[1]}`)
    }

} extractText('C:\\Internal\\training-internal\\Template.as.pptx')
console.log('------------------')
extractText('C:\\Projects\\Data-Structures\\LinkedList.asd.cs')
