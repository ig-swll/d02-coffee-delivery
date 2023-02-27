import { forwardRef, SelectHTMLAttributes } from 'react'
import { SelectContainer, SelectElement } from './styles'

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  error?: string
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  (props, ref) => {
    const { error, id, children, ...restProps } = props

    return (
      <SelectContainer id={id}>
        <SelectElement ref={ref} {...restProps}>
          {children}
        </SelectElement>

        {error && <span>{error}</span>}
      </SelectContainer>
    )
  },
)

Select.displayName = 'Input'
