import Chat from "./components/chat/Chat";
import List from "./components/list/List";
import Detail from "./components/detail/Detail";

const App = () => {
  return (
    <div className='container'>
    <List></List>
    <Chat></Chat>
    <Detail></Detail>
    </div>
    

  )
}

export default App