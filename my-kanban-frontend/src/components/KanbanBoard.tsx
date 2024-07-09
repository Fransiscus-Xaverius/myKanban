"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Grid, GridCol } from "@mantine/core";
import TaskCard from "@/components/TaskCard";
import { KanbanBoardProps } from "@/contracts/vo/PropsRelated.vo";
import { Task } from "@/contracts/vo/TaskRelated.vo";

const KanbanBoard: React.FC<KanbanBoardProps> = ({ tasks }) => {
    // const [tasks, setTasks] = useState<Task[]>([]);

    const fetchTasks = async () => {
        // // Replace this with your actual data fetching logic
        // const response = await axios.get("/api/tasks");
        // setTasks(response.data);
    };

    // useEffect(() => {
    //     fetchTasks();
    // }, []);

    return (
        <Container size={"lg"}>
            <Grid>
                <GridCol span={4}>
                    <h2>To Do</h2>
                    {tasks?.filter(task => task.status === "todo").map((task) => (
                        <TaskCard key={task.id} task={task} reloadTasks={fetchTasks} />
                    ))}
                </GridCol>
                <GridCol span={4}>
                    <h2>In Progress</h2>
                    {tasks?.filter(task => task.status === "in-progress").map((task) => (
                        <TaskCard key={task.id} task={task} reloadTasks={fetchTasks} />
                    ))}
                </GridCol>
                <GridCol span={4}>
                    <h2>Done</h2>
                    {tasks?.filter(task => task.status === "done").map((task) => (
                        <TaskCard key={task.id} task={task} reloadTasks={fetchTasks} />
                    ))}
                </GridCol>
            </Grid>
        </Container>
    );
};

export default KanbanBoard;
