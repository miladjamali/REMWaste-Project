import { FC } from "react"

interface InputTypes {
  text: string
}

const Input: FC<InputTypes> = ({ text }) => {
  return <div>{text}</div>
}

export default Input
