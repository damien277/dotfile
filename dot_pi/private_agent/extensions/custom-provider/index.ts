import type { ExtensionAPI } from "@mariozechner/pi-coding-agent";

export default function (pi: ExtensionAPI) {
  // Register new provider với các model đã fix lỗi cú pháp
  pi.registerProvider("PikaAI", {
    baseUrl: "https://pikaai.xyz/v1",
    apiKey: "sk-steyg-Y6p5BNvxHZ61TDg53eMpOvUMrvkpV7KR",
    headers: {
      "User-Agent": "pi-coding-agent/1.0",
    },
    api: "openai-completions",
    models: [
      {
        id: "claude-sonnet-4.6",
        name: "Claude Sonnet 4.6",
        reasoning: true,
        contextWindow: 200000,
        maxTokens: 64000,
        input: ["text", "image"], // Map từ modalities.input
        cost: { input: 0, output: 0, cacheRead: 0, cacheWrite: 0 },
        compat: {
          maxTokensField: "max_tokens",
          supportsUsageInStreaming: true,
        },
      },
      {
        id: "claude-opus-4.6",
        name: "Claude Opus 4.6",
        reasoning: true,
        contextWindow: 200000,
        maxTokens: 64000,
        input: ["text", "image"],
        cost: { input: 0, output: 0, cacheRead: 0, cacheWrite: 0 },
        compat: {
          maxTokensField: "max_tokens",
          supportsUsageInStreaming: true,
        },
      },
      {
        id: "gemini-3.1-pro-preview",
        name: "Gemini 3.1 Pro",
        reasoning: true,
        contextWindow: 1000000,
        maxTokens: 65536,
        input: ["text", "image"],
        cost: { input: 0, output: 0, cacheRead: 0, cacheWrite: 0 },
        compat: {
          maxTokensField: "max_tokens",
          supportsUsageInStreaming: true,
        },
      },
      {
        id: "gpt-5.4",
        name: "GPT-5.4",
        reasoning: true,
        contextWindow: 400000,
        maxTokens: 128000,
        input: ["text", "image"],
        cost: { input: 0, output: 0, cacheRead: 0, cacheWrite: 0 },
        compat: {
          maxTokensField: "max_tokens",
          supportsUsageInStreaming: true,
        },
      },
    ],
  });
  pi.registerProvider("steyg", {
    baseUrl: "https://steyg.one/api/v1",
    apiKey: "sk-steyg-Y6p5BNvxHZ61TDg53eMpOvUMrvkpV7KR",
    headers: {
      "User-Agent": "pi-coding-agent/1.0",
    },
    api: "openai-completions",
    models: [
      {
        id: "gpt-5.6-sol",
        name: "GPT 5.6 Sol",
        reasoning: true,
        contextWindow: 200000,
        maxTokens: 64000,
        input: ["text", "image", "pdf"], // Map từ modalities.input
        cost: { input: 0, output: 0, cacheRead: 0, cacheWrite: 0 },
        compat: {
          maxTokensField: "max_tokens",
          supportsUsageInStreaming: true,
        },
      },
      {
        id: "gpt-5.6-terra",
        name: "GPT 5.6 Terra",
        reasoning: true,
        contextWindow: 200000,
        maxTokens: 64000,
        input: ["text", "image", "pdf"], // Map từ modalities.input
        cost: { input: 0, output: 0, cacheRead: 0, cacheWrite: 0 },
        compat: {
          maxTokensField: "max_tokens",
          supportsUsageInStreaming: true,
        },
      },
      {
        id: "gpt-5.6-luna",
        name: "GPT 5.6 Luna",
        reasoning: true,
        contextWindow: 200000,
        maxTokens: 64000,
        input: ["text", "image", "pdf"], // Map từ modalities.input
        cost: { input: 0, output: 0, cacheRead: 0, cacheWrite: 0 },
        compat: {
          maxTokensField: "max_tokens",
          supportsUsageInStreaming: true,
        },
      },
      {
        id: "claude-opus-4-8",
        name: "Claude Opus 4.8",
        reasoning: true,
        contextWindow: 200000,
        maxTokens: 64000,
        input: ["text", "image", "pdf"], // Map từ modalities.input
        cost: { input: 0, output: 0, cacheRead: 0, cacheWrite: 0 },
        compat: {
          maxTokensField: "max_tokens",
          supportsUsageInStreaming: true,
        },
      },
      {
        id: "claude-haiku-4-5",
        name: "Claude Haiku 4.5",
        reasoning: true,
        contextWindow: 200000,
        maxTokens: 64000,
        input: ["text", "image", "pdf"], // Map từ modalities.input
        cost: { input: 0, output: 0, cacheRead: 0, cacheWrite: 0 },
        compat: {
          maxTokensField: "max_tokens",
          supportsUsageInStreaming: true,
        },
      },
      {
        id: "claude-sonnet-5",
        name: "Claude Sonnet 5",
        reasoning: true,
        contextWindow: 200000,
        maxTokens: 64000,
        input: ["text", "image", "pdf"], // Map từ modalities.input
        cost: { input: 0, output: 0, cacheRead: 0, cacheWrite: 0 },
        compat: {
          maxTokensField: "max_tokens",
          supportsUsageInStreaming: true,
        },
      },
    ],
  });
}
