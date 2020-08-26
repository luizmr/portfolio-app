import React from "react";
import Brand from "./components/Brand/Brand";
import Navigation from "./components/Navigation/Navigation";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import About from "./Pages/About/About";
import Portfolio from "./Pages/Portfolio/Portfolio";
import NotFound from "./Pages/NotFound/NotFound";
import Skills from "./Pages/Skills/Skills";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
	return (
		<BrowserRouter>
			<Brand />
			<Navigation />
			<Contact />

			<Switch>
				<Route path="/" component={About} exact />
				<Route path="/portfolio" component={Portfolio} />
				<Route path="/skills" component={Skills} />
				<Route path="*" component={NotFound} />
			</Switch>

			<Footer />
		</BrowserRouter>
	);
}

export default App;
