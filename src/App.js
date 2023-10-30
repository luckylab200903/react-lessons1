import React,{lazy,Suspense} from "react";
import ReactDOM from "react-dom/client";
import Contact from "./components/Contact";
import Header from "./components/Header";
import About from "./components/About";
import Error from "./components/Error";
import Footer from "./components/Footer";
import Cart from "./components/Cart";
import Body from "./components/Body";
import Restraranmenu from "./components/Restraranmenu";
import {createBrowserRouter,Outlet,RouterProvider} from "react-router-dom";
// import Grocery from "./components/Grocery";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";

const AppLayout = () => {
  return (
      <div className="app">
          <Provider store={appStore}>
              <Header />
              <Suspense fallback={<div>Loading...</div>}>
                  <Outlet />
              </Suspense>
              <Footer />
          </Provider>
      </div>
  );
}


const Grocery=lazy(()=>import("./components/Grocery"))
const Approuter = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      children: [
        {
          path: "/",
          element: <Body />
        },
        {
          path: "/about",
          element: <About />
        },
        {
          path: "/contact",
          element: <Contact />
        },
        {
          path: "/grocery",
          element: <Grocery />
        },
        {
          path: "/restaurant/:resId",
          element: <Restraranmenu />
        },
        {
          path: "/cart",
          element: <Cart />
        }
      ]
    }
  ]);
  


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={Approuter} />)




















































// import React from "react";
// import ReactDOM from "react-dom/client";

// const Header=()=>{
//     return( <div className="header">
//         <div className="logo-conatiner">
//             <div className="logo">
//                 <img src="https://1000logos.net/wp-content/uploads/2021/05/Swiggy-logo.png"/>
//             </div>
//         </div>
//             <div className="Nav-bar">
//             <ul>
//                 <li>Home</li>
//                 <li>About Us</li>
//                 <li>Conatct Us</li>
//                 <li>Cart</li>
//             </ul>
//             </div> 
//     </div>)
// }

// const AppLayout = ()=>{
//     return (<div className="app">
//         <Header />
//     </div>)
// }
// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(<AppLayout />)




















































































// const parent = React.createElement('div', { id: 'parent' }, [
//     React.createElement('div', { id: 'child' }, [
//         React.createElement('h1', {}, 'i am an h1 tag'),
//         React.createElement('h2', {}, 'i am an h2 tag')
//     ]),
//     React.createElement('div', { id: 'child2' }, [
//         React.createElement('h1', {}, 'i am an h1 tag'),
//         React.createElement('h2', {}, 'i am an h2 tag')
//     ])
// ]);

// console.log(parent);

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(parent);


// const parent = React.createElement(
//     'div',{ id: 'parent' },
//     React.createElement('div', { id: 'child' }),
//     React.createElement('div',{ id: 'child2' },
//     React.createElement('h1', { id: 'heading' }, 'this is the h1 tag'),
//     React.createElement('p', { id: 'paragraph1' }, 'this is the paragraph tag'),
//     React.createElement('p', { id: 'paragraph2' }, 'this is the paragraph 2 tag')
//     ),
//     React.createElement(
//     'div',
//     { id: 'child3' },
//     React.createElement('h1', { id: 'heading' }, 'this is the h1 tag'),
//     React.createElement('p', { id: 'paragraph1' }, 'this is the paragraph tag'),
//     React.createElement('p', { id: 'paragraph2' }, 'this is the paragraph 2 tag')
//     )
// );

// console.log(parent);

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(parent);



// const parent = React.createElement(
//     'div',
//     { id: 'parent' },
//     React.createElement('div', { id: 'child' }),
//     [React.createElement('h1', { id: 'heading' }, 'this is the h1 tag',
//         React.createElement('p', { id: 'paragraph1' }, 'this is the paragraph tag'),
//         React.createElement('p', { id: 'paragraph2' }, 'this is the paragraph 2 tag')
//     )]
//     );
//     console.log(parent)
//     const root=ReactDOM.createRoot(document.getElementById("root"))
//     root.render(parent);
    

// const parent = React.createElement(
//     'div',
//     { id: 'parent' },
//     React.createElement('div', { id: 'child' }),
//     React.createElement('h1', { id: 'heading' }, 'this is the h1 tag',
//         React.createElement('h2', { id: 'heading2' }, 'this is the heading 2 tag')
//     )
//     );

// console.log(heading)
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(parent);