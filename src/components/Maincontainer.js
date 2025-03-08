import React, { useEffect } from 'react'
import Buttonlist from './Buttonlist'
import Videocontainer from './Videocontainer'
import { useDispatch } from 'react-redux'
import { openMenu } from '../utils/appSlice';

function Maincontainer() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(openMenu())
  })
  return (
    <div className='w-5/6'>
        <Buttonlist/>
        <Videocontainer/>
    </div>
  )
}

export default Maincontainer