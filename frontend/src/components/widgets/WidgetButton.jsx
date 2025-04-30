import React, { useState } from 'react'
import widgetStore from '../../store/widgetStore'

function WidgetButton({widget, tempWidgets, setTempWidgets}) {

    const updatedWidgets = widgetStore(state => state.updateWidgets)

    const handleClick = async () => {
        if(tempWidgets && !tempWidgets.includes(widget)){
            const updated = [...tempWidgets, widget]
            setTempWidgets(updated)
        }
    }

  return (
    <div onClick={handleClick} className={` ${tempWidgets && tempWidgets.includes(widget) ? 'bg-blue-500 text-white hover:bg-gray-400' : 'bg-white  text-black hover:bg-blue-300'} rounded-lg text-base flex items-center justify-center p-4  cursor-pointer`}>{widget}</div>
  )
}

export default WidgetButton