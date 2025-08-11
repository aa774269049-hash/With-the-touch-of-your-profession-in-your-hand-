import { v4 as uuidv4 } from 'uuid';
console.log('🔍 Smart Job Search Flow started at', new Date().toISOString());
'use server';

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const SmartJobSearchInputSchema = z.object({
  keywords: z
    .string()
    .max(200, "Keywords too long.")
    .describe('Keywords describing the desired job, e.g., software engineer, data analyst'),
  location: z
    .string()
    .max(100, "Location name too long.")
    .describe('The preferred location for the job, e.g., Riyadh, Jeddah'),
});
export type SmartJobSearchInput = z.infer<typeof SmartJobSearchInputSchema>;

const SmartJobSearchOutputSchema = z.object({
  jobSuggestions: z
    .array(z.string())
    .describe('A list of job suggestions based on the keywords and location.'),
  reasoning: z
    .string()
    .describe('The AI’s reasoning for the job suggestions provided.'),
});
export type SmartJobSearchOutput = z.infer<typeof SmartJobSearchOutputSchema>;

export async function smartJobSearch(input: SmartJobSearchInput): Promise<SmartJobSearchOutput> {
  const _reqId = uuidv4();
  const _start = Date.now();
  console.log(`[AI][analyzeUserBehavior] req=${_reqId} start=${new Date(_start).toISOString()}`);
  try {
    const _res = await smartJobSearchFlow(input);
    console.log(`[AI][smartJobSearch] req=${_reqId} duration_ms=${Date.now()-_start}`);
    return _res;
  } catch (error) {
    console.error("Error in smartJobSearch:", error);
    return {
      jobSuggestions: [],
      reasoning: "Unable to provide job suggestions due to an internal error."
    };
  }
}

const smartJobSearchPrompt = ai.definePrompt({
  name: 'smartJobSearchPrompt',
  input: { schema: SmartJobSearchInputSchema },
  output: { schema: SmartJobSearchOutputSchema },
  prompt: `You are a job search expert. A user is looking for a job with the following keywords: {{{keywords}}} in the following location: {{{location}}}.

  Suggest a list of relevant job titles and a short explanation of why you are suggesting these jobs.  Return the job suggestions in the jobSuggestions field.
  In the reasoning field, explain your reasoning for the job suggestions.
  `,
});

const smartJobSearchFlow = ai.defineFlow(
  {
    name: 'smartJobSearchFlow',
    inputSchema: SmartJobSearchInputSchema,
    outputSchema: SmartJobSearchOutputSchema,
  },
  async input => {
    const { output } = await smartJobSearchPrompt(input);
    return output!;
  }
);

console.log('✅ Smart Job Search Flow finished at', new Date().toISOString());
