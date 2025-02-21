import confetti from 'canvas-confetti';
import type { ReactNode } from 'react';

import { isEmpty } from './validation';

type GeneratorListProps<Type> = {
  items: Type[];
  render: (item: Type, index: number) => ReactNode;
  separator?: (item: Type, index: number) => ReactNode;
};

export function ListGenerator<Type>({ items, render, separator }: GeneratorListProps<Type>) {
  if (isEmpty(items)) return null;

  return items.map((item: Type, index: number) => {
    if (separator && index % 2 !== 0) {
      return [separator(item, index), render(item, index)];
    }

    return render(item, index);
  });
}

export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength) + '...';
}

export function fireConfetti() {
  return confetti();
}
