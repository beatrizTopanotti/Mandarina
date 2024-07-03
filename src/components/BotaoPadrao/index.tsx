import { FC } from "react";
import "./index.css";

interface BotaoPadraoProperties {
    label: string;
    onClick: () => void;
}

const BotaoPadrao: FC<BotaoPadraoProperties> = ({
    label,
    onClick,
}) => {
    return<>
        <div>
            <button
            className="botao-padrao"
            onClick={onClick}>
                {label}
            </button>
        </div>

    </>
}

export default BotaoPadrao;