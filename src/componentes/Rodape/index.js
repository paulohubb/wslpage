import './rodape.css'

const Rodape = () => {
    return (
        <footer className='footer'>
            <section>
                <ul>
                    <li>
                        <a href="https://www.facebook.com/WSL/" >
                        <img src="./imagens/fb.png" alt="logo facebook" />
                    </a>
                </li>
                <li>
                    <a href="https://twitter.com/wsl" >
                        <img src="./imagens/tw.png" alt="logo twitter" />
                    </a>
                </li>
                <li>
                    <a href="https://www.instagram.com/wsl/" >
                        <img src="./imagens/ig.png" alt="logo instagram" />
                    </a>
                </li>
            </ul>
        </section>
        <section className="logoRodape">
        <a href="https://www.worldsurfleague.com/">
        <img src="/imagens/wsllogo.png"  alt="logo wsl com onda" />
        </a>
        </section>
        <section>
            <p>
                Desenvolvido por Paulo S. Sant' Anna.
            </p>
        </section>
    </footer>)
}

export default Rodape
    