import { Form } from "react-bootstrap";
import "../../styles/TypeForm.css";

export const TypeForm = ({ tipo, setTipo }) => {
  const handleType = (e) => {
    setTipo(e.target.value);
  };

  return (
    <div className="box1">
      <label className="red-label">Tipo de asesor</label>
      <hr className="white-label" />
      <div className="table-responsive">
        <Form>
          <table className="table">
            <Form.Group>
              <tr>
                <td className={`${tipo === "profesores" ? "soft-red-background" : "white-background"}`}>
                  <Form.Check
                    type="radio"
                    label="Profesor"
                    name="type"
                    value="profesores"
                    checked={tipo === "profesores"}
                    onChange={handleType}
                    id="radio1"
                  />
                </td>
                <td className={`${tipo === "monitor_cea" ? "soft-red-background" : "white-background"}`}>
                  <Form.Check
                    type="radio"
                    label="Monitor CEA"
                    name="type"
                    value="monitor_cea"
                    checked={tipo === "monitor_cea"}
                    onChange={handleType}
                    id="radio2"
                  />
                </td>
              </tr>
            </Form.Group>
          </table>
        </Form>
      </div>
    </div>
  );
};
