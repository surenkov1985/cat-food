import React, {useState, useRef, useEffect} from "react"
import ProductBlock from "./ProductBlock"

export default function App() {

	const fugRef = useRef();
	const fishRef = useRef();
	const duckRef = useRef();

	const [fugText, setFugText] = useState();
	const [fishText, setFishText] = useState();
	const [duckText, setDuckText] = useState();

	useEffect(() => {
		setBlockText(fugRef);
		setBlockText(fishRef);
		setBlockText(duckRef);
	}, []);

	function setHover(ref) {

		if (ref.current.classList.contains("active")) {

			ref.current.classList.add("hover")
		}
	}

	function setBlockText(ref) {

		if (ref === fugRef && ref.current.classList.contains("disabled")) {

			setFugText("Печалька, с фуа-гра закончился.");
		} else if (ref === fugRef && !ref.current.classList.contains("active")) {

			setFugText("Чего сидишь? Порадуй котэ,");
		} else if (ref === fugRef && ref.current.classList.contains("active")) {

			setFugText("Печень утки разварная с артишоками.");
		}

		if (ref === fishRef && ref.current.classList.contains("disabled")) {

			setFishText("Печалька, с рыбой закончился.");
		} else if (ref === fishRef && !ref.current.classList.contains("active")) {

			setFishText("Чего сидишь? Порадуй котэ,");
		} else if (ref === fishRef && ref.current.classList.contains("active")) {

			setFishText("Головы щучьи с чесноком да свежайшая сёмгушка.");
		}

		if (ref === duckRef && ref.current.classList.contains("disabled")) {

			setDuckText("Печалька, с курой закончился.");
		} else if (ref === duckRef && !ref.current.classList.contains("active")) {

			setDuckText("Чего сидишь? Порадуй котэ,");
		} else if (ref === duckRef && ref.current.classList.contains("active")) {

			setDuckText("Филе из цыплят с трюфелями в бульоне.");
		}
	}

	function cardHandler(ref) {

		if (!ref.current.classList.contains("disabled")) {

			ref.current.classList.toggle("active")
		}

		setBlockText(ref);
	}

	return (
		<>
			<div className="background"/>
			<div className="title">
				<h1>Ты сегодня покормил кота?</h1>
			</div>
			<div className="container">
				<ProductBlock className={"container__block block"} ref={fugRef} text={fugText} comp="с фуа-гра" numb="10" present="мыши" weight="0.5" onHand={() => cardHandler(fugRef)} onHover={setHover}/>
				<ProductBlock className={"container__block block"} ref={fishRef} text={fishText} comp="с рыбой" numb="40" present="2 мыши" weight="2" onHand={() => cardHandler(fishRef)} onHover={setHover}/>
				<ProductBlock className={"container__block block disabled"} ref={duckRef} text={duckText} comp="с курой" numb="100" present="5 мышей" subpresent="заказчик доволен" weight="5" onHand={() => cardHandler(duckRef)} onHover={setHover}/>
			</div>
		</>
	)
}