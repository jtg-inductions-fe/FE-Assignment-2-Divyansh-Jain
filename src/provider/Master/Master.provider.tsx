import { CustomerContextProvider } from 'provider/Customer';
import { ProductContextProvider } from 'provider/Product';
import { TransactionContextProvider } from 'provider/Transaction';
import { UserContextProvider } from 'provider/User';

import { SalesProvider } from '@provider/Sales';
export const MasterContextProvider = ({
    children,
}: {
    children: React.ReactNode;
}) => (
    <UserContextProvider>
        <TransactionContextProvider>
            <CustomerContextProvider>
                <SalesProvider>
                    <ProductContextProvider>{children}</ProductContextProvider>
                </SalesProvider>
            </CustomerContextProvider>
        </TransactionContextProvider>
    </UserContextProvider>
);
