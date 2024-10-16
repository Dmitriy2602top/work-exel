import { Link, Outlet } from 'react-router-dom';
import { ButtonPrimary } from '~/shared/ui';

const PageOne = () => {

    return (
        <div>
            <div>
                <Link to={'/two'}>Page 2</Link>
                <Link to={'/'}>Main page</Link>
            </div>
            <ButtonPrimary>Custom Button</ButtonPrimary>
            <Outlet />
        </div>
    );
}

export default PageOne
