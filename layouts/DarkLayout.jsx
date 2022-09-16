
const DarkLayout = ({children}) => {
    return (
        <div style={{
            backgroundColor: '#fff',
            borderRadius: '5px',
            color: 'black',
            padding: '10px'
        }}>
            <h2>Dark layout</h2>
            {children}
        </div>
    )
}

export default DarkLayout