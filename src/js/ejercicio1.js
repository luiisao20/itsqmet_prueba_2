const student1 = {
  name: "Luis Eduardo",
  lastName: "Bravo Arriciaga",
  grade: 9.8
}

const student2 = {
  name: "Maria Gabriela",
  lastName: "Bravo Arriciaga",
  grade: 7
}

const student3 = {
  name: "Josselyn Daniela",
  lastName: "Sanchez Moncayo",
  grade: 10
}

const student4 = {
  name: "Pedro Pablo",
  lastName: "Velasco",
  grade: 6.8
}

const student5 = {
  name: "Angelica Maria",
  lastName: "Reinoso Tapia",
  grade: 7.5
}

const student6 = {
  name: "Anellys Caroline",
  lastName: "Aviles Bravo",
  grade: 6
}

const students = [student1, student2, student3, student4, student5, student6]

const getAverageGrades = (array) => {
  let totalGrades = 0;

  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    totalGrades += element.grade;
  }

  const average = totalGrades / array.length;

  return average;
}

const average = getAverageGrades(students);

console.log(`El promedio de todos los estudiantes es: ${average.toFixed(2)}`);
