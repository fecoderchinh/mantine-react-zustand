module.exports = {
   preset: 'ts-jest/presets/default-esm',
   testEnvironment: 'jest-environment-jsdom',
   setupFilesAfterEnv: [
      '<rootDir>/jest.setup.ts'
   ],
   moduleNameMapper: {
      '^@tests': '<rootDir>/tests',
      '^@/(.*)$': ['<rootDir>/src/$1'],
      '\\.(css|less|scss)$': 'identity-obj-proxy'
   },
   transform: {
      '\\.css\\.ts$': '@vanilla-extract/jest-transform',
      '^.+\\.(ts|tsx)?$': ['ts-jest', {diagnostics: {ignoreCodes: ['TS151001']}}],
   },
   moduleFileExtensions: ['js', 'json', 'ts', 'tsx'],
   globals: {
      '__VITE_BACKEND_URL__': 'test'
   }
};