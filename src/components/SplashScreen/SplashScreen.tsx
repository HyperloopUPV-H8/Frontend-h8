import styles from "./SplashScreen.module.scss";
import { animated, useSpring } from "@react-spring/web";

export const SplashScreen = () => {
    const springs = useSpring({
        from: { fontSize: "0rem" },
        to: { fontSize: "16rem" },
        config: {
            mass: 5,
        },
        delay: 150,
    });

    return (
        <div className={styles.loadingView}>
            {/* Chango GUI */}
            <animated.div
                className={styles.monkey}
                style={{ ...springs }}
            >
                🐒
            </animated.div>
        </div>
    );
};
