//store the paths to the images that will be used as background images for the isDivVisible
const prodImages = ['images/chairs.JPG', 'images/brass-mix.JPG', 'images/glasses.JPG', 'images/booth-2.JPG']

//grab the divs that will serve as the image containers
let divs = document.getElementsByClassName('productImage')
//counter to represent the index for each product image.
let count = 0

for(let i = 0; i<divs.length; i++){
  //assign the image to the background
  divs[i].style.backgroundImage = `url(${prodImages[count]})`;
  //increase the index
  count++
}
