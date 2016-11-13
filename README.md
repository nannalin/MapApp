# nannalin-project

Project for Engineering Candidate Nannalin Ongprasert

Create a simple web app using AngularJS (or similar framework) to display and edit a list of lat/lon coordinates representing [Pacific Crest Trail](http://en.wikipedia.org/wiki/Pacific_Crest_Trail) mile markers on a Google Map.

Requirements:

* Create an interface with Google Maps on the left and a mile marker UI on the right
* Manually load a list of PCT mile marker lat/lon coordinates into the browser's local storage
* Add, edit, delete PCT mile marker lat/lon coordinates from local storage using mile marker UI
* Update Google Maps display of PCT based on changes to PCT mile markers in local storage
* Search for nearest PCT mile marker given an arbitrary lat/lon (hint: Haversine)

The intention of this project is simply to give you a chance to solve a realistic programming problem on your own time, rather than sweating it out in front of a whiteboard. You can spend as long or as little time on this as you like. Feel free to impress us, but our hope is that it doesn't take much more than 5 hours.

## Before running the project
1. check if you have node install on your local machine by using the following command:

  $ node -v
  
  Note: If you do not have Node installed already, you can get it by downloading the package installer from Node's website (https://nodejs.org/en/) 
  
  Or if you use Mac, you can install on the command line by using the following command: 
  
  $ brew install node
  
2. install a HTTP server: 

  $ npm install http-server -g
  
## To run the project

1. open the command line 
2. go to a project directory on your machine
3. run the project by using the following command:

  $ http-server
4. open http://localhost:8080/
5. stop running the project by using the following command:

  $ Ctrl + c

