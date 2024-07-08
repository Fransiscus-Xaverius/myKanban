// pages/kanban.tsx
import React from "react";
import { GetServerSideProps } from "next";
import axios from "axios";
import { Card, Container, Grid, GridCol, MantineProvider, createTheme } from "@mantine/core";

const theme = createTheme({
    // Customize your Mantine theme here
});

interface Task {
    id: number;
    title: string;
    content: string;
    status: "todo" | "in-progress" | "done";
}

interface KanbanBoardProps {
    tasks: Task[];
}

const KanbanBoard: React.FC<KanbanBoardProps> = ({ tasks }) => {
    const moveTask = async (
        taskId: number,
        newStatus: "todo" | "in-progress" | "done"
    ) => {
        await axios.post("/api/moveTask", { taskId, newStatus });
        window.location.reload();
    };

    return (
        <MantineProvider theme={theme}>
            <Container size={"lg"}>
                <Grid>
                    <GridCol span={4}>
                        <h2>To Do</h2>
                        {tasks?.filter(task => task.status === 'todo')
                            .map(task => (
                                <Card key={task.id} shadow="sm" radius="sm" style={{ marginBottom: 10 }}>
                                    <Card.Title>{task.title}</Card.Title>
                                    <Card.Body>{task.content}</Card.Body>
                                    <Card.Footer>
                                        <button onClick={() => moveTask(task.id, 'in-progress')}>Move to In Progress</button>
                                    </Card.Footer>
                                </Card>
                            ))}
                    </GridCol>
                    <GridCol span={4}>
                        <h2>In Progress</h2>
                        {tasks?.filter(task => task.status === 'in-progress')
                            .map(task => (
                                <Card key={task.id} shadow="sm" radius="sm" style={{ marginBottom: 10 }}>
                                    <Card.Title>{task.title}</Card.Title>
                                    <Card.Body>{task.content}</Card.Body>
                                    <Card.Footer>
                                        <button onClick={() => moveTask(task.id, 'done')}>Move to Done</button>
                                    </Card.Footer>
                                </Card>
                            ))}
                    </GridCol>
                    <GridCol span={4}>
                        <h2>Done</h2>
                        {tasks?.filter(task => task.status === 'done')
                            .map(task => (
                                <Card key={task.id} shadow="sm" radius="sm" style={{ marginBottom: 10 }}>
                                    <Card.Title>{task.title}</Card.Title>
                                    <Card.Body>{task.content}</Card.Body>
                                    <Card.Footer>
                                        <button onClick={() => moveTask(task.id, 'in-progress')}>Move Back to In Progress</button>
                                    </Card.Footer>
                                </Card>
                            ))}
                    </GridCol>
                </Grid>
            </Container>
        </MantineProvider>
    );
};

export const getServerSideProps: GetServerSideProps = async () => {
    // Replace with your data fetching logic
    const tasks = [
        {
            id: 1,
            title: "Task 1",
            content: "This is the content of Task 1",
            status: "todo",
        },
        {
            id: 2,
            title: "Task 2",
            content: "This is the content of Task 2",
            status: "in-progress",
        },
        {
            id: 3,
            title: "Task 3",
            content: "This is the content of Task 3",
            status: "done",
        },
    ];

    return {
        props: {
            tasks,
        },
    };
};

export default KanbanBoard;
