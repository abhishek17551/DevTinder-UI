

import { BrowserRouter, Route, Routes } from "react-router"
import Body from "./components/Body"
import Login from "./pages/Login"
import { Provider } from "react-redux"
import appStore from "./utils/store/appStore"
import Feed from "./pages/Feed"
import Profile from "./components/Profile"

function App() {  
 return (
    <>
      <Provider store={appStore}>
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<Body/>}>
            <Route path="/" element={<Feed/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/connections" element={<div>Connections page</div>}/>
            <Route path="/profile" element={<Profile/>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
      </Provider>
    </>
  )
}

export default App
