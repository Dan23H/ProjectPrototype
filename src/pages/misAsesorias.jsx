import { Navbar} from "../components"
import 'bootstrap/dist/css/bootstrap.min.css';
import backgroundImage from '../images/uao-2.png';;
import '../../styles/asesorias.css';
import { AsesoriasProgramadas} from '../components/asesoriasProgramadas'
export const MisAsesorias = ({name}) => {
    return (
        <>
            <div style={{
                backgroundImage: `url(${backgroundImage})`,
                height: "100vh",
                backgroundSize: "cover",
                backgroundPosition: "center",
                textAlign: "center",
            }}>
                <Navbar name={name}/>
                <AsesoriasProgramadas />
            </div>
        </>
    )
}