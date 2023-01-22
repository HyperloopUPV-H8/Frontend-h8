import MessageItem from "components/FaultsAndWarningLogger/MessageLogger/MessageList/MessageItem/MessageItem";
import styles from "components/FaultsAndWarningLogger/MessageLogger/MessageList/MessageList.module.scss";
import { Message } from "models/Message";
import { HSLAColor } from "utils/color";

interface Props {
    messages: Message[];
    color: HSLAColor;
}

export const MessageList = ({ messages, color }: Props) => {
    return (
        <ul className={styles.messagesList}>
            {messages.map((message) => {
                return (
                    <MessageItem
                        key={message.listId}
                        message={message}
                        color={color}
                    />
                );
            })}
        </ul>
    );
};
