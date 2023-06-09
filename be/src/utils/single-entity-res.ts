export type SingleEntityRes<T> = {
  entity: T;
  meta?: Record<string, unknown>;
};

export const singleEntityRes = <T>(entity: T, meta?: SingleEntityRes<T>['meta']): SingleEntityRes<T> => {
  return {
    entity,
    ...(meta ? { meta } : {}),
  };
};
