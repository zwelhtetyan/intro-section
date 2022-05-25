import { useState } from 'react';

const useTheme = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const menuToggler = () => {
        setMenuOpen((menuOpen) => !menuOpen);
    };

    return { menuOpen, menuToggler };
};

export default useTheme;
