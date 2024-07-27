import {BrowserRouter,Routes,Route} from "react-router-dom"
import GetUser from "./axios/GetUser"
import AddUser from "./axios/AddUser"
import UpdateUser from "./axios/UpdateUser"
import Error404 from "./axios/Error404"

function App(){
    return(
        <>
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<GetUser></GetUser>}></Route>
            <Route path="/add" element={<AddUser></AddUser>}></Route>
            <Route path="/update/:id" element={<UpdateUser></UpdateUser>}></Route>
            <Route path="*" element={<Error404></Error404>}></Route>
        </Routes>
        </BrowserRouter>
        </>
    )
}
export default App