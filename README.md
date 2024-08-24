# StarStream

**Description:**
Movie Explorer is a full-stack web application designed to allow users to search for and explore detailed information about movies. This application integrates a React-based frontend with a Node.js/Express backend and leverages MongoDB for data storage. It also utilizes The Movie Database (TMDB) API to fetch movie data.

### Key Features:

1. **Search Functionality:**
   - Users can search for movies using keywords.
   - The application fetches and displays search results from TMDB API.

2. **Movie Details:**
   - Users can click on a movie to view detailed information, including the synopsis, cast, crew, and reviews.
   - The details page provides a comprehensive overview of the selected movie.

3. **User Authentication:**
   - The application includes user authentication, allowing users to sign up, log in, and log out.
   - User sessions are managed to provide a personalized experience.

4. **Favorites List:**
   - Logged-in users can add movies to their favorites list.
   - Users can view and manage their list of favorite movies.

5. **Responsive Design:**
   - The application is designed to be responsive and works well on both desktop and mobile devices.

### Technical Details:

**Frontend:**
- **Framework:** React
- **Styling:** CSS and Material-UI for responsive design.
- **State Management:** React hooks and context API for managing application state.
- **API Integration:** Axios for making HTTP requests to TMDB API and the backend server.

**Backend:**
- **Framework:** Node.js with Express.js
- **Database:** MongoDB for storing user data and favorite movies.
- **Authentication:** JSON Web Tokens (JWT) for secure user authentication and session management.
- **API Routes:** Defined routes for user actions such as login, signup, and managing favorites.

### Folder Structure:
- **Frontend:** Contains the React application.
  - **src/components:** React components such as MovieList, MovieDetail, and Navbar.
  - **src/pages:** Different pages like Home, Login, Signup, and Favorites.
  - **src/services:** Services for making API calls.

- **Backend:** Contains the Node.js server and API.
  - **controllers:** Functions to handle requests and business logic.
  - **models:** Mongoose models for MongoDB collections.
  - **routes:** Defines the API endpoints.
  - **middleware:** Middleware for authentication and error handling.

# Steps to Run the Project
<b>1. Clone the Repository:</b><br>
<pre>
git clone https://github.com/manni2000/Movie_Explorer.git
cd Movie_Explore
</pre>

<b>2. Install Dependencies:</b>   
<ul>
  <li><b>For Backend:</b><br>
    <pre>
cd backend
npm install
    </pre>
  </li>
  <li><b>For Frontend:</b><br>
    <pre>
cd ../frontend
npm install
    </pre>
  </li>
</ul>

<b>3. Set Up Environment Variables:</b><br>
Create a <code>.env</code> file in the <code>backend</code> directory and add the following:
<pre>
MONGODB_URL = mongodb+srv://username:&lt;password&gt;@cluster0.p6x7dxw.mongodb.net/mydb
PORT = 5000
TOKEN_SECRET = ABC
TMDB_BASE_URL = https://api.themoviedb.org/3/
TMDB_KEY = XXXX96bb4e2473d8c75b78591deXXXX
</pre>

<b>4. Start the Backend Server:</b>
<ul>
  <li><b>For Backend:</b><br>
    <pre>
cd backend
npm start
# or
npm run dev
    </pre>
  </li>
  <li><b>For Frontend:</b><br>
    <pre>
cd ../frontend
npm start
    </pre>
  </li>
</ul>


# Preview
 !["Home Page"](https://github.com/user-attachments/assets/43aa38a9-31b2-430d-b7d4-354a347bb686)




