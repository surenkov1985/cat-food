import React from "react"

export default function ProductBlock() {

	return (
		<div className="container__block block">
			<article className="block__card card">
				<div className="card__description">
					<strong className="card__description_text">Сказочное заморское яство</strong>
					<h2 className="card__title">Нямушка</h2>
					<h3 className="card__subtitle">с фуа-гра</h3>
					<p className="card__numb">10 порций</p>
					<p className="card__present">мышь в подарок</p>
				</div>
				<div className="card__cat"></div>
				<div className="card__width">
					<div className="card__width_numb">0,5</div>
					<div className="card__width_text">кг</div>
				</div>
			</article>
			<div className="block__text">
				<p>Чего сидишь? Порадуй котэ, </p>
				<button className="block__button">купи</button>
			</div>
		</div>
	)
}