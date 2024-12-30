


export default function Cubos() {

let vector = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,] 




  return (
    <>
        <div className="cubos">Cubos</div>
        <div className="content">
            {vector.map((cubo) =>(
                <div key={cubo} className="cubo">{cubo}
                </div>
            ))}
        </div>
    </>

  )
}
