

import { BrowserRouter, Route, Routes } from "react-router"
import Body from "./components/Body"
import Login from "./pages/Login"
import { Provider } from "react-redux"
import appStore from "./utils/store/appStore"
import Feed from "./pages/Feed"
import Profile from "./components/Profile"
import Connections from "./pages/Connections"
import Requests from "./pages/Requests"
import Chat from "./components/Chat"

function App() {  
 return (
    <>
      <Provider store={appStore}>
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<Body/>}>
            <Route path="/" element={<Feed/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/connections" element={<Connections/>}/>
            <Route path="/requests" element={<Requests/>}/>
            <Route path="/profile" element={<Profile/>}></Route>
            <Route path="/chat/:targetUserId" element={<Chat/>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
      </Provider>
    </>
  )
}

export default App
