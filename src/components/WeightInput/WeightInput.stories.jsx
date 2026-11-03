import { useState } from 'react';
import { WeightInput } from './WeightInput.jsx';
export default { title: 'Gran Azul/WeightInput', component: WeightInput };
function Demo() { const [peso, setPeso] = useState(10); return <div style={{ maxWidth: 280 }}><WeightInput value={peso} onChange={setPeso} /></div>; }
export const Basico = { render: () => <Demo /> };
