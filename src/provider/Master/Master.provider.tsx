import { CustomerContextProvider } from 'provider/Customer';
import { ProductContextProvider } from 'provider/Product';
import { TransactionContextProvider } from 'provider/Transaction';
import { UserContextProvider } from 'provider/User';

export const MasterContextProvider = ({
    children,
}: {
    children: React.ReactNode;
}) => (
    <UserContextProvider>
        <TransactionContextProvider>
            <CustomerContextProvider>
                <ProductContextProvider>{children}</ProductContextProvider>
            </CustomerContextProvider>
        </TransactionContextProvider>
    </UserContextProvider>
);
