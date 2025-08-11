import { v4 as uuidv4 } from 'uuid';
console.log('🔍 Analyze User Behavior Flow started at', new Date().toISOString());
'use server';

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const AnalyzeUserBehaviorInputSchema = z.object({
  userActionsData: z
    .string()
    .max(1000, "Input too long. Please provide less than 1000 characters.")
    .describe(
      'A string containing the aggregated data of user actions, interactions, and engagement metrics on the platform.'
    ),
});
export type AnalyzeUserBehaviorInput = z.infer<typeof AnalyzeUserBehaviorInputSchema>;

const AnalyzeUserBehaviorOutputSchema = z.object({
  trendAnalysis: z
    .string()
    .describe('An analysis of the trends observed in user behavior data.'),
  recommendations: z
    .string()
    .describe(
      'Specific recommendations on how to improve the user experience and platform engagement based on the trend analysis.'
    ),
});
export type AnalyzeUserBehaviorOutput = z.infer<typeof AnalyzeUserBehaviorOutputSchema>;

export async function analyzeUserBehavior(
  input: AnalyzeUserBehaviorInput
): Promise<AnalyzeUserBehaviorOutput> {
  const _reqId = uuidv4();
  const _start = Date.now();
  console.log(`[AI][analyzeUserBehavior] req=${_reqId} start=${new Date(_start).toISOString()}`);
  try {
    const _res = await analyzeUserBehaviorFlow(input);
    console.log(`[AI][analyzeUserBehavior] req=${_reqId} duration_ms=${Date.now()-_start}`);
    return _res;
  } catch (error) {
    console.error("Error in analyzeUserBehavior:", error);
    return {
      trendAnalysis: "Unable to analyze data due to an internal error.",
      recommendations: "Please try again later."
    };
  }
}

const analyzeUserBehaviorPrompt = ai.definePrompt({
  name: 'analyzeUserBehaviorPrompt',
  input: { schema: AnalyzeUserBehaviorInputSchema },
  output: { schema: AnalyzeUserBehaviorOutputSchema },
  prompt: `You are an expert in user behavior analysis for online platforms. Analyze the provided user actions data to identify key trends and provide actionable recommendations to improve user experience and platform engagement.

User Actions Data: {{{userActionsData}}}

Analyze the data and provide:
1. A trend analysis summarizing the key patterns and insights observed.
2. Recommendations on how to improve the user experience and platform engagement based on the trend analysis.
`,
});

const analyzeUserBehaviorFlow = ai.defineFlow(
  {
    name: 'analyzeUserBehaviorFlow',
    inputSchema: AnalyzeUserBehaviorInputSchema,
    outputSchema: AnalyzeUserBehaviorOutputSchema,
  },
  async input => {
    const { output } = await analyzeUserBehaviorPrompt(input);
    return output!;
  }
);

console.log('✅ Analyze User Behavior Flow finished at', new Date().toISOString());
