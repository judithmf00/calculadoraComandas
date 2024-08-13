export default function Pedido() {
  return (
    <section className="containerPedido content-center flex flex-col h-[90%] w-full">
      <h2 className="containerPedido__productos__title">Pedido</h2>
      <div className="containerPedido__productos flex-grow-[7]">
        <ul>
          <li>
            <div>
              <p>Pizza con fsdqweqweqwefszsdasdassd - <span>30€</span> </p>
              <p>Cantidad: 1 - <span> 30€</span></p>
            </div>
            <button>X</button>
          </li>
          <li>
            <div>
              <p>Pizza con fsdqweqweqwefszsdasdassd - <span>30€</span> </p>
              <p>Cantidad: 1 - <span> 30€</span></p>
            </div>
            <button>X</button>
          </li>
          <li>
            <div>
              <p>Pizza con fsdqweqweqwefszsdasdassd - <span>30€</span> </p>
              <p>Cantidad: 1 - <span> 30€</span></p>
            </div>
            <button>X</button>
          </li>
        </ul>
      </div>

      <div className="containerPedido__propina flex-grow-[2]">
        <h3>Propina:</h3>
        <label>
          <input type="radio" name="propina" id="10" />
          <span>10%</span>
        </label>
        <label>
          <input type="radio" name="propina" id="20" />
          <span>20%</span>
        </label>
        <label>
          <input type="radio" name="propina" id="30" />
          <span>30%</span>
        </label>
      </div>

      <div className="containerPedido__total flex-grow-[1]">
        <h3>Total y propina:</h3>
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
