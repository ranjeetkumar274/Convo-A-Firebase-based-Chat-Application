import "./List.css"
import Userinfo from "./userInfo/Userinfo"
import Chatlist from "./chatList/Chatlist"

const List = () => {
    return(
        <div className="list">
            <Userinfo></Userinfo>
            <Chatlist></Chatlist>
        </div>
        

    )
}

export default List