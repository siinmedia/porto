import { renderToString } from "react-dom/server";
import { StartServer } from "@tanstack/react-start/server";
import type { StartServerContext } from "@tanstack/react-start/server";
import { createMemoryHistory } from "@tanstack/react-router";
import { getRouter } from "./router";

export async function render(opts: StartServerContext) {
  const router = getRouter();
  const memoryHistory = createMemoryHistory({
    initialEntries: [opts.request.url],
  });

  router.update({
    history: memoryHistory,
  });

  await router.load();

  const html = renderToString(<StartServer router={router} />);

  return { html };
}
