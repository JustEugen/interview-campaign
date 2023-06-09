export type MultiEntityRes<T> = {
  entities: T[];
  count: number;
  meta?: Record<string, unknown>;
};
