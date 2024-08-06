export default function Pedido() {
  return (
    <section className="containerPedido w-1/2 content-center flex flex-col h-full">

      <div className="containerPedido__productos flex-grow-[7]">
        <h2 className="containerPedido__productos__title">Pedido</h2>
        <ul>
          <li className="flex justify-between">
            <p>Pizza con ñawsfdsdfsdfsdfsdfsdfazsdasdassd - 30€ </p>
            <button>X</button>
          </li>
          <li className="flex justify-between">
            <p>Pizza</p>
            <button>X</button>
          </li>
          <li className="flex justify-between">
            <p>Pizza</p>
            <button>X</button>
          </li>
        </ul>
      </div>

      <div className="containerPedido__productos__propina flex-grow-[2]">
        <h3>Propina</h3>
        <p>10%</p>
        <p>20%</p>
        <p>30%</p>
      </div>

      <div className="containerPedido__productos__total flex-grow-[1]">
        <h3>Total y propina</h3>
        <p>Subtotal a pagar: </p>
        <p>Propina: </p>
        <p>Total a pagar: </p>
      </div>

      <button className="self-center mt-4">
        Guardar
      </button>

    </section>
  );
}
