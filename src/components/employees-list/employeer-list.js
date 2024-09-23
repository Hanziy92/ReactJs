import EmployeerListItem from '../employees-list-item/employees-list-item';
import './employees-list.css'

const EmployeerList = ({data}) => {


   const elements = data.map(item => {
      const {id, ...itemProps} = item; 
      return (
         // name={item.name} salary={item.salary}
         <EmployeerListItem key={id} {...itemProps}/>
      )
   })

   return (
      <ul className="app-list list-group">
         {elements}
      </ul>
   );

}

export default EmployeerList;