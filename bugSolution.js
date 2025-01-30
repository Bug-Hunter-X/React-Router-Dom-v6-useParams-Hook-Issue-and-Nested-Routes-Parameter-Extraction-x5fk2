// bugSolution.js
import {useParams} from 'react-router-dom';

function MyComponent() {
  const { id } = useParams();
  // Correct implementation, useParams is used within a route component
  return (
    <div> 
      {id}
    </div>
  );
}

export default MyComponent;

// Correct usage in nested routes

function ParentRoute(){
  return(
    <div>
      <Route path="/:id" element={<MyComponent/>}/>
    </div>
  );
}

//The solution involves restructuring the routes to ensure that the useParams hook is used within a component directly nested under the route that defines the parameters. 
//In the case of nested routes with dynamic segments, ensuring the route definitions correctly match the URL parameters is important.  Avoid attempting to use useParams within ancestor components that aren't directly related to the parameter definition in the path.