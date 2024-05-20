// Завдання 2: Виконайте попереднє завдання але використовуючи конструкцію switch/case

    let averageGrade = Math.ceil(Math.random() * 100 + 1);
    console.log(`Average grade = ${averageGrade}`);

    switch (true) {
        case (averageGrade<60):
            console.log(`Insufficient`)
            break;
        case (averageGrade >=60 && averageGrade<=70):
            console.log(`Sufficient`);
            break;
        case (averageGrade >70 && averageGrade<=80):
            console.log(`Good`);
            break;
        case (averageGrade >80 && averageGrade<=90):
            console.log(`Very good`);
            break;
        case (averageGrade >90 && averageGrade<=100):
            console.log(`Excellent`);
            break;
        default:
            console.log(`Error: averageGrade = ${averageGrade}`);
    }