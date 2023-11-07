//реализовать функцию конвертации JSON в строку
//нужно проверить к какому типу данных относится передаваемый аргумент и преобразовать каждый тип в строку 

const customJsonStringify = (obj) => {

//проверяем на примитивные типы данных:

    // если null – вернем строку null
    if (obj === null) {
            return 'null';
        }
        //если undefined – добавим кавычи, хотя, в спецификации по методу Stringify значение undefined не учитывается
        else if (typeof obj === undefined) { 
            return 'undefined';
        }
        //если number или boolean – вернем значение в строке
        else if (typeof obj === 'number' || typeof obj === 'boolean') {
            return obj.toString();
        }
        //если string 
        else if (typeof obj === "string") {
            //проверяем, есть ли уже кавычки
            if (obj.charAt(0) === '"' && obj.charAt(obj.length - 1) === '"') {
                return obj;
            }
            //если кавычек нет, то добавляем их
            return '"' + obj + '"';
    } 

    //если string – добавляем кавычки
    else if (typeof obj === "string") {
        return '"' + obj + '"';
    } 
    
//проверяем ссылочные типы данных:
    //если массив – каждый элемент рекурсивно преобразуем в строку и записываем в общий результирующий массив 
    else if (Array.isArray(obj)) {
        let result = [];
        obj.forEach(item => result.push(customJsonStringify(item)));
        return "[" + result.join(",") + "]";
        }

    //если объект – каждое свойство рекурсивно преобразуем в строку и записываем в общий результирующий массив
    else {
        let result = [];
        for (let prop in obj) {
            if (obj.hasOwnProperty(prop)) {
                result.push('"' + prop + '":' + customJsonStringify(obj[prop]));
            }
        }
        return "{" + result.join(",") + "}";
        }
    }
         
const data = { name: 'Лёха', age: 30, isStudent: false, hobbies: ['Гэмблинг', 'Крипта'] };
const jsonString = customJsonStringify(data);

console.log(jsonString);
console.log(`Результат равен JSON.stringify: ${data === JSON.stringify(data)}`);