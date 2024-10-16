import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import Layout from '../Layout';
import Home from '../components/Home/Home';
import About from '../components/About/About';
import Contact from '../components/Contact/Contact';
import Github from '../components/Github/Github';
import User from '../components/User/User';
const router= createBrowserRouter([
    {
      path:'/',
      element:<Layout/>,
      children:[
        {
          path:'',
          element:<Home/>
        },
        {
          path:'about',
          element:<About/>
        },
        {
          path:'contact',
          element:<Contact/>
        },
        {
          path:'github',
          element:<Github/>
        },{
          path:'user/:userid',
          element:<User/>
        },{
          path:'*',//it works when the url is not in the routes, it should be at the end
          element:<div>Not found</div>
        }
      ]
    }
  ])
  export default router