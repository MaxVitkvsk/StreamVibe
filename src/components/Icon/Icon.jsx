import classNames from "classnames"
import './Icon.scss'
import { Icon as MinistaIcon } from "minista"

const Icon = (props) => {
    const {
        className, 
        name,
        hasFill = false
    } = props
    return(
        <span 
            className={classNames(className, 'icon')}
        >
            <MinistaIcon
                iconId={name}
                fill={ hasFill ? 'CurrentColor' : 'none' }
                stroke={ hasFill ? 'none' : 'CurrentColor'}
            >

            </MinistaIcon>

        </span>
    )
}

export default Icon