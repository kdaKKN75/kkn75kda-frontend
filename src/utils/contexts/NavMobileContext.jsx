/* eslint-disable react/prop-types */
import { createContext, useState } from 'react';

const NavMobileContext = createContext();

export const NavMobileContextProvider = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);

    return <NavMobileContext.Provider value={{ isOpen, setIsOpen }}>{children}</NavMobileContext.Provider>;
};

export default NavMobileContext;
