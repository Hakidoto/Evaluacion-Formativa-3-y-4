import {
    AiOutlineArrowLeft,
    AiOutlineArrowRight,
} from 'react-icons/ai'

export const CardArrows = ({
    users,
    actual,
    previo,
    siguiente
}) => {
    return (
        <div className='arrows'>
            <div
                className='arrow-left'
                hidden={actual === 0}
                onClick={previo}
            >
                <AiOutlineArrowLeft />
            </div>

            <div
                className='arrow-right'
                hidden={actual === 20}
                onClick={siguiente}
            >
                <AiOutlineArrowRight />
            </div>
        </div>
    )
}

export const CardHeader = ({ user }) => {
    const { name, picture } = user;
    return (
        <div className="card-header">
            <img src={picture.large} alt={`${name.first} ${name.last}`}></img>
        </div>
    );
};

export const CardBody = ({ textos }) => {
    return (
        <div className="card-body">
            <div className="card-text">
                <p>{textos.parrafo}</p>

            </div>
            <div className="card-title">
                <h5>{textos.main}</h5>

            </div>

        </div>
    );
};

export const CardFooter = ({ cambiarTextos, textos }) => {
    const clase = (e) => {
        document
            .querySelectorAll('li > img')
            .forEach((icono) => (icono.className = ''));
        e.target.className = 'active';
        cambiarTextos(e.target.name)
    };

    return (
        <div className="card-footer">
            <ul>
                <li>
                    <img
                        name='user'
                        src={process.env.PUBLIC_URL + '/imagenes/user.svg'}
                        alt="icon"
                        onMouseEnter={clase}
                        className={
                            textos.icono === 'user' ? 'active' : ''
                        }
                    />
                </li>
                <li>
                    <img
                        name='email'
                        src={process.env.PUBLIC_URL + '/imagenes/email.svg'}
                        alt="icon"
                        onMouseEnter={clase}
                        className={
                            textos.icono === 'email' ? 'active' : ''
                        }
                    />
                </li>
                <li>
                    <img
                        name='birthday'
                        src={process.env.PUBLIC_URL + '/imagenes/birthday.svg'}
                        alt="icon"
                        onMouseEnter={clase}
                        className={
                            textos.icono === 'birthday' ? 'active' : ''
                        }
                    />
                </li>
                <li>
                    <img
                        name='address'
                        src={process.env.PUBLIC_URL + '/imagenes/address.svg'}
                        alt="icon"
                        onMouseEnter={clase}
                        className={
                            textos.icono === 'address' ? 'active' : ''
                        }
                    />
                </li>
                <li>
                    <img
                        name='phone'
                        src={process.env.PUBLIC_URL + '/imagenes/phone.svg'}
                        alt="icon"
                        onMouseEnter={clase}
                        className={
                            textos.icono === 'phone' ? 'active' : ''
                        }
                    />
                </li>
                <li>
                    <img
                        name='username'
                        src={process.env.PUBLIC_URL + '/imagenes/password.svg'}
                        alt="icon"
                        onMouseEnter={clase}
                        className={
                            textos.icono === 'username' ? 'active' : ''
                        }
                    />
                </li>
            </ul>

        </div>
    );
};