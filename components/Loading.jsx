import { Circle } from 'better-react-spinkit';

export default function Loading() {
  return (
    <center style={{ display: 'grid', placeItems: 'center', height: '100vh' }}>
      <div>
        <img
          src='https://ik.imagekit.io/yw2w0b4ajqv/whatsapp2/whatsapp-symbol_lbsmgLPYF.svg'
          width={200}
          style={{ marginBottom: 10 }}
        />
        <Circle color='#3cbc28' size={60} />
      </div>
    </center>
  );
}
