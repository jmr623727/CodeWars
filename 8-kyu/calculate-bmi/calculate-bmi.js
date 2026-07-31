// can assign a function inside paramaters
const bmi = (weight, height, bmi = weight/Math.pow(height, 2)) => 
    bmi <= 18.5 ? 'Underweight' :
    bmi <= 25.0 ? 'Normal' :
    bmi <= 30.0 ? "Overweight" : 
    bmi > 30 ? "Obese": 0
