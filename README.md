# Volunteer Management Website

## Project Overview
The Volunteer Management Website is a user-friendly platform designed to facilitate volunteer recruitment and management. Users can create, update, and delete volunteer need posts and also volunteer for others' posts. This project ensures responsive design, secure database connections, and dynamic functionalities.

## Purpose
The purpose of this project is to simplify the process of managing volunteer opportunities, enabling organizations and individuals to collaborate effectively.

## Live URL
Live Website Link : https://ph-assignment-11-f2153.web.app

## Key Features
1. **Authentication**
   - Email/password-based login and registration.
   - Social login (Google/GitHub).
   - JWT authentication for secure private routes.



2. **Volunteer Posts**
   - Browse all volunteer need posts with search functionality.
   - "Be a Volunteer" option with real-time updates.

3. **Dynamic Design**
   - Fully responsive on mobile, tablet, and desktop.
   - Light/dark theme toggle.
   - Attractive and accessible UI with proper alignment and spacing.

4. **Additional Functionalities**
   - Dynamic website titles based on routes.
   - Loading spinners for data-fetching states.
   - Toast notifications for CRUD operations.
   - 404 Page for unmatched routes.

## Technologies Used
### Frontend
- **React**: Framework for building the user interface.
- **React Router**: For managing routes.
- **Tailwind CSS**: For styling.
- **DaisyUI**: For pre-built UI components.
- **React Icons**: For icons.
- **React Datepicker**: For date input fields.

### Backend
- **Node.js**: Server runtime environment.
- **Express.js**: Framework for building APIs.
- **MongoDB**: Database for storing data.
- **Mongoose**: Object Data Modeling (ODM) library for MongoDB.
- **JWT**: For authentication.
- **dotenv**: For environment variable management.
- **cors**: For handling cross-origin requests.

### Deployment
- **Frontend**: Deployed on Firebase.
- **Backend**: Deployed on Vercel.

## Pages and Layouts
1. **Navbar**
   - Includes website name/logo, Home, All Volunteer Posts, Login/Logout (conditional), and Profile dropdown.
   - Displays user photo and name when logged in.

2. **Home Page**
   - "Volunteer Needs Now" section displaying six posts sorted by upcoming deadlines.


3. **Volunteer Need Post Details**
   - Displays post details with a "Be a Volunteer" button.
   - Prevents volunteering if no slots are available.

4. **Add Volunteer Need Post**
   - Form to create a new post with relevant fields.

5. **Manage My Posts**
   - Allows updating and deleting posts in a tabular format.

6. **All Volunteer Posts**
   - Displays all posts with search and toggleable layout (card or table view).

7. **404 Page**
   - A user-friendly page displayed for unmatched routes.

## Security
- Firebase configuration keys and MongoDB credentials are secured using environment variables.
- Private routes are secured with JWT tokens.
