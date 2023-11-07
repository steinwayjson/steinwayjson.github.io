//Задача о сортировке объектов: у вас есть массив объектов вида { name: 'John', age: 25 }. 
//Напишите код, который сортирует этот массив по возрастанию возраста, а при равных возрастах сортирует по алфавиту по полю name.

//1 Вариант - Без использования встроенного метода sort. Существует 4 способа сортировки:
//пузырьком, слиянием, вставками и быстрая. Для примера давайте возьмем сортировку слиянием, т.к.
//ее алгоритм будет оптимален при любом количестве данных. Если конкретики в этом параметре мы не имеем, то будем исходить из того, что данных много.

const mergeSort = (arr) => {
    //условия
    if (arr.length <= 1) {
        return arr;
    }

    //определим середину и разделим массив на 2 части
    const middle = Math.floor(arr.length / 2);
    const left = arr.slice(0, middle);
    const right = arr.slice(middle);
  
    return merge(mergeSort(left), mergeSort(right));
  }
  
const merge = (left, right) => {
    //объявим указатели и результирующий массив 
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;

    //запускаем цикл while
    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex].age < right[rightIndex].age || (left[leftIndex].age === right[rightIndex].age && left[leftIndex].name < right[rightIndex].name)) {
            result.push(left[leftIndex]);
            leftIndex++;
        } else {
        result.push(right[rightIndex]);
        rightIndex++;
        }
    }
    //записываем данные из половин в результирующий массив и передаем его дальше на разделение. Разделяй и влавствуй!
    return result.concat(left.slice(leftIndex), right.slice(rightIndex));
  }


//генератор данных для проверки 
const names = ['John', 'Alice', 'Bob', 'Eve', 'Charlie', 'David', 'Emma', 'Frank', 'Grace', 'Harry'];
const people = [];
//цикл генерации случайных данных
for (let i = 0; i < 50; i++) {  
    //случайное имя
    const randomName = names[Math.floor(Math.random() * names.length)];
    //случайный возраст от 20 до 69
    const randomAge = Math.floor(Math.random() * 50) + 20; 
    people.push({ name: randomName, age: randomAge });
}

const theSorted = mergeSort(people);
console.log(theSorted)