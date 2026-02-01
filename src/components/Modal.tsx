import s from './Modal.module.css'
import type { ReactNode } from 'react'

interface ModalProps {
	onBackdropClick: () => void
	children: ReactNode
}

export default function Modal({ onBackdropClick, children }: ModalProps) {
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
