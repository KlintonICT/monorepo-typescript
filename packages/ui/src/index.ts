import { isEven } from "@kt-package/utils"
import moment from "moment"

export const FooComponent = () => {
  const randomNumber = Math.floor(Math.random() * 5)

  console.log(`[${moment().toISOString()}] FooComponent: ${randomNumber} -> isEven: ${isEven(randomNumber)}`)

  // UI component implementation ...
}
