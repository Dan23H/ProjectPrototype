import "../../styles/TypeForm.css";
import { Button } from "react-bootstrap";

export const TypeForm = ({ type, setType }) => {
  const handleType1 = (e) => {
    e.preventDefault();
    setType("PROFESORES");
  };

  const handleType2 = (e) => {
    e.preventDefault();
    setType("MONITOR CEA");
  };

  return (
    <div className="box1">
      <label className="red-label">Tipo de asesor</label>
      <hr className="white-label"/>
      <div className="table-responsive">
        <table className="table">
          <tbody>
            <tr>
              <td>
                <div className="radio-buttons">
                  <label>
                    <input
                      type="radio"
                      name="type"
                      value="profesores"
                      checked={type === "PROFESORES"}
                      onChange={(event) => handleType1(event)}
                    />
                    Profesor
                  </label>
                </div>
              </td>
              <td>
                <div className="radio-buttons">
                  <label>
                    <input
                      type="radio"
                      name="type"
                      value="monitor_cea"
                      checked={type === "MONITOR CEA"}
                      onChange={(event) => handleType2(event)}
                    />
                    Monitor CEA
                  </label>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
     
      <label></label>
    </div>
  );
};
