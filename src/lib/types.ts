import type { OpenAPIHono } from '@hono/zod-openapi';
import type { PinoLogger } from 'hono-pino';
import type { RouteConfig } from '@hono/zod-openapi';
import type { RouteHandler } from '@hono/zod-openapi';


export interface AppBindings {
  Variables: {
    logger: PinoLogger
  }
}

export type AppOpenAPI = OpenAPIHono<AppBindings>;

export type AppRouteHandler<R extends RouteConfig> = RouteHandler<R, AppBindings>;
