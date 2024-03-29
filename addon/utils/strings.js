import { decamelize, capitalize } from '@ember/string';

const WORD_SEPERATORS = new RegExp('[-_\\. ]', 'g');

export const humanize = (string) => {
  return capitalize(decamelize(string.toString()).replace(WORD_SEPERATORS, ' '));
};

export const titlecase = (string) =>
  decamelize(string)
    .split(WORD_SEPERATORS)
    .map((w) => capitalize(w))
    .join(' ');
