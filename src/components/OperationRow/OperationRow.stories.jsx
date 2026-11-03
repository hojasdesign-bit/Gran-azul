import { OperationRow } from './OperationRow.jsx';

export default { title: 'Datos/OperationRow', component: OperationRow };

const noop = () => {};

export const Historial = {
  render: () => (
    <div style={{ width: 580, border: '1px solid var(--ga-border)', borderRadius: 16, overflow: 'hidden' }}>
      <OperationRow status="completed" side="buy" give="Miami" receive="La Habana" counterparty="Familia en Cuba" date="2 jul" amount="500 USD" price="10 lb" onClick={noop} />
      <OperationRow status="completed" side="sell" give="Orlando" receive="La Habana" counterparty="Familia en Cuba" date="28 jun" amount="120 USD" price="5 lb" onClick={noop} />
      <OperationRow status="pending" side="buy" give="Tampa" receive="La Habana" counterparty="Familia en Cuba" date="Hoy" amount="250 USD" price="8 lb" onClick={noop} />
      <OperationRow status="cancelled" side="sell" give="Houston" receive="La Habana" counterparty="Familia en Cuba" date="20 jun" amount="80 USD" price="3 lb" onClick={noop} />
    </div>
  ),
};

export const EnCurso = {
  args: { status: 'in_progress', side: 'buy', give: 'Miami', receive: 'La Habana', counterparty: 'Camila Prieto', date: 'Ahora', amount: '850 USD', price: '20 lb' },
};
