import React, { useState } from 'react'

function WidgetButton({widget, tempWidgets, setTempWidgets}) {

    const handleClick = async () => {

      const updated = tempWidgets.map(w => w.type === widget.type ? {
        ...w,
        visible: true
      } : w )

      setTempWidgets(updated)
    }

  return (
    <div onClick={handleClick} className={` ${tempWidgets.some(w => w.type === widget.type && w.visible) ? 'bg-blue-500 text-white hover:bg-gray-400' : 'bg-white  text-black hover:bg-blue-300'} rounded-lg text-base flex items-center justify-center p-4  cursor-pointer`}>{widget.type}</div>
  )
}

export default WidgetButton