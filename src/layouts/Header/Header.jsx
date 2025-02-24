import './Header.scss'
import '@/styles'
import Logo from '@/components/Logo/Logo'
import Button from '@/components/Button'
import classNames from 'classnames'
import BurgerButton from '@/components/BurgerButton'

const Header = (props) => {
    const {url} = props
    const menuItem = [
        {
            label: "Home",
            href: "/"
        },

        {
            label: "Movies & Shows",
            href: "/movies"
        },

        {
            label: "Support",
            href: "/support"
        },

        {
            label: "Subscriptions",
            href: "/Subscriptions"
        }
    ]


    return( 
        <header className='header'>
            <div className="header__inner container">
                <Logo 
                    className='header__logo'
                    loading='eager'
                />
                <nav className="header__menu">
                    <ul className="header__menu-list">
                        {menuItem.map(({label, href}, index) => {
                            return (
                                <li className='header__menu-item' key={index}>
                                    <a 
                                        href={href} 
                                        className={classNames('header__menu-link', {
                                            'is-active': href === url 
                                        })}
                                    >
                                        {label}
                                    </a>
                                </li>
                            )
                        })}

                    </ul>
                </nav>
                <div className="header__actions">
                        <Button 
                            label ='Search' 
                            className='header__button'
                            isLabelVisible = {false}
                            mode = 'transparent'
                            iconName = 'search'
                        >
                        </Button>

                        <Button 
                            href="/"
                            label ='Notification'
                            isLabelVisible = {false}
                            mode = 'transparent'
                            iconName = 'notifications'
                        >
                            
                        </Button>
                </div>
                <BurgerButton 
                    className = 'header__burger-button visible-tablet'
                >
                </BurgerButton>
            </div>
        </header>
    )
}

export default Header