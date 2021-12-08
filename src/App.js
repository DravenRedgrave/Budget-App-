import './App.css';
import AddTransaction from './components/AddTransaction';
import Balance from './components/Balance';
import ExpenseList from './components/ExpenseList';
import Header from './components/Header';
import InomentList from './components/InomentList';
import { GlobalContextProvider } from './context/GlobalState';

function App() {
  return (
    <GlobalContextProvider>
      <div className="container">
      <div className="app-wrapper">
        <Header/>
        <Balance/>
        <AddTransaction/>
        <InomentList/>
        <ExpenseList/>
      </div>
    </div>
    </GlobalContextProvider>
  );
}

export default App;
