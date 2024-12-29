

import { BrowserRouter, Route, Routes } from "react-router"
import Body from "./components/Body"

function App() {  
 return (
    <>
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<Body/>}>
            <Route path="/" element={<div>Feed page</div>}/>
            <Route path="/login" element={<div>Login page</div>}/>
            <Route path="/connections" element={<div>Connections page</div>}/>
            <Route path="/profile" element={<div>Profile page</div>}></Route>
          </Route>
          
        </Routes>
      </BrowserRouter>
      
    </>
  )
}

export default App
