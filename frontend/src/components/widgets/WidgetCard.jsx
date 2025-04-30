import React from 'react'
import { RxCross1 } from "react-icons/rx";
import widgetStore from '../../store/widgetStore';

function WidgetCard({ widget, widgets, setWidgets, setTempWidgets }) {

  const updatedWidgets = widgetStore(state => state.updateWidgets)

  const handleClick = async () => {
  
      const updated = widgets.map((w) => w.type === widget.type ? {
        ...w,
        visible: false
      }: w)
      
      setWidgets(updated)
      setTempWidgets(updated)
      await updatedWidgets(updated)
    
  }

  return (
    widget.visible && 
        <div className=' border-2 rounded-lg p-4'>
        { widget.type }
        <RxCross1 onClick={handleClick} className='mt-4 hover:bg-gray-500 cursor-pointer'/>
        <button className='bg-blue-500 text-white hover:bg-gray-400 rounded-lg text-base flex items-center justify-center p-4 mt-4 cursor-pointer'>Add data</button>
      </div>
  )
}

export default WidgetCard