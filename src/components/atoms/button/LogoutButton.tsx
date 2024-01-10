import React, { MouseEventHandler } from 'react'

type Props = {
  onClick: MouseEventHandler<HTMLButtonElement>
  href: string
}
const LogoutButton = React.forwardRef<HTMLButtonElement, Props>(
  (props: Props, ref) => {
    const { onClick } = props
    return (
      <button onClick={onClick} ref={ref}>
        ログアウト
      </button>
    )
  }
)

export default LogoutButton
