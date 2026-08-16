"use server";

import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY || "",
});

export interface MediaFileInput {
  inlineData: {
    mimeType: string;
    data: string;
  };
}

export async function processClientMedia(files: MediaFileInput[]) {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-pro", // Changed to gemini-2.5-pro as gemini-3.1-pro might not exist yet
      config: {
        systemInstruction: `
          # ROLE & CAPABILITIES
          You are "Antigravity AI Engine," an elite multimedia intelligence and business asset analyst.
          
          # CORE MISSION
          Deeply analyze every piece of input provided—including PDFs, logos, details, and Malayalam audio recordings.
          Synthesize all inputs into a single structured response.

          # MALAYALAM AUDIO INGESTION:
          - Perform full speech-to-text transcription of Malayalam audio files.
          - Output both: Malayalam transcript (in Malayalam script) and English translation.

          # STRICT OUTPUT FORMAT:
          Respond in valid JSON only, matching:
          {
            "transcription_and_audio_analysis": {
              "malayalam_transcript": "string",
              "english_translation": "string",
              "key_verbal_requirements": ["string"]
            },
            "document_analysis": {
              "core_business_logic": ["string"],
              "technical_constraints": ["string"],
              "identified_conflicts": []
            },
            "brand_identity": {
              "extracted_hex_colors": { "primary": "string", "secondary": "string", "accent": "string" },
              "typography_style": "string",
              "logo_insights": "string"
            },
            "nextjs_implementation_spec": {
              "recommended_components": ["string"],
              "tailwind_theme_config": {},
              "state_management_requirements": ["string"]
            }
          }
        `,
        responseMimeType: "application/json",
        temperature: 0.2,
      },
      contents: [
        ...files.map((file) => ({
          inlineData: file.inlineData,
        })),
        {
          text: "Perform full deep analysis on all uploaded assets (PDFs, Logos, Audio files, Details) according to your system prompt instructions.",
        },
      ],
    });

    const resultText = response.text || "{}";
    return { success: true, data: JSON.parse(resultText) };
  } catch (error: unknown) {
    console.error("Antigravity Engine Analysis Error:", error);
    return { success: false, error: error instanceof Error ? error.message : "Unknown error" };
  }
}
