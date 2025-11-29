import * as vscode from "vscode";

export interface PreviewBridge {
  createOrShowPreview(documentUri?: string, code?: string): Promise<void>;
}

export interface ValidationBridge {
  validateDiagram(code: string): Promise<{ valid: boolean; error?: string }>;
}

export function setPreviewBridge(_bridge: PreviewBridge) {
  // no-op placeholder for open-source build
}

export function setValidationBridge(_bridge: ValidationBridge) {
  // no-op placeholder for open-source build
}

export function registerTools(_context: vscode.ExtensionContext) {
  // no-op placeholder for open-source build
}

export function initializePlugin(_pluginId: string) {
  // no-op placeholder for open-source build
}

export async function aiHandler(
  _request: vscode.ChatRequest,
  _context: vscode.ChatContext,
  response: vscode.ChatResponseStream,
): Promise<void> {
  response.markdown("Mermaid Preview open-source build: AI handler is disabled.");
}

export class DiagramRegenerator {
  static async regenerateDiagram(
    _uri: vscode.Uri,
    _originalQuery?: string,
    _changedFiles?: string[],
    _metadata?: any,
  ): Promise<void> {
    vscode.window.showInformationMessage(
      "Diagram regeneration is not available in this open-source build.",
    );
  }
}
