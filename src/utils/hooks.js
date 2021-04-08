import { useEffect } from 'react';

export const useComponentDidMount = fn => {
  useEffect(fn, []);
};
