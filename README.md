
<h1 align="center">Hi there, I'm [Svitlana Horodylova](https://www.linkedin.com/in/svitlana-horodylova/)!</h1> 


[![Typing SVG](https://readme-typing-svg.herokuapp.com?color=%2336BCF7&lines=This+is+Jamendo+Tracks+API+Server+🎵)](https://git.io/typing-svg)
 

This server allows you to fetch tracks from the Jamendo API by genre. It is part of a challenge to create an agent that interacts with external APIs.

---

## 🚀 Features

- Fetch up to 20 tracks by genre.
- Returns track titles and artists in JSON format.
- Easy setup using environment variables.

---

## 🛠️ Installation and Setup

### Clone the repository

```bash
git clone https://github.com/horodylova/jamendo-api
cd jamendo-api

3. Set up your environment variables
Register on Jamendo Developers to get your client_id.
Create a .env file in the root directory of the project:
plaintext
CLIENT_ID=your_client_id
PORT=3000

4. Run the server

bash
npm start
The server will be available at http://localhost:3000.

-----

## 🧑‍💻 Usage
API Endpoint
GET /api/tracks

Description: Fetches up to 20 tracks based on the genre provided in the request body.

Request Format:

Method: GET

Headers:

Content-Type: application/json
Body:

json
{
  "genre": "jazz"
}
Response Example:

json
{
  "success": true,
  "tracks": [
    {
      "title": "Jazz Song 1",
      "artist": "Artist 1"
    },
    {
      "title": "Jazz Song 2",
      "artist": "Artist 2"
    }
  ]
}

------

##  **Postman Collection**

You can use Postman to test the API:

URL: http://localhost:3000/api/tracks

Method: GET

Body:

json
{
  "genre": "jazz"
}

----


**📝 Notes**


Make sure to register at Jamendo Developers to get your unique client_id. Without it, the API requests will not work.
Update the CLIENT_ID in your .env file with the one you receive upon registration.

----

**🤝 Contribution**
Feel free to fork the repository, create issues, or submit pull requests. Contributions are always welcome!
