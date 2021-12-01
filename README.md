https://best-city-vote.web.app

## About
Best City Vote is a web-app that aims to collet data from web users about their favourite cities in the form of a survey. Users get to search for their city of choice, or create a new entry if their favourite city can not be found. After voting, users can then see how their choice stacks up in popularity to other cities through a bar graph showing all the cities and their respective vote counts.

## Learning Experience
The purpose for building this web-app was to gain web-development experience. In the implementation of this website I had to overcome many obstacles that ultimately expanded my knowledge.

One such obstacle was determining how to save the vote counts for each city, or how to allow users to add their own choices to the database. These questions propelled me to learn more about HTTP requests, servers, databases, RESTful API, and ultimately led to my discovery of the Firebase platform.

Another obstacle came in the form of the front-end development of the web-app. Thought the UI is very simple, I did not feel satisfied only using regular HTML, CSS, and vanilla JS. To build on my continued effort to grow as a developer, I decided to implement the UI using the ReactJS library. By doing so I earned experience with event handling and propagation, managing component states, as well as effectively using props.

## Potential Next Steps
A current problem with the web-app is the lack of proper locking mechanism to prevent users who have already voted to vote again. This allows any user to vote for multiple cities, or for the same city multiple times. One potential solution to this would be to use cookies to identify which devices have already votes and which did not. Though viable, this solution is not immune to fraud as users could potentially bypass this solution by clearing their cookies.

Another issue rises with from giving users the ability to add their own cities. This calls for some measure to insure that users are adding real cities with no typos. Such a solution could involve using Google Maps API to confirm that the added city exists. To take this idea further, a later iteration of this solution can include completely getting rid of stored city names and using external API for users to select their desired cities.
