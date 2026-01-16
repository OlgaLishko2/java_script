import logo from "./logo.svg";
import "./App.css";
import UserProfile from "./components/userprofile/UserProfile";
import NewAppTest from "./components/test/NewApp";
import Parent from "./components/parent/ParentPage";
import Feedback from "./components/feedback/Feedback";

function App() {
  return (
    <div className="App">
      <Feedback/>
      {/* <UserProfile firstname="Sreyasi" lastname="Munshi" />
      <UserProfile firstname="Thaisa" age="12344" favcolor="red" />
      <UserProfile firstname="Leena" age="12" favcolor="bluen" />
      <UserProfile firstname="Chia-Ching" age="32" favcolor="pink" />
      <UserProfile firstname="Tham" age="15" favcolor="green" /> */}
      {/* <NewAppTest /> */}
      <Parent />
    </div>
  );
}

export default App;
