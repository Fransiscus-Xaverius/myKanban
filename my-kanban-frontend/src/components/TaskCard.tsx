"use client";

import React from "react";
import axios from "axios";
import { Card, Button, Text, Group } from "@mantine/core";

interface TaskCardProps {
    task: {
        id: number;
        title: string;
        content: string;
        status: "todo" | "in-progress" | "done";
    };
    reloadTasks: () => void;
}

const TaskCard: React.FC<TaskCardProps> = ({ task, reloadTasks }) => {
    const moveTask = async (
        taskId: number,
        newStatus: "todo" | "in-progress" | "done"
    ) => {
        await axios.post("/api/moveTask", { taskId, newStatus });
        reloadTasks();
    };

    return (
        <Card shadow="sm" radius="sm" style={{ marginBottom: 10 }}>
            <Text w={500} size="lg">
                {task.title}
            </Text>
            <Text size="sm" style={{ marginBottom: 10 }}>
                {task.content}
            </Text>
            <Group pos={"relative"}>
                <Button
                    size="xs"
                    onClick={() =>
                        moveTask(
                            task.id,
                            task.status === "todo"
                                ? "in-progress"
                                : task.status === "in-progress"
                                    ? "done"
                                    : "in-progress"
                        )
                    }
                >
                    {task.status === "todo"
                        ? "Move to In Progress"
                        : task.status === "in-progress"
                            ? "Move to Done"
                            : "Move Back to In Progress"}
                </Button>
            </Group>
        </Card>
    );
};

export default TaskCard;
