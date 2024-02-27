const path = require('path')

console.log('Склеить участки пути',path.join(__dirname, 'first', 'second'))
console.log('Склеить участки пути',path.join(__dirname, '..', '..'))
console.log('Получить абсолютный путь',path.resolve('first', 'second'))

const fullpath = path.resolve('first', 'second.js')
console.log('Парсинг пути', path.parse(fullpath))
console.log('Разделить в ОС', path.sep)
console.log('Проверка на абсолютный путь', path.isAbsolute('first/second'))
console.log('Название файла', path.basename(fullpath))
console.log('Расширение файла', path.extname(fullpath))

const siteURL = 'http://localhost:8080/users?id=5123'
const url = new URL(siteURL)
console.log(url)