// pages/api/moveTask.ts
import { NextApiRequest, NextApiResponse } from "next";

let tasks = [
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

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const { taskId, newStatus } = req.body;

    tasks = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, status: newStatus };
      }
      return task;
    });

    res.status(200).json({ message: "Task updated successfully" });
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
