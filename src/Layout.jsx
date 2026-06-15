
const Header = () => {
    return <h1>header</h1>
}

const Footer = () => {
    return <h1>Footer Component</h1>
}

const Layout = () => {
    return(
        <div>
            <Header />
                <main>
                    Main Content 
                </main>

            <Footer />
        </div>
    )
}

export default Layout