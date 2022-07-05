import React from "react"
import ProductBlock from "./ProductBlock"

export default function App() {

	return (
		<>
			<div className="background"></div>
			<div className="title">
				<h1>Ты сегодня покормил кота?</h1>
			</div>
			<div className="container">
				<ProductBlock/>
				<ProductBlock/>
				<ProductBlock/>
			</div>
		</>
	)
}