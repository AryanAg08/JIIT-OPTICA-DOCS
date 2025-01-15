import React from 'react';
import ProfileCards from "./community/team/ProfileCards";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
export default function Community() {
  return (
    <Router>
    <div>
    <h1 className="text-4xl font-bold text-center my-4 text-gray-800">Community</h1>
<p className="text-center text-lg text-gray-600 mb-6">Join our community discussions!</p>

<li className="list-none flex justify-center">
  <h1 className="flex justify-center mb-4">
    <Link 
      to="/community/team" 
      className="px-6 py-3 text-white bg-blue-500 rounded-lg shadow-lg hover:bg-blue-600 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 transition duration-200 ease-in-out"
    >
      Meet the Team
    </Link>
  </h1>
</li>

      <Switch>
          <Route path="/community/team" component={ProfileCards} />
        </Switch>
    </div>
    </Router>
  );
}
