import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import TodoApp from "./presentation/ui/TodoApp";
import "tailwindcss/dist/tailwind.min.css"

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/" component={TodoApp} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
