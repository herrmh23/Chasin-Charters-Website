
    let imageIndex = 1;
    let image = document.getElementById("mainImage");


// set base image index to 1





// declare function to change photo based on index
function showImage(imageIndex) {
    switch(imageIndex) {
        case 1:
            image.setAttribute('src', 'ChaseKing.jpg');
            image.setAttribute('alt', 'Captain Chase holding a large king salmon');
        break;
        case 2:
            image.setAttribute('src', 'ChaseDouble.jpg');
            image.setAttribute('alt', 'Captain Chase holding a king salmon and a walleye');
            break;
        case 3:
            image.setAttribute('src', 'ChaseWalleye.jpg');
            image.setAttribute('alt', 'Captain Chase holding a large walleye');
            break;
        case 4:
            image.setAttribute('src', 'ChaseBigBrown.jpg');
            image.setAttribute('alt', 'Captain Chase holding a large brown trout');
            break;
        case 5:
            image.setAttribute('src', 'ChaseBroken.jpg');
            image.setAttribute('alt', 'Captain Chase holding a rod broken in half');
            break;
    }
}

// adjust index based on button click
function raiseImageIndex() {
    imageIndex++;
    if(imageIndex > 5) imageIndex = 1;
    showImage(imageIndex);
}

function lowerImageIndex() {
    imageIndex--;
    if(imageIndex < 1) imageIndex = 5;
    showImage(imageIndex);
}

const next = document.getElementById('next');
next.addEventListener('click', raiseImageIndex);

const prev = document.getElementById('prev');
prev.addEventListener('click', lowerImageIndex);


showImage(imageIndex);

