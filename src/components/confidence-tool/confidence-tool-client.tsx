"use client";

import type { AssessPropertyConfidenceScoreInput, AssessPropertyConfidenceScoreOutput } from '@/ai/flows/property-confidence-score';
import { getConfidenceScoreAction } from '@/app/confidence-tool/actions';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2, ThumbsUp, AlertTriangle, Sparkles, BarChartBig } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";

const formSchema = z.object({
  propertyDetails: z.string().min(10, { message: "Les détails de la propriété doivent contenir au moins 10 caractères." }).max(2000, "Maximum 2000 caractères."),
  propertyLocation: z.string().min(5, { message: "L'adresse doit contenir au moins 5 caractères." }).max(200, "Maximum 200 caractères."),
  marketAnalysis: z.string().optional().default("").max(1000, "Maximum 1000 caractères."),
  financialData: z.string().optional().default("").max(1000, "Maximum 1000 caractères."),
});

export function ConfidenceToolClient() {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<AssessPropertyConfidenceScoreOutput | null>(null);
  const [error, setError] = useState<string | null>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      propertyDetails: "",
      propertyLocation: "",
      marketAnalysis: "",
      financialData: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    setResult(null);
    setError(null);

    const inputData: AssessPropertyConfidenceScoreInput = {
      propertyDetails: values.propertyDetails,
      propertyLocation: values.propertyLocation,
      marketAnalysis: values.marketAnalysis || undefined, // Pass undefined if empty
      financialData: values.financialData || undefined, // Pass undefined if empty
    };
    
    const response = await getConfidenceScoreAction(inputData);

    setIsLoading(false);
    if (response.success && response.data) {
      setResult(response.data);
      toast({
        title: "Analyse terminée !",
        description: "Votre score de confiance a été calculé.",
      });
    } else {
      setError(response.error || "Une erreur inconnue est survenue.");
      toast({
        title: "Erreur d'analyse",
        description: response.error || "Impossible de calculer le score de confiance.",
        variant: "destructive",
      });
    }
  }

  return (
    <div className="space-y-8">
      <Card className="shadow-xl">
        <CardHeader>
          <div className="flex items-center gap-2 mb-2">
            <BarChartBig className="h-8 w-8 text-primary" />
            <CardTitle className="text-2xl md:text-3xl font-headline text-primary">Formulaire d'Analyse IA</CardTitle>
          </div>
          <CardDescription className="text-md">
            Remplissez les informations ci-dessous pour obtenir une estimation de la compatibilité de votre bien avec les services de TrustHome.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="propertyDetails"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-semibold">Détails de la propriété</FormLabel>
                    <FormControl>
                      <Textarea rows={5} placeholder="Ex: Appartement T3 de 70m², 2 chambres, balcon, bon état général, cuisine équipée..." {...field} />
                    </FormControl>
                    <FormDescription>Description complète du bien (taille, nombre de pièces, équipements, état).</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="propertyLocation"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-semibold">Localisation du bien</FormLabel>
                    <FormControl>
                      <Input placeholder="Ex: 123 Rue de la Paix, 75002 Paris" {...field} />
                    </FormControl>
                     <FormDescription>Adresse complète de la propriété.</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="marketAnalysis"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-semibold">Analyse du marché (Optionnel)</FormLabel>
                    <FormControl>
                      <Textarea rows={3} placeholder="Ex: Prix moyen au m² dans le quartier, demande locative, projets urbains..." {...field} />
                    </FormControl>
                    <FormDescription>Données d'analyse de marché pour la localisation (si disponibles).</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="financialData"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-semibold">Données financières (Optionnel)</FormLabel>
                    <FormControl>
                      <Textarea rows={3} placeholder="Ex: Loyer actuel ou potentiel, charges de copropriété, taxe foncière..." {...field} />
                    </FormControl>
                    <FormDescription>Informations financières relatives au bien (revenus locatifs, charges).</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" disabled={isLoading} size="lg" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Analyse en cours...
                  </>
                ) : (
                  "Obtenir le Score de Confiance"
                )}
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>

      {isLoading && (
        <div className="text-center py-8">
          <Loader2 className="h-12 w-12 animate-spin text-primary mx-auto" />
          <p className="mt-2 text-lg text-muted-foreground">L'IA analyse votre propriété...</p>
        </div>
      )}

      {error && !isLoading && (
         <Card className="border-destructive bg-destructive/10 shadow-lg">
          <CardHeader className="flex flex-row items-center gap-2">
            <AlertTriangle className="h-8 w-8 text-destructive" />
            <CardTitle className="text-destructive font-headline">Erreur d'Analyse</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-destructive">{error}</p>
          </CardContent>
        </Card>
      )}

      {result && !isLoading && (
        <Card className="shadow-xl border-primary/50">
          <CardHeader>
            <div className="flex items-center gap-2 mb-2">
                <Sparkles className="h-8 w-8 text-accent" />
                <CardTitle className="text-2xl md:text-3xl font-headline text-primary">Résultats de l'Analyse IA</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="text-xl font-headline text-accent mb-2">Score de Confiance TrustHome</h3>
              <div className="flex items-center gap-4">
                <ThumbsUp className="h-16 w-16 text-primary" />
                <p className="text-6xl font-bold text-primary">{result.confidenceScore}<span className="text-3xl">/100</span></p>
              </div>
              <div className="w-full bg-muted rounded-full h-4 mt-2">
                <div
                  className="bg-primary h-4 rounded-full transition-all duration-500 ease-out"
                  style={{ width: `${result.confidenceScore}%` }}
                />
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-headline text-accent mb-2">Justification du Score</h3>
              <p className="text-foreground whitespace-pre-wrap p-4 bg-muted/50 rounded-md">{result.rationale}</p>
            </div>

            {result.recommendations && (
              <div>
                <h3 className="text-xl font-headline text-accent mb-2">Nos Recommandations</h3>
                <p className="text-foreground whitespace-pre-wrap p-4 bg-muted/50 rounded-md">{result.recommendations}</p>
              </div>
            )}
          </CardContent>
          <CardFooter>
            <p className="text-sm text-muted-foreground">
              Ce score est une estimation basée sur les informations fournies. Une évaluation plus détaillée sera effectuée par nos experts.
            </p>
          </CardFooter>
        </Card>
      )}
    </div>
  );
}
