// src/app/confidence-tool/actions.ts
'use server';

import { assessPropertyConfidenceScore, AssessPropertyConfidenceScoreInput, AssessPropertyConfidenceScoreOutput } from '@/ai/flows/property-confidence-score';
import { z } from 'zod';

// Re-define schema here for input validation if needed, or ensure it's compatible.
// The Genkit flow already has Zod schema, so direct pass-through can work.
// For robustness, you might re-validate or transform.

const AssessPropertyConfidenceScoreInputSchema = z.object({
  propertyDetails: z.string().min(10, "Property details must be at least 10 characters."),
  propertyLocation: z.string().min(5, "Property location must be at least 5 characters."),
  marketAnalysis: z.string().optional(),
  financialData: z.string().optional(),
});


export async function getConfidenceScoreAction(
  input: AssessPropertyConfidenceScoreInput
): Promise<{ success: boolean; data?: AssessPropertyConfidenceScoreOutput; error?: string }> {
  const validatedInput = AssessPropertyConfidenceScoreInputSchema.safeParse(input);

  if (!validatedInput.success) {
    const formErrors = validatedInput.error.flatten().formErrors;
    const fieldErrorMessages = Object.values(validatedInput.error.flatten().fieldErrors || {}).flat();
    const allErrors = [...formErrors, ...fieldErrorMessages];
    const errorMessage = allErrors.length > 0 ? allErrors.join('; ') : "Validation a échoué côté serveur. Veuillez vérifier vos saisies.";
    return { success: false, error: errorMessage };
  }

  try {
    const result = await assessPropertyConfidenceScore(validatedInput.data);
    return { success: true, data: result };
  } catch (error) {
    console.error("Error getting confidence score:", error);
    let errorMessage = "Failed to assess property confidence.";
    if (error instanceof Error) {
        errorMessage = error.message;
    }
    return { success: false, error: errorMessage };
  }
}
