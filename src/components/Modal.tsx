import { useNavigate } from 'react-router-dom'
import s from './Modal.module.css'
import type { ReactNode } from 'react'

interface ModalProps {
	children: ReactNode
}

export default function Modal({ children }: ModalProps) {
	const navigate = useNavigate()

	function handleClose() {
		navigate('..')
	}

	return (
		<>
			<div
				className={s.backdrop}
				onClick={handleClose}
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
