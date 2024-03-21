import PropTypes from 'prop-types';

const Link = ({route}) => {
    return (
        <div>
            <li className='p-4 hover:bg-slate-800 rounded text-white  md:p-2 text-2xl'>
                <a href={route.path}>{route.name}</a>
            </li>
        </div>
    );
};

Link.propTypes = {
    route: PropTypes.object
}

export default Link;