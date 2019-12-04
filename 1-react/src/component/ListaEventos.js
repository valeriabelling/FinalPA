import React from 'react';
import Eventos from './Eventos';

const ListaEventos = ({eventos, eliminarEvento}) => (
    <div className="card mt-2 py-5">
        <div className="card-body">
            <h2 className="card-title text-center">
                Administra los eventos registrados aquí
            </h2>
            <div className="lista-eventos">
                {eventos.map(evento => (
                    <Eventos
                    key={evento.id}
                    evento={evento}
                    eliminarEvento = {eliminarEvento}
                    />
                ))}
            </div>
        </div>
    </div>
)

export default ListaEventos;