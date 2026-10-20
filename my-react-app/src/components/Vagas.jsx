function Vagas(){
    return (
        <>
        <section className="vagas">

            <div className="vagas__header">
                <h2>Últimas Vagas</h2>
                <span>7 vagas - Atualizado agora</span>
            </div>

            <div className="vagas__card">
                <div className="vagas__avatar">V</div>
                <div className="vagas__body">
                    <small>Vercel</small>
                    <p className="vagas__title">Full-stack Engineer</p>
                    <span className="vagas__badge">R$ 20k-30k</span>
                    <span className="vagas__badge vagas__badge--highlight">Remoto</span>
                </div>
                <div className="vagas__actions">
                    <span>4h</span>
                    <a href="">Candidatar-se</a>
                </div>
            </div>
            
            <div className="vagas__card">
                <div className="vagas__avatar">V</div>
                <div className="vagas__body">
                    <small>Vercel</small>
                    <p className="vagas__title">Full-stack Engineer</p>
                    <span className="vagas__badge">R$ 20k-30k</span>
                    <span className="vagas__badge vagas__badge--highlight">Remoto</span>
                </div>
                <div className="vagas__actions">
                    <span>4h</span>
                    <a href="">Candidatar-se</a>
                </div>
            </div>
            
            <div className="vagas__card">
                <div className="vagas__avatar">V</div>
                <div className="vagas__body">
                    <small>Vercel</small>
                    <p className="vagas__title">Full-stack Engineer</p>
                    <span className="vagas__badge">R$ 20k-30k</span>
                    <span className="vagas__badge vagas__badge--highlight">Remoto</span>
                </div>
                <div className="vagas__actions">
                    <span>4h</span>
                    <a href="">Candidatar-se</a>
                </div>
            </div>


        </section>
        <aside className="filtros">
            <div className="filtros__header">
                <h3>Filtros</h3>
                <a href="">limpar</a>
            </div>

            <div className="filtros__itens">
                <p>Tipo de vaga</p>
                <label htmlFor="check_efetivo">
                    <input type="checkbox" name="check_efetivo" id="check_efetivo"/> Efetivo
                </label>
                <label htmlFor="check_estagio">
                    <input type="checkbox" name="check_estagio" id="check_estagio"/> Estágio
                </label>
                <label htmlFor="check_temp">
                    <input type="checkbox" name="check_temp" id="check_temp"/> Temporário
                </label>
            </div>

            <div className="filtros__itens">
                <p>Área</p>
                <label htmlFor="check_eng">
                    <input type="checkbox" name="check_eng" id="check_eng"/> Engenharia
                </label>
                <label htmlFor="check_design">
                    <input type="checkbox" name="check_design" id="check_design"/> Design
                </label>
                <label htmlFor="check_gestao">
                    <input type="checkbox" name="check_gestao" id="check_gestao"/> Gestão
                </label>
            </div>
        </aside>
        </>
    )
}

export default Vagas