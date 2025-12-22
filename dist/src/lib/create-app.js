import { OpenAPIHono } from "@hono/zod-openapi";
import { notFound, onError, serveEmojiFavicon } from "stoker/middlewares";
import { getPinoLogger } from "@/middlewares/pino-logger.js";
import { requestId } from "hono/request-id";
import { defaultHook } from "stoker/openapi";
export function createRouter() {
    return new OpenAPIHono({
        strict: false,
        defaultHook,
    });
}
export default function createApp() {
    const app = createRouter();
    app.use(getPinoLogger());
    app.use(requestId());
    app.use(serveEmojiFavicon("🚀"));
    app.notFound(notFound);
    app.onError(onError);
    return app;
}
