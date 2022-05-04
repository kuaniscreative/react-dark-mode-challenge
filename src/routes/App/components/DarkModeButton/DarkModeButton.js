import clsx from 'clsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faMoon, 
  faSun 
} from '@fortawesome/free-solid-svg-icons';
import './darkModeButton.scss';

function DarkModeButton({
  isDarkMode,
  className,
  onClick,
}) {
  const icon = isDarkMode ? faSun : faMoon;
  const color = isDarkMode ? '#FFA500' : null;

  return (
    <button 
      className={clsx(
        'dark-mode-button',
        'icon',
        className
      )}
      onClick={onClick}
    >
        <FontAwesomeIcon 
          icon={icon} 
          color={color} 
        />
    </button>
  )
}

export default DarkModeButton
