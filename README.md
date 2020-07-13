
> Open this page at [https://nathanbrianroberts.github.io/temperature/](https://nathanbrianroberts.github.io/temperature/)

## Introduction to this project

This project will walk you though how to create a code that tells you the temperature of your enviroment you are in. You
wil be introduced to variables and inputs, as well as loops. 

The instructions are going to be in JavaScript. So please make sure you click onto JavaScript before moving onto the 
instructions. 

The most important part; have fun!

## Declaring your variable

A variable is a placeholder which stores values on the computers memory within the program. The best way to think of this is
to think of containers that store items. Each container can store one item at a time, and they have to be relivant. So your
may have one container that stores toys. So you start to place a toy into this container so it can be used later. You can 
not then place food into this container, only toys.

* On line 1, you will need to write: let Temperature = input.temperature()
* This now declares a new vairable that is going to store the temperature

## Creating a forever loop

A loop is a code that makes the computer repeat the instructions inside the loop over again until the condition has been met. 
The forever loop does this until the program has been killed (Stoped). 

* You will need to go to a new line (line 3)
* Then write basic.forever(function (){

})
* Inside the braces ( { }) you will be writing some more code

# Getting the computer to record the current temperature
Now we have created our forever loop, we are going to create the instructions for the computer to record the temperature 
under the Temperature variable. But first, we need to tell the computer to wait. 

* Move your mouse curser on a new line inbetween the braces ( { } ) for the forever loop
* Then write: basic.pause(3000). You can choose your own time in milliseconds (Which is the number in the parameter)
* Then write: Temperature = input.temperature()


# Displaying the results

Now you have created the Algorythem for the computer to use to record the current temperature and store it on a variable. we
are now going to create instructions that tell the computer to display the temperature variable when requested by the end user. 

* On a new line, under the forever loop, write: input.onButtonPressed(Button.A, function () {
    basic.showNumber(Temperature)
    basic.showString("Degrees C")
})

