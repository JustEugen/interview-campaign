export type MultiEntityRes<T> = {
  entities: T[];
  count: number;
  meta?: Record<string, unknown>;
};

export const multiEntityRes = <T>(
  entities: T[],
  count: number,
  meta?: MultiEntityRes<T>['meta'],
): MultiEntityRes<T> => {
  return {
    entities,
    count,
    ...(meta ? { meta } : {}),
  };
};
