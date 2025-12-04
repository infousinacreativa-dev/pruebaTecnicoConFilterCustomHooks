import { Link} from 'react-router'

export function NavigationLinks({ links, action, handleClick }) {

    return (
        <>
            {links.map((link) => {
                return (
                    <>
                        {action
                            ?
                            <li className="hover:scale-110 transition-all duration-500 hover:underline ">
                                <Link key={link.to} to={link.to} onClick={handleClick}>
                                    {link.label}
                                </Link>
                            </li>
                            :
                            <li className="hover:scale-110 transition-all duration-500 hover:underline ">
                                <Link key={link.to} to={link.to} >
                                    {link.label}
                                </Link>
                            </li>
                        }
                    </>
                )
            })}
        </>
    )
}