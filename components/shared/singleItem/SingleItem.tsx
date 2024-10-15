import Link from 'next/link';
import React from 'react';
import { SingleItemProps } from './singleItem.type';

export default function SingleItem(props: SingleItemProps) {
    const { href, icon: Icon, label, onClick } = props;
    return (
        <Link href={href} className='flex gap-2 items-center px-2 py-4 hover:bg-blue-100 duration-300 transition-all rounded-md' onClick={onClick}>
            <div className='bg-blue-100/20 p-2 rounded-md' >
                <Icon size={20} />
            </div>
            {label}
        </Link>
    )
}
