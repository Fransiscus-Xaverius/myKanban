// components/KanbanBoard.tsx
import React, { useState } from 'react';
import { Card, Grid, Container } from '@mantine/core';

interface Task {
    id: number;
    title: string;
    content: string;
    status: 'todo' | 'in-progress' | 'done';
}

const KanbanBoard = () => {
    const [tasks, setTasks] = useState<Task[]>([
        { id: 1, title: 'Task 1', content: 'This is the content of Task 1', status: 'todo' },
        { id: 2, title: 'Task 2', content: 'This is the content of Task 2', status: 'in-progress' },
        { id: 3, title: 'Task 3', content: 'This is the content of Task 3', status: 'done' },
    ]);

    const moveTask = (taskId: number, newStatus: 'todo' | 'in-progress' | 'done') => {
        const updatedTasks = tasks.map(task => {
            if (task.id === taskId) {
                return { ...task, status: newStatus };
            }
            return task;
        });
        setTasks(updatedTasks);
    };

    return (
        <Container size="lg">
            <Grid>
                <Grid.Col span={4}>
                    <h2>To Do</h2>
                    {tasks
                        .filter(task => task.status === 'todo')
                        .map(task => (
                            <Card key={task.id} shadow="sm" radius="sm" style={{ marginBottom: 10 }}>
                                <Card.Title>{task.title}</Card.Title>
                                <Card.Body>{task.content}</Card.Body>
                                <Card.Footer>
                                    <button onClick={() => moveTask(task.id, 'in-progress')}>Move to In Progress</button>
                                </Card.Footer>
                            </Card>
                        ))}
                </Grid.Col>
                <Grid.Col span={4}>
                    <h2>In Progress</h2>
                    {tasks
                        .filter(task => task.status === 'in-progress')
                        .map(task => (
                            <Card key={task.id} shadow="sm" radius="sm" style={{ marginBottom: 10 }}>
                                <Card.Title>{task.title}</Card.Title>
                                <Card.Body>{task.content}</Card.Body>
                                <Card.Footer>
                                    <button onClick={() => moveTask(task.id, 'done')}>Move to Done</button>
                                </Card.Footer>
                            </Card>
                        ))}
                </Grid.Col>
                <Grid.Col span={4}>
                    <h2>Done</h2>
                    {tasks
                        .filter(task => task.status === 'done')
                        .map(task => (
                            <Card key={task.id} shadow="sm" radius="sm" style={{ marginBottom: 10 }}>
                                <Card.Title>{task.title}</Card.Title>
                                <Card.Body>{task.content}</Card.Body>
                                <Card.Footer>
                                    <button onClick={() => moveTask(task.id, 'in-progress')}>Move Back to In Progress</button>
                                </Card.Footer>
                            </Card>
                        ))}
                </Grid.Col>
            </Grid>
        </Container>
    );
};

export default KanbanBoard;
