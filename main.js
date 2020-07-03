console.log('Lord bless this Code')
const parent=document.body
const divElement=document.createElement('main')
divElement.setAttribute('id', 'main')

document.body.append(divElement)

let coin = {
    state: 0,
    flip: function() {
        /* 1. Randomly set your coin object's "state" property to be either 
           0 or 1: use "this.state" to access the "state" property on this object.*/
            this.state=Math.floor(Math.random() * (2 - 0)) + 0;
    },
    toString: function() {
        /* 2. Return the string "Heads" or "Tails", depending on whether
           "this.state" is 0 or 1. */

           if (this.state === 0){
               return 'heads'
           }else{
            return 'tails'  
           }
    },
    toHTML: function() {
        let image = document.createElement('img');
        image.setAttribute("height", "50");
        image.setAttribute("width", "50");
        image.setAttribute("alt", "coin");
        image.setAttribute("class", "image")

        /* 3. Set the properties of this image element to show either face-up
           or face-down, depending on whether this.state is 0 or 1.*/
           if(this.state ===0){
image.src="./coin_heads.png"
           }else{
            image.src="./coin_tails.png"    
           }  
        return image;
    }
};

function display20Flips(){
    let strOne=''

    for(let indexFlip=1;indexFlip<=20;indexFlip++){
        coin.flip()
        strOne += (coin.toString() + ' ')
    }
    parent.append(strOne)
}

function display20Images(){
    let strTwo=''

    for(let indexImg=1;indexImg<=20;indexImg++){
        coin.flip()
        strTwo += coin.toHTML()
        divElement.append(coin.toHTML())
    }
}



display20Flips()
display20Images()