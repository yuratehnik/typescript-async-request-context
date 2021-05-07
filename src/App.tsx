import React from 'react';
import logo from './logo.svg';
import './App.css';
import Table from "./components/table/table";
import {TableProvider, useTable} from "./context/table-context";
import LoadDataButton from "./components/load-data-button/load-data-button";

function App() {
  return (
    <div className="App">
      <TableProvider>
        <header className="App-header">
          <Table/>

          <LoadDataButton/>
        </header>
      </TableProvider>
    </div>
  );
}

export default App;
