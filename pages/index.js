import dynamic from "next/dynamic"

const DePayButton = dynamic(()=>import('../components/DePayButton') , { ssr: false })

export default function Home() {
  return (
    <div style={{ textAlign: 'center', paddingTop: '5rem' }}>

      <DePayButton
        integration={ "YOUR_INTEGRATION_ID" }
        payload={
          {
            userId: '123',
            itemId: 1,
            quantity: 2
          }
        }
        blockchains={ ['ethereum','bsc','polygon','base'] }
      />

    </div>
  );
}
