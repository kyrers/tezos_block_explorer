import { NextApiRequest, NextApiResponse } from "next";
import { operationsGetTransactions } from "@tzkt/sdk-api";
import { TransactionData } from "@/model/TransactionData";

/**
 * There are two important things to note regarding the tzkt api:
 * 1. It does not have an explicit rate-limiting system. It just starts rejecting requests when there are too many to answer;
 * 2. The get transactions endpoint has a maximum of 10000 txs and defaults to 100.
 * I chose to use the max. It makes no sense to not show every transaction.
 */
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const data: TransactionData[] = [];

    const transactions = await operationsGetTransactions({
      level: {
        eq: Number.parseInt(req.query.blockLevel?.toString() ?? "-1"),
      },
      limit: 10000,
    });

    transactions.forEach((tx) => {
      data.push({
        id: tx.id,
        sender: tx.sender,
        target: tx.target,
        amount: (tx.amount ?? 0) / 1000000, //convert from mutez to tez
        status: tx.status,
      });
    });

    return res.status(200).json(data);
  } catch (err) {
    return res.status(500).send(err);
  }
}
