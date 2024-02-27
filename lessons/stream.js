// Readable - чтение
// Writable - запись
// Duplex - Для стения и записи Readable и Writable
// Transform - Такой же, как Doplex, но может изменять данные по мере чтения

const fs = require('fs')
const path = require('path')

// fs.readFile(path.resolve(__dirname, 'test.txt'), (err, data) =>{
//     if(err){
//         throw err
//     }
//     console.log(data)
// })

// const stream = fs.createReadStream(path.resolve(__dirname, 'test.txt'))

//Один чант по 64кб
// stream.on('data', (chunk) => {
//     console.log(chunk)
// })
//
// stream.on('end', () => console.log('Закончили чтение'))
// stream.on('open', () => console.log('Начали чтение'))
// stream.on('error', (e) => console.log(e))

// const writableStream = fs.createWriteStream(path.resolve(__dirname, 'test2.txt'))
// for (let i = 0; i < 20; i++){                               1
//     writableStream.write(i + '\n')
// }
// writableStream.end()
// writableStream.close()
// writableStream.destroy()
// writableStream.on('error')

// const http = require('http');
//
// http.createServer((req, res) => {
//     //req - readable stream
//     //res - writable stream
//     const stream = fs.createReadStream(path.resolve(__dirname, 'test.txt'))
//
//     // Стрим закончит читать раньше чем пользователь скачает
//     stream.pipe(res)
// })