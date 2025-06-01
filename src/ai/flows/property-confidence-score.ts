// src/ai/flows/property-confidence-score.ts
'use server';

/**
 * @fileOverview This file defines a Genkit flow for assessing TrustHome's confidence in managing a landlord's property.
 *
 * - assessPropertyConfidenceScore - A function that calculates the confidence score for a property.
 * - AssessPropertyConfidenceScoreInput - The input type for the assessPropertyConfidenceScore function.
 * - AssessPropertyConfidenceScoreOutput - The return type for the assessPropertyConfidenceScore function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AssessPropertyConfidenceScoreInputSchema = z.object({
  propertyDetails: z.string().describe('Detailed description of the property including size, number of rooms, amenities, and condition.'),
  propertyLocation: z.string().describe('The full address of the property.'),
  marketAnalysis: z.string().optional().describe('Optional market analysis data for the property location, if available.'),
  financialData: z.string().optional().describe('Optional financial data related to the property, such as rental income and expenses.'),
});
export type AssessPropertyConfidenceScoreInput = z.infer<typeof AssessPropertyConfidenceScoreInputSchema>;

const AssessPropertyConfidenceScoreOutputSchema = z.object({
  confidenceScore: z.number().describe('A numerical score (0-100) representing TrustHome\s confidence in successfully managing the property. Higher scores indicate greater confidence.'),
  rationale: z.string().describe('A detailed explanation of the factors contributing to the confidence score, including property details, location analysis, and potential risks.'),
  recommendations: z.string().optional().describe('Optional recommendations for the landlord to improve the property\s attractiveness or reduce potential risks.'),
});
export type AssessPropertyConfidenceScoreOutput = z.infer<typeof AssessPropertyConfidenceScoreOutputSchema>;

export async function assessPropertyConfidenceScore(input: AssessPropertyConfidenceScoreInput): Promise<AssessPropertyConfidenceScoreOutput> {
  return assessPropertyConfidenceScoreFlow(input);
}

const prompt = ai.definePrompt({
  name: 'assessPropertyConfidenceScorePrompt',
  input: {schema: AssessPropertyConfidenceScoreInputSchema},
  output: {schema: AssessPropertyConfidenceScoreOutputSchema},
  prompt: `You are an AI assistant specialized in assessing the viability of properties for TrustHome, a professional property operation company.

  Evaluate the potential of a property based on the following details:

  Property Details: {{{propertyDetails}}}
  Property Location: {{{propertyLocation}}}
  Market Analysis (if available): {{{marketAnalysis}}}
  Financial Data (if available): {{{financialData}}}

  Consider factors such as property condition, location desirability, market trends, and financial viability.

  Provide a confidence score (0-100) indicating TrustHome's likelihood of success with the property.
  Explain the rationale behind the score, including strengths, weaknesses, and potential risks.
  Also provide recommendations, if applicable.

  Respond with a JSON object.
  `,
});

const assessPropertyConfidenceScoreFlow = ai.defineFlow(
  {
    name: 'assessPropertyConfidenceScoreFlow',
    inputSchema: AssessPropertyConfidenceScoreInputSchema,
    outputSchema: AssessPropertyConfidenceScoreOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
