import { TodoType } from "./types/todo";
import { FC } from "react";

export const Todo: FC<Omit<TodoType, "id">> = (
        // idを除いたTodoTypeを受け取る
        props: Omit<TodoType, "id">
        // props: Pick<TodoType, "userId" | "title" | "completed">
) => {
        const { title, userId, completed = false } = props;
        const completeMark = completed ? "[完]" : "[未]";
        return (
                <p>{`${completeMark} ${title}(ユーザー:${userId})`}</p>
        )
};

// type TodoType = {
//         userId: number;
//         title: string;
//         completed?: boolean;
//         // ?を渡すと、そのプロパティは任意になる
//         // completed?: boolean;
// };
