function roadRadar(speed,area){
    let status = ""
    let difference = 0;
    let speedLimit = 0;
    switch(area){
        case "motorway":
            if(speed > 130 && speed <= 150){
                status = "speeding";
                difference = speed - 130;
                speedLimit = 130;
                console.log(`The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - ${status}`)
            }else if(speed > 150 && speed <= 170){
                status = "excessive speeding";
                difference = speed - 130;
                speedLimit = 130;
                console.log(`The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - ${status}`)
            }else if(speed > 170){
                status = "reckless driving";
                difference = speed - 130;
                speedLimit = 130;
                console.log(`The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - ${status}`)
            } else{
                speedLimit = 130;
                console.log(`Driving ${speed} km/h in a ${speedLimit} zone`)
            }
        break
        case "interstate":
            if(speed > 90 && speed <= 110){
                status = "speeding";
                difference = speed - 90;
                speedLimit = 90;
                console.log(`The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - ${status}`)
            }else if(speed > 110 && speed <= 130){
                status = "excessive speeding";
                difference = speed - 90;
                speedLimit = 90;
                console.log(`The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - ${status}`)
            }else if(speed > 130){
                status = "reckless driving";
                difference = speed - 90;
                speedLimit = 90;
                console.log(`The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - ${status}`)
            } else{
                speedLimit = 90;
                console.log(`Driving ${speed} km/h in a ${speedLimit} zone`)
            }
        break
        case "city":
            if(speed > 50 && speed <= 70){
                status = "speeding";
                difference = speed - 50;
                speedLimit = 50;
                console.log(`The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - ${status}`)
            }else if(speed > 70 && speed <= 90){
                status = "excessive speeding";
                difference = speed - 50;
                speedLimit = 50;
                console.log(`The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - ${status}`)
            }else if(speed > 90){
                status = "reckless driving";
                difference = speed - 50;
                speedLimit = 50;
                console.log(`The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - ${status}`)
            } else{
                speedLimit = 50;
                console.log(`Driving ${speed} km/h in a ${speedLimit} zone`)
            }
        break
        case "residential":
            if(speed > 20 && speed <= 40){
                status = "speeding";
                difference = speed - 20;
                speedLimit = 20;
                console.log(`The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - ${status}`)
            }else if(speed > 40 && speed <= 60){
                status = "excessive speeding";
                difference = speed - 20;
                speedLimit = 20;
                console.log(`The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - ${status}`)
            }else if(speed > 60){
                status = "reckless driving";
                difference = speed - 20;
                speedLimit = 20;
                console.log(`The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - ${status}`)
            } else{
                speedLimit = 20;
                console.log(`Driving ${speed} km/h in a ${speedLimit} zone`)
            }
        break
    }
}
roadRadar(40, 'city')
roadRadar(21, 'residential')
roadRadar(120, 'interstate')
roadRadar(200, 'motorway')