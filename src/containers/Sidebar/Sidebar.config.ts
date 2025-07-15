import DocsIcon from '@mui/icons-material/ContentPaste';
import PagesIcon from '@mui/icons-material/Description';
import ComponentsIcon from '@mui/icons-material/HorizontalSplit';
import AuthenticationIcon from '@mui/icons-material/Lock';
import MessagesIcon from '@mui/icons-material/MoveToInbox';
import OverviewIcon from '@mui/icons-material/PieChart';
import LanguageIcon from '@mui/icons-material/Public';
import SettingsIcon from '@mui/icons-material/Settings';
import SalesIcon from '@mui/icons-material/ShoppingBag';
import HelpIcon from '@mui/icons-material/Support';
import PreferencesIcon from '@mui/icons-material/Tune';

import { ROUTES } from '@routes';

import { SidebarListConfig } from './Sidebar.types';

export const SidebarList: SidebarListConfig = {
    primary: [
        {
            id: 'sidebar-overview',
            Icon: OverviewIcon,
            text: 'Overview',
            to: ROUTES.HOME,
        },
        {
            id: 'sidebar-pages',
            Icon: PagesIcon,
            text: 'Pages',
            children: [
                {
                    id: 'sidebar-pages-errorPage',
                    text: 'Error Page',
                    to: ROUTES.ERROR,
                },
            ],
        },
        {
            id: 'sidebar-sales',
            Icon: SalesIcon,
            text: 'Sales',
            children: [
                {
                    id: 'sidebar-sales-productList',
                    text: 'Product List',
                    to: ROUTES.PRODUCTS,
                },
                {
                    id: 'sidebar-sales-billing',
                    text: 'Billing',
                    to: ROUTES.BILLING,
                },
                {
                    id: 'sidebar-sales-invoice',
                    text: 'Invoice',
                    to: ROUTES.INVOICE,
                },
            ],
        },
        {
            id: 'sidebar-messages',
            Icon: MessagesIcon,
            text: 'Messages',
            to: ROUTES.MESSAGES,
            count: 0,
        },
        {
            id: 'sidebar-authentication',
            Icon: AuthenticationIcon,
            text: 'Authentication',
            children: [
                {
                    id: 'sidebar-authentication-login',
                    text: 'Login',
                    to: ROUTES.LOGIN,
                },
                {
                    id: 'sidebar-authentication-register',
                    text: 'Register',
                    to: ROUTES.REGISTER,
                },
            ],
        },
    ],
    secondary: [
        {
            id: 'sidebar-docs',
            Icon: DocsIcon,
            text: 'Docs',
            to: ROUTES.DOCS,
        },
        {
            id: 'sidebar-components',
            Icon: ComponentsIcon,
            text: 'Components',
            to: ROUTES.COMPONENTS,
        },
        {
            id: 'sidebar-help',
            Icon: HelpIcon,
            text: 'Help',
            to: ROUTES.HELP,
        },
    ],

    utility: [
        {
            id: 'sidebar-preferences',
            Icon: PreferencesIcon,
            text: 'preferences',
            to: ROUTES.PREFERENCES,
        },
        {
            id: 'sidebar-language',
            Icon: LanguageIcon,
            text: 'languages',
            to: ROUTES.LANGUAGES,
        },
        {
            id: 'sidebar-settings',
            Icon: SettingsIcon,
            text: 'settings',
            to: ROUTES.SETTINGS,
        },
    ],
};
