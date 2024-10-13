import Logo from "./Logo"
import SidebarRoutes from "./sidebarRotes/SidebarRoutes"

function SideBar() {
    return (
        <>
            <div className="py-6">
                <Logo />
            </div>
            <SidebarRoutes />
        </>
    )
}

export default SideBar