export interface Task {
  id: number;
  title: string;
  content: string;
  status: "todo" | "in-progress" | "done";
}
