// ErrorDisplay('warning', 'min besked');
// UserFeedback('warning','my msg','feedBack');


// Udvikler beskeder og kritiske alerts -------
export function ErrorDisplay(myType, myMessage) {

    switch (myType) {
        case 'alert':
            alert(myMessage);
            break;
        case 'warning':
            console.warn(myMessage);
            break;
        case 'error':
            console.error(myMessage);
            break;

        default:
            console.info(myMessage);
            break;

    }
}

// Bruger feedBack ------
export function UserFeedback(myType, myMessage, myId) {

    let myMessageElement = document.getElementById(myId);

    switch (myType) {
        case 'success':
            myMessageElement.innerText = `${myType}: ${myMessage}`;

            break;
        case 'warning':
            myMessageElement.innerText = `${myType}: ${myMessage}`;

            break;
        case 'error':
            myMessageElement.innerText = `${myType}: ${myMessage}`;

            break;

        default:
            myMessageElement.innerText = `${myType}: ${myMessage}`;
            break;

            
    }
}