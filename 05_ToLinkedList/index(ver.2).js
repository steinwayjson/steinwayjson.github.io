//Разработайте функцию преобразования JSON в связный список. На входе функция должна получать JSON, 
//содержащий список объектов, на выходе объект, представляющий из себя односвязный список.

//Вариант 2. Метод Reduce 
const toLinkedList = (json) => {

    //проверка входных данных 
    if (!Array.isArray(json) || json.length === 0) {
        return null;
    }
    
    //используем метод reduce для построения односвязного списка
    const linkedList = json.reduceRight((next, obj) => ({
        data: obj,
        next
      }), null);
      
      console.log(linkedList);
      return linkedList;
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
  
toLinkedList(jsonData);
