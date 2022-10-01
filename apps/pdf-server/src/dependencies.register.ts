import '@babel/core';
import '@emotion/styled';
import '@chakra-ui/styled-system';
import 'utf-8-validate';
import { polyfill } from 'interweave-ssr';
import { existsSync, mkdirSync } from 'fs';
import { environment } from './environments/environment';

polyfill();

// this could be moved to a helper library
export const createDirectory = (directory: string) => {
  if (existsSync(directory)) return false;
  mkdirSync(directory, { recursive: true });
  return true;
};

createDirectory(environment.tmpFolder);
