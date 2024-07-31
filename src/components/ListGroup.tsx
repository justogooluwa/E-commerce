import { useState } from "react";


function ListGroup(){
    let items =[
        'New york',
        'Nigeria',
        'Ekiti',
        'Lagos',
        'Ikorodu'
    ]
    const [selectedIndex, setSelectedIndex] = useState(-1);
       
     return <ul className="list-group">
      {items.map((item, index) => <li className={selectedIndex === index ?
       'list-group-item active' : 'list-group-item'
      } key={item}
      onClick={() => setSelectedIndex(index) }>{item}</li>)}
   </ul>
}

export default ListGroup;