import { createContext, useState } from "react";
import AddPost from "./components/AddPost";
import DisplayPost from "./components/DisplayPost";

export const appContext = createContext();

function App() {
  const [post, setPost] = useState(appContext)
  return (
    <div className="container">
     <AddPost />
     <DisplayPost />
    </div>
  );
}

export default App;
