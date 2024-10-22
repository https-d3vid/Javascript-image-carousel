let ChangeButton = document.getElementById("ChangeButton")
let ChangeImage = document.getElementById("ChangeImage")


ChangeButton.addEventListener('click', function() {
    const images = [
        { src: 'images/sample.png', alt: 'image 1' },
        { src: 'images/sample2.png', alt: 'image 2' },
        { src: 'images/sample3.png', alt: 'image 3' }
    ];

    
    const randomIndex = Math.floor(Math.random() * images.length);
    
    
    ChangeImage.src = images[randomIndex].src;
    
});
