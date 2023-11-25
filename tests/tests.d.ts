/* eslint-disable @typescript-eslint/no-unused-vars */
import { Matchers } from '@jest/expect'

interface JestNativeMatchers<R extends void | Promise<void>> {
   toBeDisabled(): R
   toBeEmptyElement(): R
   toBeEnabled(): R
   toBeVisible(): R
   toContainElement(element: ReactTestInstance | null): R
   toHaveTextContent(text: string | RegExp, options?: { normalizeWhitespace: boolean }): R
   toHaveProp(attr: string, value?: unknown): R
   toHaveStyle(style: StyleProp<ViewStyle | TextStyle | ImageStyle>): R
   toHaveAccessibilityState(state: AccessibilityState): R
   toHaveAccessibilityValue(state: AccessibilityValueMatcher): R

   /** @deprecated This function has been renamed to `toBeEmptyElement`. */
   toBeEmpty(): R
}

// implicit jest globals, types coming from `@types/jest`
declare global {
   namespace jest {
      type Matchers<R, T> = JestNativeMatchers<R>
   }
   const __VITE_BACKEND_URL__: string
}

// explicit jest globals, types coming from `@jest/globals`
declare module '@jest/expect' {
   type Matchers<R extends void | Promise<void>> = JestNativeMatchers<R>
}
