
import { CreditCard, Earth, Landmark, LayoutList, Settings, Lock, Star, UserPen } from 'lucide-react'


export const dataSidebar = [
    {
        title: "Elements",
        icon: LayoutList,
        children: [
            {
                item: 'Favorites',
                href: '/favorites',
                icon: Star
            },
            {
                item: 'Logins',
                href: '/logins-elements',
                icon: Earth
            },
            {
                item: 'Credit Card',
                href: '/credit-card',
                icon: CreditCard
            },
        ]

    }
]

export const dataSidebarConfig = [
    {
        title: "Configuration",
        icon: Settings,
        children: [
            {
                item: 'Profile',
                href: '/profile',
                icon: UserPen,
                premium: false
            },
            {
                item: 'Security',
                href: '#',
                icon: Lock,
                premium: true
            },
            {
                item: 'Suscription',
                href: '#',
                icon: Landmark,
                premium: true

            },
        ]

    }
]
