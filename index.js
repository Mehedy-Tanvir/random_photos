const imageContainer = document.querySelector('.image-container');
const btn = document.querySelector('.btn');
btn.addEventListener('click', () => {

    addNewImages();
});
function addNewImages() {
    let imageNum = 10;
    for (let index = 0; index < imageNum; index++) {
        const newImg = document.createElement("img");
        newImg.src = `https://picsum.photos/200/300?random=${Math.floor(Math.random() * 2000) + 1}`;
        imageContainer.appendChild(newImg);

    }

}