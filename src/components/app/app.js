import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeerList from '../employees-list/employeer-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';

function App() {
   return (
      <div className="app">
         <AppInfo/>

         <div className="search-panel">
            <SearchPanel/>
            <AppFilter/>
         </div>
         <EmployeerList/>
         <EmployeesAddForm/>
      </div>
   )
}

export default App;