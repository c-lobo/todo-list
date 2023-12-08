let marked = []
let images = document.getElementsByClassName("img-button")

for (let image of images){
    if (image.src == "http://127.0.0.1:5500/images/check.jpg"){
        marked.push(image)
    }
}




function finished(done, pic) {
    
    let taskName = document.getElementById(done);
    let taskImage = taskName.querySelector('button img')
    if (taskImage.getAttribute('src') == 'images/check.jpg') {
        taskImage.setAttribute('src', pic)
    }
    else {
        taskImage.setAttribute('src', 'images/check.jpg')
    };

    if (taskImage.src == "http://127.0.0.1:5500/images/check.jpg") {
        marked.push(taskImage)
    }
    console.log(marked)

    isCheckmark()
    
}

function isCheckmark() {
    if (marked.length == images.length) {
        console.log("done")
    }
}
    
