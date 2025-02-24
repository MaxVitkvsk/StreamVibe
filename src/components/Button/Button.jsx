import classNames from "classnames"
import './Button.scss'
import Icon from '@/components/Icon'

const Button = (props) => {
    const {
        className,
        type = 'button',
        href, 
        target,
        mode = '',
        label, 
        isLabelVisible,
        iconName,
        iconPosition = 'before' // before | after

    } = props

    const isLink = href !== undefined
    const Component = isLink ? 'a' : 'button'
    const linkProps = {href, target}
    const buttonProps = {type}
    const specProps = isLink ? linkProps : buttonProps
    const title = !isLabelVisible ? label : undefined

    const iconComponent = iconName && (
        <Icon
            className = "button__icon"
            name = {iconName}
        >

        </Icon>
    )

    return (
        <Component 
        {...specProps}
        title = {title}
        aria-label = {title}
        className = {classNames(className,'button', {
            [`button--${mode}`]: mode
        })}
        >
            {iconPosition === 'before' && iconComponent}
            {isLabelVisible && (
                <span className="button__label">{label}</span>
            )}
            {iconPosition === 'after' && iconComponent}

        </Component>
    )

}

export default Button