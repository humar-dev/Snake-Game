let direction = {
    x: 0,
    y: 0
}


let board = document.getElementById("board");


const foodsound = new Audio('./music/food.mp3');
const gameoversound = new Audio('./music/gameover.mp3');
const backsound = new Audio('./music/music.mp3');
const movesound = new Audio('./music/move.mp3');
let speed = 5;
let lastpainttime = 0;
let snakearr =
    [
        {
            x: 13,
            y: 15
        }
    ]

let score = 0;
let a = 2;
let b = 16;
let food = { x: Math.round(a + (b - a) * Math.random()), y: Math.round(a + (b - a) * Math.random()) }



function main(ctime) {
    window.requestAnimationFrame(main);
    console.log(ctime);
    if ((ctime - lastpainttime) / 1000 < 1 / speed) {
        return;
    }
    lastpainttime = ctime;
    gameEngine();

}




  function isCollide(snakearr) {
    for (let i = 1; i < snakearr.length; i++) {
        if (snakearr[0].x === snakearr[i].x && snakearr[0].y === snakearr[i].y) {

            return true;
        }
        if (snakearr[0].x >= 19 || snakearr[0].x <= 0 || snakearr[0].y >= 19 || snakearr[0].y <= 0) {
            console.log("HIT the Boundary")
            return true;
        }
        
    }
  }




    function gameEngine() {
        backsound.play();
                // Move The snake
                for (let i = snakearr.length - 2; i >= 0; i--) {

                    snakearr[i + 1] = { ...snakearr[i] };
        
                }
        
                snakearr[0].x += direction.x;
                snakearr[0].y += direction.y;
        
        
        
        // Update the snake array
        

        if (isCollide(snakearr)) {
            gameoversound.play();
            backsound.pause();
            direction = { x: 0, y: 0 }
            alert("Game Over!! Press Any Key to Play Again!!");
            snakearr =
                [
                    {
                        x: 13,
                        y: 15
                    }
                ]
            backsound.play();
            score = 0;


        };


        //  if you have eaten the snake , increment the score and  regenerate the food 

        if (snakearr[0].y === food.y && snakearr[0].x === food.x) {
            score+=1;
            ScoreBox.innerHTML = "Score: " + score; 
            foodsound.play();

            snakearr.unshift({ x: snakearr[0].x + direction.x, y: snakearr[0].y + direction.y })

            food = { x: Math.round(a + (b - a) * Math.random()), y: Math.round(a + (b - a) * Math.random()) }
        }






//         //Display the snake 

//         board.innerHTML = "";
//         snakearr.forEach((e, index) => {
//             snakeElement = document.createElement('div');
//             snakeElement.style.gridRowStart = e.y;
//             snakeElement.style.gridColumnStart = e.x;
//             if (index === 0) {
//                 snakeElement.classList.add('snake')
//             }
//             else {
//                 snakeElement.classList.add('head')
//             }
//             board.appendChild(snakeElement);

//         })

//         //Display the Food

//         foodElement = document.createElement('div');
//         foodElement.style.gridRowStart = food.y;
//         foodElement.style.gridColumnStart = food.x;
//         foodElement.classList.add('food')
//         board.appendChild(foodElement)


//     }

//     window.requestAnimationFrame(main);

//     window.addEventListener('keydown', e => {

//         movesound.play()
//         console.log(e.key)
//         switch (e.key) {
//             case "ArrowUp":

//                 direction.y = -1;
//                 direction.x = 0;
//                 break;
//             case "ArrowDown":
//                 direction.y = 1;
//                 direction.x = 0;
//                 break;

//             case "ArrowLeft":
//                 direction.y = 0;
//                 direction.x = -1;
//                 break;

//             case "ArrowRight":
//                 direction.y = 0;
//                 direction.x = 1;
//                 break;



//         }

//     })