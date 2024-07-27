# StarStream

    Fullstack Responsive Movie Explorer Application

# Technologies used:

<br> Frontend: React, Material-UI, React Router, Swiper, Formik, Yup, Axios </br>
<br> Backend: Node.js, Express, Mongoose, Express Validator, JWT </br>
<br> Database: MongoDB </br>
<br> API: The Movie Database (TMDB_API) </br>

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
MONGODB_URL = mongodb+srv://manish:&lt;password&gt;@cluster0.p6x7dxw.mongodb.net/mydb
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






