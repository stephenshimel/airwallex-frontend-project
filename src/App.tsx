import React from "react";
import Header from "./component/header/Header";
import Footer from "./component/footer/Footer";
import { strings } from "./utils/strings";

function App() {
	return (
		<div>
			<Header title={strings.companyName} />

			<Footer texts={[strings.madeFrom, strings.copyRight]} />
		</div>
	);
}

export default App;
