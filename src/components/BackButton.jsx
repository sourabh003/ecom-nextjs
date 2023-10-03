import { useRouter } from 'next/router'
import React from 'react'
import { FaArrowLeft } from 'react-icons/fa'

export default function BackButton() {
    const router = useRouter()
    return (
        <button className="mr-4" onClick={() => router.back()}>
            <FaArrowLeft size={20} />
        </button>
    )
}
