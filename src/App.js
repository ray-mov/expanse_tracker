import Header from "./components/Header";
import "./App.css";
import Tracker from "./components/Tracker";
import TransactionList from "./components/TransactionList";
import AddTransaction from "./components/AddTransaction";
import { GlobalProvider } from "./Context/Context";
function App() {
  return (
    <GlobalProvider>
      <div className="main-container">
        <Header />
        <Tracker />
        <TransactionList />
        <AddTransaction />
      </div>
    </GlobalProvider>
  );
}

export default App;
