## Movie/TV Show API
##### This project is an API that provides a list of movies and TV shows. It allows authenticated users to create new movies or TV shows and allows guest users or logged-in normal users to view the list or individual details of a movie/TV show.

### Getting Started
#### Prerequisites
##### Make sure you have the following software installed:

##### 1.Node.js (LTS release)
##### 2.MongoDB (Community Edition)

### Installation
##### 1.Clone the repository:
##### git clone https://github.com/noman62/movie-tvShow-api
##### 2.Navigate to the project directory:
##### cd movie-tvShow-api
##### 3.Install dependencies:
##### npm install
##### 4.Configure the environment variables:
 ###### Create a .env file in the root directory.
 ###### Specify the following environment variables:
  ###### DB_CONNECTION_STRING: Connection string for your MongoDB database.
  ###### JWT_SECRET: Secret key for JWT token generation.
##### 5.Start the development server:
##### npm start
##### The server will start running at http://localhost:8000.
### Security Implementations
##### This project implements stateless authentication using JWT (JSON Web Tokens) and stores the tokens in cookies for authentication. The API endpoints require a valid JWT token to access protected routes. Users can authenticate by sending their credentials and receiving a JWT token, which they can include in subsequent requests in the Authorization header as a Bearer token.
