import s from './NewPost.module.css'
import { useState, type ChangeEvent } from 'react'
import type { PostData } from './PostsList'

interface NewPostProps {
	onCancel: () => void
	onAddPost: (post: PostData) => void
}

function NewPost({ onCancel, onAddPost }: NewPostProps) {
	const [bodyText, setBodyText] = useState('')
	const [authorText, setAuthorText] = useState('')

	const handleBodyChange = (event: ChangeEvent<HTMLTextAreaElement>) => setBodyText(event.target.value)
	const handleAuthorChange = (event: ChangeEvent<HTMLInputElement>) => setAuthorText(event.target.value)

	const handleSubmit = (event: ChangeEvent<HTMLFormElement>) => {
		event.preventDefault()

		const post: PostData = {
			body: bodyText,
			author: authorText,
		}
		onAddPost(post)
		onCancel()
	}

	return (
		<form
			className={s.form}
			onSubmit={handleSubmit}
		>
			<p>
				<label htmlFor='body'>Text</label>
				<textarea
					id='body'
					required
					rows={3}
					onChange={handleBodyChange}
				/>
			</p>
			<p>
				<label htmlFor='name'>Your name</label>
				<input
					type='text'
					id='name'
					required
					onChange={handleAuthorChange}
				/>
			</p>
			<p className={s.actions}>
				<button
					type='button'
					onClick={onCancel}
				>
					Cancel
				</button>
				<button>Submit</button>
			</p>
		</form>
	)
}

export default NewPost
