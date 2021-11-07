import { Status } from "@/types";

export function getStatus(status: Status): string {
  switch (status) {
    case Status.New:
      return "🆕 New";
    case Status.Pending:
      return "⏳ Pending";
    case Status.Scheduled:
      return "📅 Scheduled";
    case Status.InProgress:
      return "🏃 In Progress";
    case Status.Completed:
      return "✅ Completed";
  }
  return "";
}
