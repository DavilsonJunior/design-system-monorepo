import { ComponentProps } from 'react'
import { Check } from 'phosphor-react'
import { CheckboxIndicator } from '@radix-ui/react-checkbox'
import { CheckboxContainer } from './styles'

export interface CheckboxProps
  extends ComponentProps<typeof CheckboxContainer> {}

export function Checkbox(props: CheckboxProps) {
  return (
    <CheckboxContainer {...props}>
      <CheckboxIndicator asChild>
        <Check weight="bold" />
      </CheckboxIndicator>
    </CheckboxContainer>
  )
}
