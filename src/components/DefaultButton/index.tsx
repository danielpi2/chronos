import styles from './styles.module.css';

type DefaultButtonProps = {
    icon: React.ReactNode;
    color?: 'blue' | 'red';
} &React.ComponentProps<'button'>;
export function DefaultButton({ icon, color = 'blue', ...props }: DefaultButtonProps) {
    return (
        <button className={`${styles.button} ${styles[color]}`} {...props}>
            {icon}
        </button>
    )
}