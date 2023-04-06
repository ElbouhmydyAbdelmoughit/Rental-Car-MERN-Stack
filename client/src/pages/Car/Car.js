const Car = () => {
  return (
    <table className="table" style={{ minWidth: "800px" }}>
      <thead className="bg-black text-white">
        <tr>
          <th className="fw-bold">Id</th>
          <th className="fw-bold">Name</th>
          <th className="fw-bold">Model</th>
          <th className="fw-bold">Price</th>
          <th className="fw-bold">Description</th>
          <th className="fw-bold">#</th>
        </tr>
      </thead>
      <tbody className="table-body">
        <tr className="cell-1">
          <td>SO-13487</td>
          <td>Gasper Antunes</td>
          <td>
            <span className="badge badge-success">Fullfilled</span>
          </td>
          <td>$2674.00</td>
          <td>Today</td>
          <td className="d-flex justify-content-between text-black">
            <i className="bi bi-trash"></i>
            <i className="bi bi-pen"></i>
          </td>
        </tr>
        <tr className="cell-1">
          <td>SO-13453</td>
          <td>Aartsen van</td>
          <td>
            <span className="badge badge-info">Confirmed</span>
          </td>
          <td>$3454.00</td>
          <td>Yesterday</td>
          <td className="d-flex justify-content-between text-black">
            <i className="bi bi-trash"></i>
            <i className="bi bi-pen"></i>
          </td>
        </tr>
        <tr className="cell-1">
          <td>SO-13498</td>
          <td>Trashes Habard</td>
          <td>
            <span className="badge badge-danger">Partially shipped</span>
          </td>
          <td>$6274.00</td>
          <td>May 12,2020</td>
          <td className="d-flex justify-content-between text-black">
            <i className="bi bi-trash"></i>
            <i className="bi bi-pen"></i>
          </td>
        </tr>
        <tr className="cell-1">
          <td>SO-16499</td>
          <td>Samban Hubart</td>
          <td>
            <span className="badge badge-success">Fullfilled</span>
          </td>
          <td>$6375.00</td>
          <td>May 11,2020</td>
          <td className="d-flex justify-content-between text-black">
            <i className="bi bi-trash"></i>
            <i className="bi bi-pen"></i>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default Car;
