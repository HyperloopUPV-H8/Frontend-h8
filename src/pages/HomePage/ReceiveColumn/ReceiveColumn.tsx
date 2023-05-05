import styles from "./ReceiveColumn.module.scss";
import { TabLayout } from "layouts/TabLayout/TabLayout";
import { ChartMenu } from "components/ChartMenu/ChartMenu";
import { RequestState, useFetchPodData } from "./useFetchPodData";
import { ReactComponent as IncomingMessage } from "assets/svg/incoming-message.svg";
import { ReactComponent as Chart } from "assets/svg/chart.svg";
import { ReceiveTableContainer } from "components/ReceiveTableContainer/ReceiveTableContainer";

const receiveColumnTabItem = [
    {
        id: "receiveTable",
        name: "Packets",
        icon: <IncomingMessage />,
        component: <ReceiveTableContainer />,
    },
    // {
    //     id: "charts",
    //     name: "Charts",
    //     icon: <Chart />,
    //     component: <ChartMenu />,
    // },
];

export const ReceiveColumn = () => {
    const requestState = useFetchPodData();

    if (requestState == RequestState.PENDING) {
        return <div className={styles.loadingMessages}>Loading PodData...</div>;
    } else if (requestState == RequestState.FULFILLED) {
        return <TabLayout items={receiveColumnTabItem}></TabLayout>;
    } else {
        return (
            <div className={styles.loadingMessages}>Error fetching PodData</div>
        );
    }
};
