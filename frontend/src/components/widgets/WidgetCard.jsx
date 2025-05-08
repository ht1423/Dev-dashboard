import React, { useEffect, useState } from 'react'
import { RxCross1 } from "react-icons/rx";
import widgetStore from '../../store/widgetStore';
import githubStore from '../../store/githubStore';
import { Link } from 'react-router-dom';

function WidgetCard({ widget, widgets, setWidgets, setTempWidgets }) {

  const updatedWidgets = widgetStore(state => state.updateWidgets)
  const gitLogin= githubStore(state => state.gitLogin)
  const gitUser = githubStore(state => state.gitUser)
  const getGitUserData = githubStore(state => state.getGitUserData)

  useEffect(() => {
    if(!gitUser && widget.type === 'github'){
      const fetch = async () => {
        await getGitUserData()
      }
  
      fetch()
    }
  },[gitUser,getGitUserData])

  const handleAdd = async () => {
    if(widget.type === 'github'){
      await gitLogin()
    }
  }

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

        <button onClick={handleAdd} className='bg-blue-500 text-white hover:bg-gray-400 rounded-lg text-base flex items-center justify-center p-4 mt-4 cursor-pointer'>Add data</button>

        {(gitUser && widget.type === 'github') && (
          <div className='mt-8 space-y-4'>
              <img src={gitUser.avatar_url} className='h-20'/>
              <Link to={gitUser.html_url}>URL: {gitUser.html_url}</Link>
              <p className='mt-4'>Name: {gitUser.login}</p>
              <p>Followers: {gitUser.followers}</p>
              <p>Following: {gitUser.following}</p>
              <p>Public repos: {gitUser.public_repos}</p>
              <p>Public gists: {gitUser.public_gists}</p>
              


          </div>
        )}

      </div>
  )
}

export default WidgetCard