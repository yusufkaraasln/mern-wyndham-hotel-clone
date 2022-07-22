import React from 'react'

function PanelPageList({title, active , setSelected,id}) {
  return (
    <li className={active && "active"}
    onClick={()=>setSelected(id)}>
        {title}
    </li>
  )
}

export default PanelPageList