

Prayer Timings Dashboard
This project is a Prayer Timings Dashboard built with React and Material-UI. It displays prayer times for different cities in Saudi Arabia and shows a countdown timer to the next prayer. The timings are fetched from the Aladhan API.

Table of Contents
Features
Installation
Usage
Dependencies
Project Structure
License
Features
Displays the current date and time.
Fetches and displays prayer timings based on the selected city.
Countdown timer to the next prayer.
Allows users to select a city from a dropdown list.
Uses the moment.js library for date and time manipulation.
Responsive design using Material-UI components.
Installation

Copy code
npm install
Start the development server:

bash
Copy code
npm start
The application will be available at http://localhost:3000.

Usage
Once the application is running, you can view the current date, time, and prayer timings for a default city (Makkah).
You can change the city by selecting a different option from the dropdown menu. The prayer timings will automatically update.
The countdown timer will display the time remaining until the next prayer.
Dependencies
React: A JavaScript library for building user interfaces.
Material-UI: A popular React UI framework for building responsive and visually appealing components.
axios: A promise-based HTTP client for making API requests.
moment.js: A library for parsing, validating, manipulating, and formatting dates.
Aladhan API: Provides accurate prayer times.
Project Structure

                                                        لوحة عرض أوقات الصلاة

هذا المشروع هو لوحة عرض لأوقات الصلاة تم بناؤها باستخدام React وMaterial-UI. يعرض أوقات الصلاة لمدن مختلفة في المملكة العربية السعودية ويظهر عد تنازلي للوقت المتبقي حتى الصلاة القادمة. يتم جلب أوقات الصلاة من خلال API الخاص بمنصة Aladhan.

├── src
│ ├── components
│ │ ├── MainContent.js # Main component that contains the prayer timings dashboard
│ │ ├── Prayer.js # Prayer component that displays individual prayer times
│ ├── App.js # Main application file
│ ├── index.js # Entry point of the application
├── public
│ ├── index.html # Main HTML file
├── package.json # Project metadata and dependencies
└── README.md # Project documentation
#   P r a y e r - T i m i n g s  
 