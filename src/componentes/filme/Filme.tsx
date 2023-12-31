import './Filme.css'

type FilmeProps={
    titulo:string,
    descricao:string,
    imagem:string
}

export default function Filme(props:FilmeProps){
    return(
        <div className="filme-content">
            <div className="foto-filme">
                <img src={props.imagem} alt=""/>
            </div>
            <div className="texto_foto">
                <h1>{props.titulo}</h1>
                <p className="descricao">
                    {props.descricao}
                </p>
            </div>
        </div>
    )
}