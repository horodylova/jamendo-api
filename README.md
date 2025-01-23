🎵 Jamendo Tracks API Server
This server allows you to fetch tracks from the Jamendo API by genre. It is part of a challenge to create an agent that interacts with external APIs.

🚀 Features
Fetch up to 20 tracks by genre.
Returns track titles and artists in JSON format.
Easy setup using environment variables.
🛠️ Installation and Setup
Clone the repository:

bash
git clone <repository-url>
cd <repository-folder>
Install dependencies:

bash
npm install
Set up your environment variables:

Register on Jamendo Developers to get your client_id.
Create a .env file in the root directory of the project:

CLIENT_ID=your_client_id
PORT=3000
Run the server:

bash
npm start
The server will be available at http://localhost:3000.

🧑‍💻 Usage
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
Postman Collection
You can use Postman to test the API:

URL: http://localhost:3000/api/tracks
Method: GET
Body:
json
 
{
  "genre": "jazz"
}


📝 Notes
Make sure to register at Jamendo Developers to get your unique client_id. Without it, the API requests will not work.
Update the CLIENT_ID in your .env file with the one you receive upon registration.


🤝 Contribution
Feel free to fork the repository, create issues, or submit pull requests. Contributions are always welcome!

🛡️ License
This project is licensed under the MIT License.







Вы сказали:
нет в ридми формате должно быть все 
ChatGPT сказал:
ChatGPT
Here's the updated README with proper formatting, using markdown for all headings, lists, and code blocks:

🎵 Jamendo Tracks API Server
This server allows you to fetch tracks from the Jamendo API by genre. It is part of a challenge to create an agent that interacts with external APIs.

🚀 Features
Fetch up to 20 tracks by genre.
Returns track titles and artists in JSON format.
Easy setup using environment variables.
🛠️ Installation and Setup
1. Clone the repository
bash
Копировать
Редактировать
git clone <repository-url>
cd <repository-folder>
2. Install dependencies
bash
Копировать
Редактировать
npm install
3. Set up your environment variables
Register on Jamendo Developers to get your client_id.
Create a .env file in the root directory of the project:
plaintext
Копировать
Редактировать
CLIENT_ID=your_client_id
PORT=3000
4. Run the server
bash
Копировать
Редактировать
npm start
The server will be available at http://localhost:3000.

🧑‍💻 Usage
API Endpoint
GET /api/tracks

Description: Fetches up to 20 tracks based on the genre provided in the request body.

Request Format:

Method: POST

Headers:

Content-Type: application/json
Body:

json
Копировать
Редактировать
{
  "genre": "jazz"
}
Response Example:

json
Копировать
Редактировать
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
Postman Collection
You can use Postman to test the API:

URL: http://localhost:3000/api/tracks

Method: POST

Body:

json
Копировать
Редактировать
{
  "genre": "jazz"
}
📝 Notes
Make sure to register at Jamendo Developers to get your unique client_id. Without it, the API requests will not work.
Update the CLIENT_ID in your .env file with the one you receive upon registration.
🤝 Contribution
Feel free to fork the repository, create issues, or submit pull requests. Contributions are always welcome!
