import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Home from './components/Home/Home';
import PostDetails from './components/PostDetails/PostDetails';
import Posts from './components/Posts/Posts';
import Products from './components/Products/Products';
import UserDetails from './components/UserDetails/UserDetails';
import Users from './components/Users/Users';
import Main from './layout/Main';

function App() {
  const router = createBrowserRouter([
    {path:'/', element:<Main></Main>, children: [
      {path:'/', element:<Home></Home>},
      {path:'home', element:<Home></Home>},
      {path:'about', element:<About></About>},
      {
        path:'users',
        loader: async () => {
          return fetch('https://jsonplaceholder.typicode.com/users');
        }, 
        element:<Users></Users>
      },
      {
        path:'/user/:userId',
        loader: async ({params}) => {
          return fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`);
        },
        element:<UserDetails></UserDetails>
      },
      {
        path:'posts',
        loader: async () => {
          return fetch('https://jsonplaceholder.typicode.com/posts');
        },
        element:<Posts></Posts>
      },
      {
        path:'/post/:postId',
        loader: async ({params}) => {
          return fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`);
        },
        element:<PostDetails></PostDetails>
      },
      {path:'products', element:<Products></Products>},
    ]}, 
    {path:'*', element:<div><h1 style={{color:'red'}}>Error 404 not found</h1></div>}
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
