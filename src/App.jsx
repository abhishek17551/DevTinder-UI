

import { BrowserRouter, Route, Routes } from "react-router"
import Body from "./components/Body"
import Login from "./components/Login"

function App() {  
 return (
    <>
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<Body/>}>
            <Route path="/" element={<div>Feed page</div>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/connections" element={<div>Connections page</div>}/>
            <Route path="/profile" element={<div>Profile page</div>}></Route>
          </Route>
          
        </Routes>
      </BrowserRouter>
      
    </>
  )
}

export default App
