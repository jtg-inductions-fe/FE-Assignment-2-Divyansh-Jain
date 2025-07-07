import { customerContext } from 'context';

export const CustomerContextProvider = ({
    children,
}: {
    children: React.ReactNode;
}) => (
    <customerContext.Provider value={null}>{children}</customerContext.Provider>
);
