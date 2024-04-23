import { Outlet } from "react-router-dom"
import { Button } from "antd-mobile"

const Layout = () => {
    return <div>
        <Outlet />
        我是layout
        <Button color="promary">Test</Button>
    </div>
}

export default Layout