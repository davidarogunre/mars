import Sidebar from "../components/Sidebar";
import Main from "../components/Main"
const Dashboard = () =>{
    return (
        <div className="flex justify-between">
            <Sidebar/>
            <Main/>
        </div>
    )
}


export default Dashboard