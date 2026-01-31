import s from './Modal.module.css'

export default function Modal({ onBackdropClick, children }: any) {
	return (
		<>
			<div
				className={s.backdrop}
				onClick={onBackdropClick}
			/>
			<dialog
				open
				className={s.modal}
			>
				{children}
			</dialog>
		</>
	)
}
