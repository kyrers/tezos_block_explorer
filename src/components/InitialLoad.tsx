import { initialLoadText } from "@/utils/strings";

export default function InitialLoad() {
  return (
    <div
      style={{ fontSize: "20px", fontWeight: "bolder" }}
      data-cy="initial-load"
    >
      {initialLoadText}
    </div>
  );
}
