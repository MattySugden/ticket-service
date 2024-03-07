import { Link } from 'react-router-dom'

const Public = () => {
    const content = (
        <section className="public">
            <header>
                <h1>Welcome to <span className="nowrap">TechNotes</span></h1>
            </header>
            <main className="public__main">
                <p>Create a technical note to log your issue here, which will create a ticket to be actioned.</p>
                <address className="public__addr">
                    <br />
                    <br />
                    Call an engineer direct<br />
                    <a href="tel:+15555555555">(0345) 123456</a>
                </address>
                <br />
                <p>Owner: Matt Sugden</p>
            </main>
            <footer>
                <Link to="/login">Employee Login</Link>
            </footer>
        </section>

    )
    return content
}
export default Public