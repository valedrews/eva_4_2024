import { Fragment } from 'react';

const Item = ({ todo, cambiarEstado }) => {
  const { id, estado, producto, precio, tipo } = todo;
  const fnCambiarEstado = () => {
    cambiarEstado(id);
  };

  return (
    <Fragment>
		<div className="container-fluid">
      <div className="card text-dark bg-warning mb-3" style={{ maxWidth: '18rem' }}>
        <div className="card-header">{tipo} <input type="checkbox" className="form-checked-input" onChange={fnCambiarEstado} checked={estado} /></div>
        <div className="card-body">
          <h5 className="card-title">{producto}</h5>
          <p className="card-text">
            {precio} 
          </p>
        </div>
      </div>
	  </div>
    </Fragment>
  );
};

export default Item;