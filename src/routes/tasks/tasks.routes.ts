import { insertTasksSchema, patchTasksSchema, selectTasksSchema } from "@/db/schema.js";
import { NotFoundSchema } from "@/utils/constants.js";
import { createRoute } from "@hono/zod-openapi";
import { jsonContent, jsonContentRequired } from "stoker/openapi/helpers";
import { IdParamsSchema } from "stoker/openapi/schemas";
import { z } from "zod";

export const list = createRoute({
  tags: ["tasks"],
  path: "/tasks",
  method: "get",
  responses: {
    200: jsonContent(z.array(selectTasksSchema), "List of tasks")
  },
})

export const getOne = createRoute({
  tags: ["tasks"],
  path: "/tasks/{id}",
  method: "get",
  request: {
    params: IdParamsSchema
  },
  responses: {
    200: jsonContent(selectTasksSchema, "Task details"),
    404: jsonContent(NotFoundSchema, "Task not found"),
  },
})

export const create = createRoute({
  tags: ["tasks"],
  path: "/tasks",
  method: "post",
  request: {
    body: jsonContentRequired(insertTasksSchema, "Task to create")
  },
  responses: {
    200: jsonContent(selectTasksSchema, "Created task"),
  },
})

export const patch = createRoute({
  tags: ["tasks"],
  path: "/tasks/{id}",
  method: "patch",
  request: {
    params: IdParamsSchema,
    body: jsonContentRequired(patchTasksSchema, "Task to patch")
  },
  responses: {
    200: jsonContent(patchTasksSchema, "Patched task"),
    404: jsonContent(NotFoundSchema, "Task not found"),
  },
})


export type ListRoute = typeof list;

export type CreateRoute = typeof create;

export type GetOneRoute = typeof getOne;

export type PatchRoute = typeof patch;