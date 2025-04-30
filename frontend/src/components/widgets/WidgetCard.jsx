import React from 'react'
import { RxCross1 } from "react-icons/rx";
import widgetStore from '../../store/widgetStore';

function WidgetCard({ widget, widgets, setWidgets, setTempWidgets }) {

  const updatedWidgets = widgetStore(state => state.updateWidgets)

  const handleClick = async () => {
    if(widgets && widgets.includes(widget)){
      const updated = widgets.filter((w) => w !== widget)
      setWidgets(updated)
      setTempWidgets(updated)
      await updatedWidgets(updated)
    }
  }

  return (
    <div className='h-28 w-44 border-2 rounded-lg p-4'>
      { widget }
      <RxCross1 onClick={handleClick} className='mt-4 hover:bg-gray-500 cursor-pointer'/>
    </div>
  )
}

export default WidgetCard