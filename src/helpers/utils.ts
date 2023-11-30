/* eslint-disable @typescript-eslint/no-explicit-any */
export const hasOwnProperty = (object: any, target: PropertyKey) => {
   return Object.prototype.hasOwnProperty.call(object, target)
}
