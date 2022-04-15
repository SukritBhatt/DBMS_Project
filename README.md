# DBMS Lab Project - Railway E-Ticketing Service
### Design of a fictional Railways Booking Service

## People behind

### Institute: [IIT Bhubaneswar](https://www.iitbbs.ac.in/)
### Course Instructor : [Dr. Padmalochan Bera](https://scholar.google.co.in/citations?user=_PJ8HK0AAAAJ&hl=en)

### The team:
- [Sukrit Bhatt](https://www.linkedin.com/in/sukritbhatt/)
- [Kushagra Gupta ](https://www.linkedin.com/in/kushagra-gupta-3827a4156/)
- [Satya Sangram Mishra](https://www.linkedin.com/in/satya-sangram/)


## Tools
### Front End
- [React](https://reactjs.org/)
    - Library for building user interfaces based on UI components
- [HTML, CSS, JavaScript](https://html-css-js.com/)
    - Regular content, styling, interactions, etc.


### Back End
- [Node](https://nodejs.org/en/)
    - For DB interactions, server get, server post, etc
- [Express](https://expressjs.com/)
    - Frameworks for providing abstract APIs to setup GET and POST routes over Node
- [MySQL](https://www.mysql.com/)
    - The RDBMS used for CRUD operations
    - Maintains relations, thus making data-fetch faster

## Features
- Login
      - Secure Login
      - Three types of users: Admin,Clerk,Passenger with varied functionalities available to them.
- Admin features
    - Add a new Station.
    - Add a new Train with coach and fare specifications.
    - Add route for the newly added train.
    - Add a clerk for a Station.
    - Get Revenue for a train for a particular date based on user bookings.
- Clerk features
    - Book a ticket on behalf of a passenger using email ID.
    - Check Trains based on From and To location.
    - Book Tickets based on Availability and Class Preference.
    - Print the Ticket.
- Passenger Features
    - Check Trains based on From and To location.
    - Book Tickets based on Availability and Class Preference.
    - Print the Ticket.
    - Acess to Dashboard to see All previous bookings.
    - Verify Ticket Status.
 - Non-Logged In User Features
    - Check Trains based on From and To location.
    - Verify Ticket Status.
    - Register as a new passenger.

## Usage
Here's the basic philosophy:

0. Install Node.JS in your local machine
1. Clone this repository (the top right green button)
2. Open using your favourite IDE ([VS Code](https://code.visualstudio.com/) is great!)
3. Install npm packages mentioned in the [package.json]
4. Setup mysql on your local machine.
5. Login to the mysql session as a new root user, create a database using the "database.sql" file.
6. Now,
    - Your node_modules are installed
    - DB is ready
7. So, open up the VS Code (or any IDE or no IDE also!) terminal in the project dir; `cd` into the `server` folder; then run
    `node run devStart` to start the server.
8. `cd` into the `client` folder; then run
    `node run start` to start the client.
9. Start playing with the site in your favourite browser @ localhost:3000

**N.B. : The user credentials for MySQL, the database name and the PORT - all need to properly set as environment variables. 
