import { ReactNode } from 'react'
import { IconBgColor, IconContainer, ItemContainer } from './styles'

interface ItemWithIconProps {
  iconComponent: ReactNode
  iconBgColor?: IconBgColor
  text: string | ReactNode
}

export function ItemWithIcon(props: ItemWithIconProps) {
  return (
    <ItemContainer>
      <IconContainer bgColor={props.iconBgColor ?? 'base-text'}>
        {props.iconComponent}
      </IconContainer>
      {props.text}
    </ItemContainer>
  )
}
