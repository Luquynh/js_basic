export class Calculator {
    addNumber(...numbers){
        return numbers.reduce((total, num) => total + num , 0);
    }

}