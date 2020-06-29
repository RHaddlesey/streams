import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import StreamCreate from "./streams/StreamCreate";
import StreamEdit from "./streams/StreamEdit";
import StreamDelete from "./streams/StreamDelete";
import StreamList from "./streams/StreamList";
import StreamShow from "./streams/StreamShow";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Route path="/" exact component={StreamList} />
          <Route path="/streams/new" component={StreamCreate} />
          <Route path="/streams/edit" component={StreamEdit} />
          <Route path="/streams/delete" component={StreamDelete} />
          <Route path="/streams/show" component={StreamShow} />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;

// ROUTER EXAMPLE
// const PageOne = () => {
//   return (
//     <div>
//       Page One
//       <Link to="/pagetwo">Navigate to page 2</Link>
//     </div>
//   );
// };

// const PageTwo = () => {
//   return (
//     <div>
//       Page Two
//       <Link to="/">Navigate to page 1</Link>
//     </div>
//   );
// };

// const App = () => {
//   return (
//     <div>
//       <BrowserRouter>
//         <div>
//           <Route path="/" exact component={PageOne} />
//           <Route path="/pagetwo" component={PageTwo} />
//         </div>
//       </BrowserRouter>
//     </div>
//   );
// };
