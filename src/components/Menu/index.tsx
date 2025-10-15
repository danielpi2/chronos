import { HistoryIcon, HouseIcon, MoonIcon, SettingsIcon, SunIcon } from 'lucide-react';
import styles from './styles.module.css';
import { useState, useEffect } from 'react';
import { RouterLink } from '../RouterLink';


type AvailableThemes = 'dark' | 'light';
export function Menu(){
    const [theme, setTheme] = useState<AvailableThemes>(() => {
        const storageTheme = localStorage.getItem('theme') as AvailableThemes | null;
        return storageTheme ?? 'dark';
    });

    function handleThemeChange(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>){
        event.preventDefault();

        setTheme(prevTheme => {
            const nextTheme = prevTheme === 'dark' ? 'light' : 'dark';
            return nextTheme;
        });
        document.documentElement.setAttribute('data-theme', theme);
    }

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    }, [theme]);

    function nextThemeIcon(){
        return theme === 'dark' ? <SunIcon /> : <MoonIcon />;
    }
    
    return (

        <nav className={styles.menu}>
            <RouterLink href="/" className={styles.menuLink} aria-label="Ir para a página inicial" title="Ir para a página inicial">
               <HouseIcon /> 
            </RouterLink>
            <RouterLink href="/history" className={styles.menuLink} aria-label="Ver histórico" title="Ver histórico">
                <HistoryIcon />
            </RouterLink>
            <RouterLink href="/settings" className={styles.menuLink} aria-label="Configurações" title="Configurações">
                <SettingsIcon />
            </RouterLink>
            <a href="#" className={styles.menuLink} aria-label="Mudar de tema" title="Mudar de tema" onClick={handleThemeChange}>
                {nextThemeIcon()}
            </a>

        </nav>

    );
}
