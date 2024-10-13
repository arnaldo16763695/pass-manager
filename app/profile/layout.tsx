import React from 'react'

export default function LayoutProfile({ children }: Readonly<{
    children: React.ReactNode
}>

) {
    return (
        <div>
            <h1>Este es el layout</h1>
            {children}
        </div>
    )
}
