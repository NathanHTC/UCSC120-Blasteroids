This is a UCSC120 TEAM Project
created by Paradox Girl and Nathan Chan

Approx. Dev Time Line
Let’s try to finish the following by next Wesday, 28 Feb
Create the sprite
Adding new control to the spaceship. The player can move up, down, right, and left. 
the spaceship sprite will show its orientation. 
The spaceship will be able to shoot in all directions.
Spaceship needs to dodge or destroy incoming meteor, hit by meteor will drop HP bar
Player needs to collect coins to upgrade the spaceship
Player needs to collect fuel 
The viewport will be larger, at 1200px width 800px height and the player will be respawned in the middle. 
Adding a fuel bar that sits on top of the viewport to show how much fuel is left, once the player runs out of fuel 
or Hp is 0 the game is over.

Lets try to finish the following by  5th March
adding 3 phases of the game, the first 20 seconds will be easy, the meteor will be moving at a constant speed; 
starts from 20s the speed of meteor will increase by 50%, 
from 40s and the meteor will fly towards the player from all directions.
New Store menu where a player can use the collected coins to upgrade their aircraft, for instance, upgrade
the propellant system to increase its maneuvering speed.
Upgrade the fire to double-barreled or even triple-barreled. Increase the flying speed of the bullet. 

3 DAYS buffer for debugging

The in-class first Demo due on 8th March

9 DAYS for add-ons 

Upgrade to a bigger, more powerful aircraft that can take on more damage
If I have additional time, I will implement the following stretch goals (in this order)
When they reach 200 points, New weaponry will be unlocked laser and if they reach 250 points RAILGUN will be unlocked.
Adding two-player mode so two players can compete with each other
Players can choose to sign up for a player account; implement user authentication, password hashing, session management,
and Mongo/postgres database storage/retrieval of user data. There will be a scoreboard below the game 
window that dynamically loads high scores from players by an SSR nextjs component, tailwind styling
.

Assets:
Pixel typeface for menu, high score, credits, and in-game score text
spacecraft sprite and modified spacecraft sprite[larger propeller etc]
Space sprite sheet
Meteor sprites, fuel sprite
explosion animation
Railgun animation
Particle animation for enemy elimination and item collection
Sound effects for game start, shooting, item collection, and explosion
Background music
