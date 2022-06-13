import { useEffect, useState } from "react";
import { CardHeader, CardBody, CardFooter, CardArrows } from "./CardElements";

export const Card = ({ users, newUser }) => {
	const [actual, setActual] = useState(0);
	const [textos, setTextos] = useState({});

	const previo = () => {
		setActual(actual - 1);
		if (actual === 0) {
			setActual(0);
		}
	};

	const siguiente = () => {
		setActual(actual + 1);
		if (actual === users.length - 5) {
			newUser();
			console.log(users);
			// setActual(users.length - 1);
		}
	};

    useEffect(() => {
        cambiarTextos('user');
    }, [actual]);

    const cambiarTextos = (icono) => {
        switch (icono) {
            case 'user':
                setTextos({
                    parrafo: "Hola, mi nombre es",
                    main: `${users[actual].name.first} ${users[actual].name.last}`,
					icono: 'user',
                });
                break;
            case 'email':
                setTextos({
                    parrafo: "Mi Email es",
                    main: `${users[actual].email}`,
					icono: 'email',
                });
                break;
            case 'birthday':
                setTextos({
                    parrafo: "Mi cumpleaños es",
                    main: `${users[actual].dob.date.slice(
						8,
						10
					)}/${users[actual].dob.date.slice(5, 7)}/${users[
						actual
					].dob.date.slice(0, 4)}`,
					icono: 'birthday',
                });
                break;
            case 'address':
                setTextos({
                    parrafo: "Mi direccion es",
                    main: `${users[actual].location.street.number} ${users[actual].location.street.name}`,
                    icono: 'address',
                });
            break;
                case 'phone':
                    setTextos({
                        parrafo: 'Mi numero de telefono es',
                        main: `${users[actual].phone}`,
                        icono: 'phone',
                    });
                    break;
            case 'username':
                setTextos({
                    parrafo: "Mi nombre de usuario es",
                    main: `${users[actual].login.username}`,
                    icono: 'username',
                });
                break;

            default:
                break;
        }
    };

    return (
        <>
            <div className="card">
                <CardHeader user={users[actual]} />
                <CardBody textos={textos} />
                <CardFooter
                    user={users[actual]}
                    textos={textos}
                    cambiarTextos={cambiarTextos} />
                <CardArrows
                    user={users[actual]}
                    actual={actual}
                    previo={previo}
                    siguiente={siguiente} />
            </div>
        </>
    );
};