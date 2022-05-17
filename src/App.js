import OrderPage from './pages/OrderPage/OrderPage';
import './App.css';
import {OrderContextProvider} from './contexts/OrderContext';

function App() {

  return (
    <div style={{padding: "4rem"}}>
      <OrderContextProvider>
        <OrderPage />
      </OrderContextProvider>
    </div>
  );
}

export default App;
