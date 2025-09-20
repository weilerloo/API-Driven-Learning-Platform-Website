import type { Config } from "@react-router/dev/config";

export default {
  ssr: true,
  appDirectory: "src/app", // 👈 or "frontend/app" if config file is at project root
} satisfies Config;
