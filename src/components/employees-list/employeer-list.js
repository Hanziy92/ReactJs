import EmployeerListItem from '../employees-list-item/employees-list-item';
import './employees-list.css'

const EmployeerList = () => {
   return (
      <ul className="app-list list-group">
         <EmployeerListItem/>
         <EmployeerListItem/>
         <EmployeerListItem/>
      </ul>
   );

}

export default EmployeerList;