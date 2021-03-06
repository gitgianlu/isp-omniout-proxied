import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './App.css';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import QuotePage from './pages/QuotePage';
import LocalPage from './pages/LocalPage';
import PricePage from './pages/PricePage';

class App extends React.Component {
    _omnioutConnection;
    _omnioutLoaded;
    constructor(props) {
        super(props);
        this.state = {
            login: false,
            title: 'Intesa SanPaolo',
            headerLinks: [
                { title: 'Home', path: '/' },
                { title: 'About', path: '/about' },
                { title: 'Partners', path: '/partners' },
                { title: 'Carte', path: '/contact' },
                { title: 'Price', path: '/path' },
            ],
            home: {
                title: "Intesa SanPaolo",
                subTitle: 'Intesa SanPaolo - Internet Banking',
                text: 'Richiedi Carta',
            },
            about: {
                title: 'Info',
            },
            contact: {
                title: 'Contatti',
            },
            quote: {
                title: 'Carte',
            },
            price: {
                title: 'Costi',
                subTitle: 'Affordable for All',
            },
        };
    }

    render() {
        return (
            <Router>
                <Container className="p-0" fluid={true}>
                    {/* <Navbar className="border-bottom" bg="primary" variant="dark" expand="lg">
                        <Navbar.Brand>Intesa SanPaolo - Internet Banking</Navbar.Brand>
                        <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
                        <Navbar.Collapse id="navbar-toggle">
                            <Nav className="ml-auto">
                                <Link className="nav-link" to="/home">
                                    Home
                                </Link>
                                <Link className="nav-link" to="/about">
                                    Info
                                </Link>
                                <Link className="nav-link" to="/quote">
                                    Carte
                                </Link>
                                <Link className="nav-link" to="/contact">
                                    Contatti
                                </Link>
                                <Link className="nav-link" to="/price">
                                    Costi
                                </Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar> */}
                    <Route
                        path="/home"
                        render={() => <HomePage title={this.state.home.title} subTitle={this.state.home.subTitle} text={this.state.home.text} />}
                    />
                    <Route
                        path="/"
                        exact
                        render={() => <HomePage title={this.state.home.title} subTitle={this.state.home.subTitle} text={this.state.home.text} />}
                    />
                    <Route path="/about" render={() => <AboutPage title={this.state.about.title} />} />
                    <Route path="/quote" render={() => <QuotePage title={this.state.quote.title} />} />
                    <Route path="/contact" render={() => <ContactPage title={this.state.contact.title} />} />
                    <Route path="/price" render={() => <PricePage title={this.state.price.title} subTitle={this.state.price.subTitle} />} />
                    <Route
                        path="/vlocityomniscript/offplatformLifeInsuranceExample2English"
                        render={() => <QuotePage title={this.state.quote.title} />}
                    />
                    {/* <Footer /> */}
                </Container>
            </Router>
        );
    }
}
export default App;
