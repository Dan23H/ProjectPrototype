import { Form } from "react-bootstrap";
import "../../styles/TypeForm.css";

export const TypeForm = ({ tipo, setTipo }) => {
  const handleType = (e) => {
    setTipo(e.target.value);
    alert(e.target.value)
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
                <td>
                  <Form.Check
                    type="radio"
                    label="Profesor"
                    name="type"
                    value="profesores"
                    checked={tipo === "profesores"}
                    onChange={handleType}
                    className="custom-radio"
                    id="radio1"
                  />
                </td>
                <td>
                  <Form.Check
                    type="radio"
                    label="Monitor CEA"
                    name="type"
                    value="monitor_cea"
                    checked={tipo === "monitor_cea"}
                    onChange={handleType}
                    className="custom-radio"
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
