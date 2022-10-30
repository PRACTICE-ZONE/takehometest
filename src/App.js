import { createContext, useState } from "react";
import AddPost from "./components/AddPost";
import DisplayPost from "./components/DisplayPost";

export const AppContext = createContext();

function App() {
  const [post, setPost] = useState(AppContext)
  return (
    <AppContext.Provider>
      <div className="container">
       <AddPost />
       <DisplayPost />
      </div>
    </AppContext.Provider>
  );
}

export default App;
