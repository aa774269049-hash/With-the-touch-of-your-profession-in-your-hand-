// IMPORTANT: This file is used to provide a server-side interface to the AI flows.
// You can use these functions in your Server Components and Server Actions.
// DO NOT MODIFY THE AI FLOWS IN src/ai/flows

"use server"

import {
  smartJobSearch as smartJobSearchFlow,
  type SmartJobSearchInput,
} from "@/ai/flows/smart-job-search"
import {
  analyzeUserBehavior as analyzeUserBehaviorFlow,
  type AnalyzeUserBehaviorInput,
} from "@/ai/flows/analyze-user-behavior"

export const smartJobSearch = async (input: SmartJobSearchInput) => {
  return await smartJobSearchFlow(input)
}

export const analyzeUserBehavior = async (input: AnalyzeUserBehaviorInput) => {
  return await analyzeUserBehaviorFlow(input)
}
