export const ColorTool = () => {

  const colors = [
    { id: 1, name: 'blue' },
    { id: 2, name: 'green' },
    { id: 3, name: 'red' },
    { id: 4, name: 'purple' },
    { id: 5, name: 'yellow' },
    { id: 6, name: 'black' },
  ];

  return (
    <>
      <header>
        {/* React.createElement('h1', { className: 'page-header' }, 'Color Tool') */}
        <h1 className="page-header">Color Tool</h1>
      </header>
      <ul>
        {colors.map(color =>
          <li key={color.id}>{color.name}</li>)}
      </ul>
    </>
  );

};