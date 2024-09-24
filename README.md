## Features Of LCMS 🚀

- Admin Login and Student Login
- Admin and Student Dashboard
- Adding Library Members
- Adding Books with Available Copies
- Issue and Return Transaction tracking of a Book by the Member
- Reserving a book for specific dates
- Showing the Achievements, Event Gallery

## Setup 🔥

- Fork the Repo

- Clone the repo to your local machine
  `git clone <repo-url>`

### Frontend Setup 🍧

1. Get into the chatapp directory
   `cd frontend`

2. Run `yarn` to install dependencies

3. Create a `.env` file and create variables as mentioned in the `.env.example` with the values

4. Run `yarn start` to start the application

5. Register yourself as admin by running on api http://localhost:8888/api/auth/register

6. Pass the data in the following format:

{
"userType":"employee",
"userFullName":"",
"admissionId":1,
"age": 21,
"dob": "16-1-2002",
"gender": "Male",
"address": "",
"mobileNumber": 8497559410,
"email": "xxx@gmail.com",
"password": "xyz",
"isAdmin": false
}

### Backend Setup 🍿

1. Get into backend directory `cd backend`

2. Run `yarn` to install dependencies

3. Create a MongoDB account and get the MONOGO_URL for connecting the server and the Database

4. Create a `.env` file and create variables as mentioned in the `.env.example` with the values

5. Run `node server.js` to start the server [Should have installed nodemon globally]

## Technologies 🛠

- ReactJS[Hooks]
- NodeJs
- ExpressJs
- MongoDB

## References 💻

- [NodeJs Documentation](https://nodejs.org/en/docs/)
- [React Documentation](https://reactjs.org/docs/getting-started.html)

## Author 📝

- [@Satvik1769](https://www.github.com/Satvik1769)
