<h1 align="center">Undulatus Asperatus</h1>    
<p align="center"><img src="app/assets/images/cloud.png" width=150px height=150px/></p>
<p align="center">
<img src="https://img.shields.io/badge/Made%20with-JavaScript-orange.svg"/>
<img src="https://img.shields.io/badge/Rails-v5.1.4-red.svg"/>
<img src="https://img.shields.io/badge/npm-v3.10.7-blue.svg"/>
<img src="https://img.shields.io/badge/React-%5E16.2.0-green.svg"/>
<img src='https://img.shields.io/badge/Redux-%5E3.7.2-ff69b4.svg'/></p>

<h3>Description:</h3>
<p>Undulatus Asperatus is a platform to discover new music and share your own original compositions. Listen to the music of our many artists or create an account and begin uploading today!</p>

[Undulatus Asperatus](https://undulatus-asperatus.herokuapp.com/#/)

<h3>Features:</h3>
<ul>
<li>User accounts displaying a feed of their uploaded songs</li>
<li>Customizable song page containing artist information and user comments</li>
<li>Custom Media Player which stays with users throughout site navigation for easy access</li>
</ul>



<h3>Design Challenges:</h3>
<p>The most difficult aspect of this project was building the audio player.</p>

<p>The play and pause button use the html audio tag built in methods to play or pause the audio file but they also dispatch actions to a portion of the state which stores a boolean that is related to whether or not an audio file is playing. </p>
<p>This piece of state is important for having audio controls available in places other than the player such as being able to click on track artwork to pause or play a song.</p>

<p>The progress bar was a real challenge because there are many possible solutions which each have their own pros and cons.
I originally structured it as a pair of nested div tags where the inner tag started with a width of zero and had its width constantly adjusted by calculating the percentage of the song completed and then setting the width to a percentage of the parent div width.  This allowed the progress bar to appear to fill in as the song progressed.</p>
<p>However, in order to create a thumb which moved along the bar and was both draggable and would move to the position of a mouse click, I was attempting to use the native element coordinates and some difficult calculations and the code quickly became very bloated.</p>
<p>The final result uses the html progress tag.  I readjust the value attribute based on the current time of the song and set the max attribute to the duration. I also set an event listener which reassigns the current time of the audio file based on the value of the progress tag.  I then reset all of the progress tag styling and applied custom styling.</p>
