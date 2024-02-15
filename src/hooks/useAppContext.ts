import { Context, useContext } from 'react';

type TUseAppContextProps<T> = {
  context: Context<T>;
};

export function useAppContext<T>({ context }: TUseAppContextProps<T>) {
  const data = useContext(context);

  if (!data) {
    throw new Error(
      `Can not use ${context.displayName} without ${context.displayName} provider`,
    );
  }

  return data;
}
