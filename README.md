# React Router Courses Project

## Project Description

This project demonstrates the use of React Router to organize routing between multiple pages in a React application. The pages include the Home page, Courses page, About page, and Contacts page. Routing is implemented using the `react-router-dom` library.

## Implemented Components

### 1. **App.jsx**

The main component that wraps the application with the `BrowserRouter` component to initiate routing. It uses the `Routes` component, which contains all the routes of the application.

### 2. **MainLayout.jsx**

A component that defines the main layout of the page. It includes a navigation menu (`Menu.jsx`) and uses the `Outlet` component to display child components based on the current route.

### 3. **Menu.jsx**

The navigation menu component that uses `NavLink` to create links to different pages (Home, About, Contacts, Courses). `NavLink` is used to highlight the active link by changing its style.

### 4. **Home.jsx**

A component that displays a message: "This is the Home page."

### 5. **About.jsx**

A component that displays information about the company.

### 6. **Contacts.jsx**

A component that displays contact information.

### 7. **Courses.jsx**

A component that displays a list of available courses. Users can sort courses by title, slug, or id through query parameters in the URL. The courses are presented as links to individual course pages.

### 8. **SingleCourse.jsx**

A component that displays information about a specific course. It retrieves the course parameter from the URL using the `useParams` hook and displays the relevant course data. If the course is not found, the user is redirected back to the courses page.

### 9. **NotFound.jsx**

A component that is displayed if the user navigates to a non-existent route.

## Routing Logic

1. **BrowserRouter**: Used to initialize routing, allowing the application to manage history and paths using the HTML5 history API.
2. **Routes and Route**:
   - The `Routes` component defines all the available routes in the application.
   - The `Route` component renders a specific component based on the current URL path.
3. **NavLink**: Used to create navigation links that automatically apply active styles to the current route.

4. **useParams**: A hook that provides access to dynamic URL parameters, such as the course slug in the `SingleCourse` component.

5. **useNavigate**: A hook that allows programmatic navigation between routes. For example, in `SingleCourse`, if the course is not found, `navigate` is called to return to the courses list.

6. **useLocation**: A hook that provides access to the current URL, including query parameters. It is used in the `Courses` component to sort courses based on query parameters passed via the URL.

7. **queryString**: A package used to parse query parameters from the URL to get the sorting key for displaying courses in a sorted order.

## How to Run the Project

1. Install all dependencies by running:

   ```bash
   npm install

   ```

2. Start the local development server:

   ```
   npm start

   ```

3. Open [http://localhost:3000/](http://localhost:3000/) in your browser to navigate between the components.
