const child = require('child_process');
const fs = require('fs');

test('压缩图片文件', () => {
    const prevSize = fs.statSync('./test/test-img/test01.png').size;
    child.execSync('./bin/tinyimg tinyimg ./test/test-img/test01.png');
    const compressSize = fs.statSync('./test/test-img/test01.png').size;
    console.log(prevSize, compressSize);
    expect(prevSize > compressSize).toBe(true);
});