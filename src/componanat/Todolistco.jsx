/* eslint-disable react/prop-types */

import Todoitemco from './Todoitemco'


const Todolistco = ({todoos,edittodo,deletetodo}) => {
  return (
    
      
      <div className="bg-blue-900/30 p-6 rounded shadow-md w-full max-w-lg lg:w-3/4">
            <ul className=''>
              {todoos.map((todo, index) => (<Todoitemco  key={index} todo={todo} index={index} edittodo={edittodo} deletetodo={deletetodo}/>))}
            </ul>
          </div>
    
  )
}

export default Todolistco
