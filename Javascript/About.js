//Goal: As the about section scrolls into view, expand the colored divs out


//check to see if the div is within view. if it is, slide it in. assistance with this portion of code came from https://gist.github.com/davidtheclark/5515733
function isDivVisible(el) {

    const rect = el.getBoundingClientRect();
    // DOMRect { x: 8, y: 8, width: 100, height: 100, top: 8, right: 108, bottom: 108, left: 8 }
    const windowHeight = (window.innerHeight || document.documentElement.clientHeight);
    const windowWidth = (window.innerWidth || document.documentElement.clientWidth);

    const vertInView = (rect.top <= windowHeight) && ((rect.top + rect.height) >= 0);
    const horInView = (rect.left <= windowWidth) && ((rect.left + rect.width) >= 0);

    return (vertInView && horInView);
}
//grab the color blocks
let blocks = document.getElementsByClassName('colorBlock')
//function to call when user scrolls.
function checkBlocks(){
  //loop through the divs and run
  for (let i = 0; i<blocks.length; i++){
    //adjust widths according to the visibility
    if (isDivVisible(blocks[i])=== true){
      blocks[i].style.width= 30 +'%';
    } else {
      blocks[i].style.width = 0 + '%';
    }
  }
}

window.addEventListener('scroll', ()=>checkBlocks())
