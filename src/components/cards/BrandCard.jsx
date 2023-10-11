import { useRouter } from 'next/router'
import React from 'react'

export default function BrandCard({ _id, name, icon }) {
    const router = useRouter()
    return (
        <div onClick={() => router.push(`/brands/${_id}`)} className='border-solid border p-2 m-2 grid hover:shadow rounded-lg pointer relative justify-center'>
            <img src={icon} alt={name} className='w-28' />
            <div className="text-md text-center mt-3">{name}</div>
        </div>
    )
}
