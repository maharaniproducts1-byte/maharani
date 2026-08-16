"use client";

import React, { useState } from "react";
import { processClientMedia, MediaFileInput } from "@/app/actions/analyze-client-data";

export default function ClientAnalyzer() {
  const [loading, setLoading] = useState(false);
  const [analysisResult, setAnalysisResult] = useState<Record<string, unknown> | null>(null);

  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (!files || files.length === 0) return;

    setLoading(true);
    try {
      const filePromises: Promise<MediaFileInput>[] = Array.from(files).map((file) => {
        return new Promise((resolve, reject) => {
          const reader = new FileReader();
          reader.onload = () => {
            const base64String = (reader.result as string).split(",")[1];
            resolve({
              inlineData: {
                mimeType: file.type,
                data: base64String,
              },
            });
          };
          reader.onerror = reject;
          reader.readAsDataURL(file);
        });
      });

      const mediaFiles = await Promise.all(filePromises);
      const res = await processClientMedia(mediaFiles);

      if (res.success) {
        setAnalysisResult(res.data);
      } else {
        alert("Error analyzing assets: " + res.error);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <h1 className="text-2xl font-bold">Client Media & Audio Antigravity Analyzer</h1>
      
      <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
        <input
          type="file"
          multiple
          accept="application/pdf,image/*,audio/*"
          onChange={handleFileUpload}
          disabled={loading}
          className="block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-violet-50 file:text-violet-700 hover:file:bg-violet-100"
        />
        <p className="mt-2 text-xs text-gray-500">Upload client PDFs, Logo Images, and Malayalam Voice Notes (.wav, .mp3, .m4a)</p>
      </div>

      {loading && (
        <div className="p-4 bg-blue-50 text-blue-700 rounded-md">
          Deeply analyzing PDFs, visual logos, and Malayalam audio files with Gemini...
        </div>
      )}

      {analysisResult && (
        <div className="bg-slate-900 text-slate-100 p-6 rounded-lg overflow-x-auto">
          <h2 className="text-lg font-semibold text-green-400 mb-4">Analysis Output</h2>
          <pre className="text-xs">{JSON.stringify(analysisResult, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}
