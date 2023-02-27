import { forwardRef, InputHTMLAttributes } from 'react'
import { HelperText, InputContainer, InputElement } from './styles'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: string
  helperText?: string
  isDirty?: boolean
}

export const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const { error, helperText, id, type, isDirty, ...restProps } = props

  return (
    <InputContainer id={id}>
      <div>
        <InputElement type={type ?? 'text'} ref={ref} {...restProps} />
        {!isDirty && helperText && <HelperText>{helperText}</HelperText>}
      </div>

      {error && <span>{error}</span>}
    </InputContainer>
  )
})

Input.displayName = 'Input'
