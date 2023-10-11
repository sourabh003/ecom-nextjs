import classNames from 'classnames'
import React from 'react'

export default function IconButton({ icon: Icon, iconProps, onClick, className, transparent = false }) {
    return (
        <button
            onClick={onClick}
            className={classNames("w-fit p-2 rounded-full hover:bg-gray-200 transition 300 pointer", { "bg-gray-100": !transparent }, className)}
        >
            <Icon {...iconProps} />
        </button>
    )
}
