import '@styles/globals.css';



export const metadeta ={
    title : "Promptopia",
    description: 'Discover & Share AI Propmts'
}

const RootLayout = ({children}) => {
  return (
   <html lang='eng'>
    <body>
        <div className='main'>
            <div className='gradient'/>
        </div>
        <main className='app'>
            {children}
        </main>
    </body>
   </html>
  )
}

export default RootLayout
