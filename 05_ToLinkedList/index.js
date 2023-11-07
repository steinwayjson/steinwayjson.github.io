//Разработайте функцию преобразования JSON в связный список. На входе функция должна получать JSON, 
//содержащий список объектов, на выходе объект, представляющий из себя односвязный список.

//Связный список — это линейная структура данных, в которой элементы не хранятся в смежных ячейках памяти. 
//Элементы в связанном списке связаны с помощью указателей, т.е. состоят из узлов, 
//где каждый узел содержит поле данных и ссылку на следующий узел в списке.

//Вариант 1. Цикл 
const toLinkedList = (json) => {

    //проверка входных данных 
    if (!Array.isArray(json) || json.length === 0) {
      return null;
  }
  
    //head - называют первый (головной) элемент односвязного списка, он же и является стартовым
    const head = { data: json[0], next: null };
    let current = head; 
  
    //проходим по оставшимся элементам JSON и создаем узлы
    for (let i = 1; i < json.length; i++) {
    const newNode = { data: json[i], next: null };
    //связываем текущий узел с новым и перемещаем указатель
    current.next = newNode; 
    current = newNode; 
    }
    return head; 
  }
  
//преобразование JSON в односвязный список
const jsonData = [
  {
    "Manufacturer": "Acura",
    "Model": "MDX",
    "Year": 2013,
    "ID": 1
  },
  {
    "Manufacturer": "Acura",
    "Model": "RDX",
    "Year": 2013,
    "ID": 2
  },
  {
    "Manufacturer": "Acura",
    "Model": "TL",
    "Year": 2013,
    "ID": 3
  },
  {
    "Manufacturer": "Acura",
    "Model": "ILX",
    "Year": 2013,
    "ID": 4
  },
  {
    "Manufacturer": "Acura",
    "Model": "TSX",
    "Year": 2013,
    "ID": 5
  }
]

const linkedList = toLinkedList(jsonData);
console.log(linkedList);