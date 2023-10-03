import classNames from 'classnames'
import React from 'react'

export default function IconButton({ icon: Icon, iconProps, onClick, className }) {
    return (

        <button
            onClick={onClick}
            className={classNames("w-fit p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition 300 pointer", className)}
        >
            <Icon {...iconProps} />
        </button>
    )
}
