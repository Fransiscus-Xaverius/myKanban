import KanbanBoard from "@/components/KanbanBoard";
import { Task } from "@/contracts/vo/TaskRelated.vo";

export default function Home() {
  const tasks: Task[] = [
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

  return (
    <>
      <KanbanBoard tasks={tasks} />
    </>
  );
}
