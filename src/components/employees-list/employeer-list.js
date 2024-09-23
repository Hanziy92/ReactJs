import EmployeerListItem from '../employees-list-item/employees-list-item';
import './employees-list.css'

const EmployeerList = ({data}) => {


   const elements = data.map(item => {
      return (
         // name={item.name} salary={item.salary}
         <EmployeerListItem {...item}/>
      )
   })

   return (
      <ul className="app-list list-group">
         {elements}
      </ul>
   );

}

export default EmployeerList;