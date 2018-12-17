import AboutPage from './pages/AboutPage';
import HomePage from './pages/HomePage';
import ContactsPage from './pages/ContactsPage';
import CoursesPage from './pages/courses/CoursesPage';
import EditCoursePage from './pages/courses/EditCoursePage';
import OrdersPage from './pages/orders/OrdersPage';
import OrderDetailsPage from './pages/orders/OrderDetailsPage';
import LoginPage from './pages/LoginPage';
import UsersPage from './pages/users/UsersPage';
import ManageUser from './pages/users/ManageUser';

const routes = [
  {
    path: "/home",
    component: HomePage,
    isPrivate: false
  },
  {
    path: "/login",
    component: LoginPage,
    isPrivate: false
  },
  {
    path: "/about",
    component: AboutPage,
    isPrivate: false
  },
  {
    path: "/contacts",
    component: ContactsPage,
    isPrivate: false
  },
  {
    path: "/users",
    component: UsersPage,
    isPrivate: true
  },
  {
    path: "/users/:id",
    component: ManageUser,
    isPrivate: true
  },
  {
    path: "/courses",
    component: CoursesPage,
    isPrivate: true
  },
  {
    path: "/courses/:id",
    component: EditCoursePage,
    isPrivate: true
  },
  {
    path: "/orders",
    component: OrdersPage,
    isPrivate: true
  },
  {
    path: "/orders/details/:id",
    component: OrderDetailsPage,
    isPrivate: true
  }
];

export default routes;