export const DataTable = (props) => {



  return (
    <table>
      <thead>
        <tr>
          {props.config.columns.map(col =>
            <th key={col.id}>{col.caption}</th>)}
        </tr>
      </thead>
      <tbody>
        {props.items.map((item) => (
          <tr key={item.id}>
            {props.config.columns.map(col =>
              <td key={col.id}>{col.field(item)}</td>)}
          </tr>
        ))}
      </tbody>
    </table>
  );
};