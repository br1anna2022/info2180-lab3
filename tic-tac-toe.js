window.addEventListener("load",function(){ // waits till the page is finished loading//

    //finding elements//
	let board = document.getElementById("board");
    let squares = board.getElementsByTagName("div");
	let counter=0;
	let array = ["p","a","n","t","h","e","r","a","s"];
	let status= document.getElementById("status")
	let newgame= document.getElementsByTagName("button")

	//using a loop to go through a list of squares. It starts at the first square and keeps going until it reaches the last square. At each step, it does something with the square.  So, if a is initially 0, a++ will increase the value of a to 1. //
	for(let a = 0; a < squares.length; a++){


        squares[a].classList.add("square")
            //when the element is clicked, the code will run//
            squares[a].addEventListener('click',function(){
                //checks if a variable named "counter" is even and if the text content of the element is empty. If both conditions are true, the code inside the if statement will run.//
                if (counter%2==0 && squares[a].textContent==""){
                    //increases the value of "counter" by 1. Then, it adds the letter "X" to the element's text content. It also adds a class called "X" to the element.//
                    counter++
                    squares[a].textContent='X'
                    squares[a].classList.add('X');
                    array.splice( a, 1, 10 );
                    console.log(array)

                    //modifies an array by replacing the value at index "a" with the number 10. Finally, it checks if certain conditions are met with the array. If any of these conditions are true, it shows a message on the webpage that says "Congratulations! X is the Winner!".//
                    if (array[0]+array[1]+array[2] == 30 || array[3]+array[4]+array[5] == 30 || array[6]+array[7]+array[8] == 30 || array[1]+array[4]+array[7] == 30 || array[1]+array[3]+array[6] == 30 || array[2]+array[5]+array[8] == 30 || array[0]+array[4]+array[8] == 30 || array[2]+array[4]+array[6] == 30){
                        status.textContent="Congratulations!X is the Winner!"
                        status.classList.add('you-won')	
                        //Overall, this code is adding a class to an element and adding a function to be executed when the element is clicked. When the element is clicked, it updates the webpage to show the letter "X" and checks if the game has been won.//
                    }
                }
        //checking if a square on a game board is empty. If it is empty, it will put an "O" in that square. It will also update an array to keep track of the game state. Then, it checks if any player has won the game by checking if the sum of three squares in a row equals 60. If a player has won, it displays a message saying "Congratulations! O is the Winner!"//
     	else if ( squares[a].textContent==""){
     		counter++
     		squares[a].textContent='O'
     		squares[a].classList.add('O');
     		array.splice( a, 1, 20 );
     		console.log(array)
     		if (array[0]+array[1]+array[2] == 60 || array[3]+array[4]+array[5] == 60 || array[6]+array[7]+array[8] == 60 || array[0]+array[3]+array[6] == 60 || array[1]+array[3]+array[6] == 60 || array[2]+array[5]+array[8] == 60 || array[0]+array[4]+array[8] == 60 || array[2]+array[4]+array[6] == 60){
     			status.textContent="Congratulations!O is the Winner!"
     			status.classList.add('you-won')
     		}
     	}     
      });

    //adding some special effects to squares on a webpage when you hover your mouse over them. When you move your mouse over a square, it gets a class called "hover" added to it, which makes it look different. And when you move your mouse away, the "hover" class is removed, so it goes back to its original appearance. It's like when you tap on a button and it changes color, but when you let go, it goes back to its normal color.//
     squares[a].addEventListener('mouseover',function(){
     	squares[a].classList.add("hover")
     });

     squares[a].addEventListener('mouseleave',function(){
     	squares[a].classList.remove("hover")
     })
     	}

        //creating a new game board and adding an event listener to the first square on the board. When someone clicks on the square, the code does a bunch of things.

//It goes through each square on the board and removes any text or special formatting from them. Then it sets a list of letters: "p","a","n","t","h","e","r","a","s".The code also changes the text and formatting of a special area called "status". It tells the player to move their mouse over a square on the board and click to place an X or an O. The code also resets a counter to zero.//
     	newgame[0].addEventListener('click',function(){
     		for(let a = 0; a < squares.length; a++){
     			squares[a].className="square"
     			squares[a].textContent=""
     			array = ["p","a","n","t","h","e","r","a","s"]
     			status.textContent="Move your mouse over a square and click to play an X or an O."
     			status.className=""
     			counter=0
     		}
     	});
})