// Layout Types
import DefaultLayout from "./layouts/DefaultLayout"

// Route Views
import BlogOverview from './components/views/BlogOverview'

export default [
  {
    path: "/",
    exact: true,
    layout: DefaultLayout,
    component: BlogOverview
  }
];
