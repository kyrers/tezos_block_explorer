import { NextApiRequest, NextApiResponse } from "next";
import {
  Block,
  blocksGet,
  operationsGetTransactionsCount,
} from "@tzkt/sdk-api";
import { BlockData } from "@/model/BlockData";

/**
 * There are two important things to note regarding the tzkt api:
 * 1. It does not have an explicit rate-limiting system. It just starts rejecting requests when there are too many to answer;
 * 2. The get blocks endpoint has a maximum of 10000 blocks and defaults to 100. I chose to use the default.
 * Later, if needed, we can either fetch more or let the user search for a specific block
 */
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    //First, we get the latest 100 blocks
    const blocks = await blocksGet({
      sort: {
        desc: "level",
      },
    });

    //Get the transaction count for each block
    const data = await getTransactionCount(blocks);
    return res.status(200).json(data);
  } catch (err) {
    return res.status(500).send(err);
  }
}

const getTransactionCount = async (blocks: Block[]) => {
  const data: BlockData[] = [];

  //One way to prevent being rate limited is not spamming every request. Instead, we fetch in batches of 5.
  const fetch5 = (batch: Block[]) => {
    return Promise.all(
      batch.map(async (block) => {
        const txCount = await operationsGetTransactionsCount({
          level: {
            eq: block.level,
          },
        });

        data.push({
          level: block.level,
          proposer: block.proposer,
          timestamp: block.timestamp,
          transactionCount: txCount,
        });
      })
    );
  };

  //Fetch transaction count for blocks in batches of 5.
  for (let i = 0; i < blocks.length; i = i + 5) {
    await fetch5(blocks.slice(i, i + 5));
  }

  return data.sort((a, b) => (b.level ?? 0) - (a.level ?? 0));
};
