import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeerList from '../employees-list/employeer-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';

function App() {

   const data = [
      {name: 'Jonh C.', salary: 8000, increase: false, id: 1},
      {name: 'Sam O.', salary: 3000, increase: true, id: 2},
      {name: 'Anna K', salary: 5000, increase: false, id: 3}
   ];

   return (
      <div className="app">
         <AppInfo/>

         <div className="search-panel">
            <SearchPanel/>
            <AppFilter/>
         </div>
         <EmployeerList data={data}/>
         <EmployeesAddForm/>
      </div>
   )
}

export default App;