//Задача о сортировке объектов: у вас есть массив объектов вида { name: 'John', age: 25 }. 
//Напишите код, который сортирует этот массив по возрастанию возраста, а при равных возрастах сортирует по алфавиту по полю name.


//2 Вариант - С использованием метода sort.
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

//и используем метод 
people.sort((a, b) => {
    //сравниваем возраст
    if (a.age !== b.age) {
      return a.age - b.age;
    }
    //если возрасты равны, сравниваем по имени
    return a.name.localeCompare(b.name);
  });
  
console.log(people);