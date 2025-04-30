import React, { useEffect, useState } from 'react'
import WidgetCard from '../components/widgets/WidgetCard'
import WidgetButton from '../components/widgets/WidgetButton'
import widgetStore from '../store/widgetStore'

function Landing() {

  const getWidgets = widgetStore(state => state.getWidgets)
  const updateWidgets = widgetStore(state => state.updateWidgets)
  const [widgets, setWidgets] = useState([])
  const [tempWidgets, setTempWidgets] = useState([])

  useEffect(() => {
    const fetchWidgets = async () =>{
      const response = await getWidgets()
      const data = response?.data?.widgets || []
      setWidgets(data)
      setTempWidgets(data)
    }
    fetchWidgets()
  },[getWidgets])

  const handleSave = async () => {
    await updateWidgets(tempWidgets)
    setWidgets(tempWidgets)
  }
           
  return (
    <div className='p-4 bg-black/80 text-white min-h-screen'>
      <div className='text-xl px-10 py-4 border'>{widgets?.length > 0 ? widgets.map(w => w.visible ? w.type : '').join(', ') : 'No widgets added yet'}</div>

      <div className='text-xl px-10 py-4 border mt-6'>
        Widgets you want to add
        <div className='mt-6 flex flex-wrap gap-4'>
          {widgets.map((widget, index) => {
            return <WidgetButton key={index} widget={widget} setTempWidgets={setTempWidgets} tempWidgets={tempWidgets}/>
          })}
        </div>
        <button onClick={handleSave} className='bg-blue-500 text-white px-4 py-2 rounded-lg mt-4 cursor-pointer hover:opacity-70'>Save</button>
      </div>

      <div className='flex flex-wrap gap-4 justify-center mt-10'>
        {widgets.map((widget, index) => {
          return <WidgetCard key={index} widget={widget} widgets={widgets} setWidgets={setWidgets}  setTempWidgets={setTempWidgets}/>
        })}
      </div>

    </div>
  )
}

export default Landing