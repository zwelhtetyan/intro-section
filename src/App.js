import { ThemeProvider } from 'styled-components';
import MobileMenu from './components/mobileMenu/MobileMenu';
import Navbar from './components/navbar/Navbar';
import GlobalStyles from './GlobalStyles';
import { theme } from './components/theme/theme';
import useTheme from './components/theme/useTheme';
import Overlay from './components/overlay/Overlay';
import Home from './pages/Home';

function App() {
    const { menuOpen, menuToggler } = useTheme();

    return (
        <>
            <ThemeProvider theme={menuOpen ? theme.menuOpen : theme.closeMenu}>
                <GlobalStyles />
                <Navbar menuToggler={menuToggler} />
                <MobileMenu menuToggler={menuToggler} />
                {menuOpen && <Overlay />}
                <Home />
            </ThemeProvider>
        </>
    );
}

export default App;
