import Car from '../interfaces/car';

export default function validateCar(car: Car) {
    return (
        'brand' in car && 
        'type' in car && 
        'milage' in car && 
        typeof car.brand === 'string' &&
        typeof car.type === 'string' &&
        typeof car.milage === 'number' &&
        (car.extras === undefined || Array.isArray(car.extras))
    );
}