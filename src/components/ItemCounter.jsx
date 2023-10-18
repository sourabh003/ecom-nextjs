import React, { useMemo, useState } from 'react'
import { FaMinus, FaPlus, FaTrash } from 'react-icons/fa'
import IconButton from './IconButton'

export default function ItemCounter({ value = 1, addClickListener, subClickListener, removeClickListener }) {
    const isOne = useMemo(() => value === 1, [value])
    return (
        <div className="flex items-center">
            <IconButton icon={isOne ? FaTrash : FaMinus} onClick={isOne ? removeClickListener : subClickListener} transparent className="mr-2" />
            <div className='px-2 text-xl font-bold'>{value}</div>
            <IconButton icon={FaPlus} onClick={addClickListener} transparent className="ml-2" />
        </div>
    )
}
