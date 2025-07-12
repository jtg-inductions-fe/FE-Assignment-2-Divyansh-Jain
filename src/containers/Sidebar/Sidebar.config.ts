import DocsIcon from '@mui/icons-material/ContentPaste';
import PagesIcon from '@mui/icons-material/Description';
import ComponentsIcon from '@mui/icons-material/HorizontalSplit';
import AuthenticationIcon from '@mui/icons-material/Lock';
import MessagesIcon from '@mui/icons-material/MoveToInbox';
import OverviewIcon from '@mui/icons-material/PieChart';
import SalesIcon from '@mui/icons-material/ShoppingBag';
import HelpIcon from '@mui/icons-material/Support';

import { ListItemType } from '@components/ListItem';
import { ROUTES } from '@routes';

const SidebarConfig: ListItemType[][] = [
    [
        {
            Icon: OverviewIcon,
            text: 'Overview',
            to: ROUTES.HOME,
        },
        {
            Icon: PagesIcon,
            text: 'Pages',
            children: [
                {
                    text: 'Overview',
                    to: ROUTES.HOME,
                },
                {
                    text: 'Products',
                    to: ROUTES.PRODUCTS,
                },
            ],
        },
        {
            Icon: SalesIcon,
            text: 'Sales',
            children: [
                {
                    text: 'Product List',
                    to: ROUTES.PRODUCTS,
                },
                {
                    text: 'Billing',
                    to: ROUTES.BILLING,
                },
                {
                    text: 'Invoice',
                    to: ROUTES.INVOICE,
                },
            ],
        },
        {
            Icon: MessagesIcon,
            text: 'Messages',
            to: ROUTES.MESSAGES,
            count: 0,
        },
        {
            Icon: AuthenticationIcon,
            text: 'Authentication',
            children: [
                {
                    text: 'Login',
                    to: ROUTES.LOGIN,
                },
                {
                    text: 'Register',
                    to: ROUTES.REGISTER,
                },
            ],
        },
    ],
    [
        {
            Icon: DocsIcon,
            text: 'Docs',
            to: ROUTES.DOCS,
        },
        {
            Icon: ComponentsIcon,
            text: 'Components',
            to: ROUTES.COMPONENTS,
        },
        {
            Icon: HelpIcon,
            text: 'Help',
            to: ROUTES.HELP,
        },
    ],
];

export default SidebarConfig;
