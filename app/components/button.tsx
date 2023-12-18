import { CircularProgress } from "@mui/material";
import { IconType } from "react-icons";

type ButtonProps = {
  label: string;
  disabled?: boolean;
  custom?: string;
  isLoading?: boolean;
  icon?: IconType;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

const Button: React.FC<ButtonProps> = ({
  label,
  disabled,
  custom,
  isLoading,
  icon: Icon,
  onClick,
}) => {
  return (
    <div>
      <button
        onClick={onClick}
        disabled={disabled}
        className={`flex justify-center items-center disabled:cursor-not-allowed w-full gap-2 hover:scale-105 active:scale-95 transition-all cursor-pointer rounded-md py-2
      ${custom}`}
      >
        {isLoading && <CircularProgress size={20} />}
        {Icon && <Icon size={20} />}
        {label}
      </button>
    </div>
  );
};

export default Button;
