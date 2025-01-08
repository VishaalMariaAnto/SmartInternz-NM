**Grocery App**

Overview
The Grocery App is a user-friendly platform designed to simplify grocery shopping. Customers can browse products, add items to their cart, place orders, and manage their profiles. Admins have dedicated features to manage inventory, user accounts, and order processing.

Features
*User Features:*

Browse and search for products.
Add/remove items from the cart.
Place and track orders.
Manage personal profiles.

*Admin Features:*

Add, update, or delete products.
View and manage user accounts.
Process and manage orders.

*Additional Features:*

Secure authentication with JWT.
Responsive design for desktop and mobile devices.

*Tech Stack*

Frontend
React.js: Dynamic, component-based UI.
React Router: Page navigation.
Axios/Fetch API: Backend communication.
Responsive Design: CSS and media queries.

Backend
Node.js: Server environment.
Express.js: RESTful API.
Mongoose: Database schema and interactions.
JWT: Secure authentication.

Database
MongoDB: NoSQL database to store users, products, and orders.
Getting Started

Prerequisites
Ensure you have the following installed:

Node.js: Version 16.20.2 or higher.
MongoDB: Local or cloud instance.
MongoDB url : https://cloud.mongodb.com


*Setup Instructions*

Clone the Repository

git clone https://github.com/VishaalMariaAnto/SmartInternz-NM.git

Navigate to the Project Directory

cd SmartInternz-NM

*Install Dependencies:*

Frontend:

cd client
npm install

Backend:

cd ../server
npm install

Environment Variables
Create a .env file in the server directory with the following keys:

makefile
MONGO_URI=<Your MongoDB URI>
JWT_SECRET=<Your Secret Key>
PORT=<Backend Port>
Run the Application

Frontend:

cd client
npm start

Backend:

cd ../server
npm start


Responsiveness: Some elements may not align perfectly on small devices.
Performance: Slow loading with large datasets.
Future Enhancements
Enhance UI for better responsiveness.
Add analytics for admins to track user behavior and app performance.

Contributors
Vishaal Maria Anto
Feby Yesudasan
Kinsman
Rooban J

License
This project is licensed under the MIT License. See the LICENSE file for details.
