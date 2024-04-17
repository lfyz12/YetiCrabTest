import React, {useEffect} from 'react';
import {orderStore} from "./index";
import OrderTable from "./components/OrderTable";
import {Button} from "react-bootstrap";

const App = () => {

  return (
      <div className='d-flex flex-column justify-content-center'>
        <OrderTable/>
          <Button variant="outline-dark">Admin</Button>
      </div>
  );
};

export default App;
