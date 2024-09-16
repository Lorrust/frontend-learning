const student1 = {
    name: 'Brinn',
    grades: []
};

const student2 = {
    name: 'Pebbles',
    grades: []
};

const student3 = {
    name: 'Ulmind',
    grades: []
};

const students = [student1, student2, student3];

for (let student of students) {
    generateGrades(student, 5)
    average = calculateAverage(student.grades)
    console.log(`${student.name}'s Average: ${average}, ${approvedStatus(average)}`);
}

// function calculateAverage(grades) {
//     sum = 0;
//     grades.forEach(grade => sum += grade)
//     return (sum / grades.length).toFixed(1);
// }

function calculateAverage(grades) {
    let gradeSum = grades.reduce((total, current) => total + current);
    return (gradeSum / grades.length).toFixed(1);
}

function approvedStatus(averageGrade) {
    return averageGrade >= 7 ? "Approved": "Not Approved";
}

function generateGrades(student, amount) {
    for (let i = 0; i < amount; i++) {
        student.grades.push((Math.random() * 10));
    }
}