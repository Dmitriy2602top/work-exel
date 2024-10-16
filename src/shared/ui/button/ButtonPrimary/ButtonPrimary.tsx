import { FC } from 'react'
import { PropsOf } from '~/shared/assets/lib/types'
import style from './buttonStyle.module.scss'

interface ButtonPrimaryProps extends PropsOf<'button'> {

}

export const ButtonPrimary: FC<ButtonPrimaryProps> = props => {
    return (
        <button {...props} className={style.button} />
    )
}

