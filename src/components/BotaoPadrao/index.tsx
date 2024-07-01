import { FC } from "react";

interface BotaoPadraoProperties {
    label: string;
    onClick: () => void;
}

const BotaoPadrao: FC<BotaoPadraoProperties> = ({
    label,
    onClick,
}) => {
    return<>
        <div className=" ">
            <button
            onClick={onClick}>
                {label}
            </button>
        </div>

    </>
}

export default BotaoPadrao;