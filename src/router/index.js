//创建路由实例 绑定path element
import { createBrowserRouter } from 'react-router-dom'
import Layout from '@/pages/Layout/index.js'
import Month from '@/pages/Month/index.js'
import Year from '@/pages/Year/index.js'
import New from '@/pages/New/index.js'

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: 'month',
                element: <Month />
            },
            {
                path: 'year',
                element: <Year />
            }
        ]
    },
    {
        path: '/new',
        element: <New />
    }
])

export default router