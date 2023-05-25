import { Alias } from "@tzkt/sdk-api";

export interface TransactionData {
  id: number | undefined;
  sender: Alias | null | undefined;
  target: Alias | null | undefined;
  amount: number | undefined;
  status: string | null | undefined;
}
