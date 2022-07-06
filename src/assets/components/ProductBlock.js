import React, {forwardRef} from "react"

const ProductBlock = forwardRef((props, ref) => {

	return (
		<div ref={ref} className={props.className}>
			<article className="block__card card" style={{backgroundColor: props.color, borderColor: props.color}} onClick={props.onHand} onMouseOut={() => {props.onHover(ref)}}>
				<div className="card__description">
					<strong className="card__description_text" style={{color: props.color}}>Сказочное заморское яство</strong>
					<h2 className="card__title">Нямушка</h2>
					<h3 className="card__subtitle">{props.comp}</h3>
					<p className="card__numb">{props.numb} порций</p>
					<p className="card__present">{props.present} в подарок</p>
					<p className="card__subpresent">{props.subpresent}</p>
				</div>
				<div className="card__cat"/>
				<div className="card__width" style={{backgroundColor: props.color}}>
					<div className="card__width_numb">{props.weight}</div>
					<div className="card__width_text">кг</div>
				</div>
			</article>
			<div className="block__text">
				<p>{props.text}</p>
				<button className="block__button" onClick={props.onHand}>купи</button>
			</div>
		</div>
	)
});

export default ProductBlock;