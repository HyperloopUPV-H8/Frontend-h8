import styles from "components/FormComponents/Button/Button.module.scss";
import { animated, useSpring, easings } from "@react-spring/web";
import { lightenHSL } from "utils/color";
import { useEffect } from "react";
type Props = {
    label: string;
    onClick: (ev: React.MouseEvent) => void;
    disabled?: boolean;
    color?: string;
};

export const Button = ({
    label,
    color = "hsl(29, 88%, 57%)",
    onClick,
    disabled,
}: Props) => {
    const [springs, api] = useSpring(() => ({
        from: { backgroundColor: color },
        config: {
            mass: 5,
            tension: 3000,
            friction: 1,
            clamp: true,
        },
    }));

    return (
        <animated.div
            className={`${styles.buttonWrapper} ${
                disabled ? styles.disabled : styles.enabled
            }`}
            onClick={(ev) => {
                if (!disabled) {
                    onClick(ev);
                }
                ev.stopPropagation();
            }}
            style={!disabled ? { ...springs } : {}}
            onMouseDown={() =>
                api.start({
                    to: { backgroundColor: lightenHSL(color, 15) },
                })
            }
            onMouseLeave={() =>
                api.start({
                    to: { backgroundColor: color },
                })
            }
            onMouseUp={() =>
                api.start({
                    to: { backgroundColor: color },
                })
            }
        >
            {label}
        </animated.div>
    );
};
