import Link from 'next/link'
import React from 'react'

function Logo() {
  return (
    <Link href={'/'}>
        <h2 className='text-xl font-bold'>
            Arnaldo Password
        </h2>
    </Link>
  )
}

export default Logo