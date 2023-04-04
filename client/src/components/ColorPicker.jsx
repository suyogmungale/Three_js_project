import React from 'react';
import { SketchPicker } from 'react-color';
import {useSnapshot } from 'valtio';

import state from '../store';


const ColorPicker = () => {

  const snap = useSnapshot(state)
  return (
    <div className='absolute left-full ml-3'>
      <SketchPicker
        color={snap.color}
        disableAlpha
        presetColors={['#FF6000', '#0B2447', '#FFB4B4', '#C7E9B0']}
        onChange={(color) => state.color = color.hex}
      />
    </div>
  )
}

export default ColorPicker