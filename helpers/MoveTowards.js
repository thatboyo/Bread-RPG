export function moveTowards(person, destinationPosition, speed) {
    let distanceToTravelX = destinationPosition.x - person.position.x;
    let distanceToTravelY = destinationPosition.y - person.position.y;

    let distance = Math.sqrt(distanceToTravelX**2 + distanceToTravelY**2);

    if (distance <= speed) {

        person.position.x = destinationPosition.x;
        person.position.y = destinationPosition.y;
        return 0; 
    } else {
        let normalizedX = distanceToTravelX / distance;
        let normalizedY = distanceToTravelY / distance;

        person.position.x += normalizedX * speed;
        person.position.y += normalizedY * speed;

       
        let remainingX = destinationPosition.x - person.position.x;
        let remainingY = destinationPosition.y - person.position.y;
        return Math.sqrt(remainingX**2 + remainingY**2);
    }
}
