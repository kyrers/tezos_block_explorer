import { Alias } from "@tzkt/sdk-api";

export interface BlockData {
  level: number | undefined;
  proposer: Alias | null | undefined;
  timestamp: string | undefined;
  transactionCount: number | undefined;
}
