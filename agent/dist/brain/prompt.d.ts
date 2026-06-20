import { type AgentSnapshot } from "../monitor/snapshot.js";
import { type ScorerOutput } from "../strategy/scorer.js";
import { type GuardResult } from "../guards/aggregator.js";
export interface PromptContext {
    snapshot: AgentSnapshot;
    scorerOutput: ScorerOutput;
    guardResult: GuardResult;
    portfolioUsd: number;
    openPositions: string[];
}
export declare function buildTradePrompt(ctx: PromptContext): string;
//# sourceMappingURL=prompt.d.ts.map