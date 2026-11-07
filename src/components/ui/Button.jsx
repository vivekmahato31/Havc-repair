import {Link} from 'react-router-dom';
export default function Button({to,href,children,variant='primary',...props}){const cls=`btn btn-${variant}`;return to?<Link className={cls} to={to} {...props}>{children}</Link>:<a className={cls} href={href} {...props}>{children}</a>}
