import s from './NewPost.module.css'
import Modal from '../components/Modal'
import { Form, Link, redirect } from 'react-router-dom'

interface NewPostProps {}

export default function NewPost({}: NewPostProps) {
	return (
		<Modal>
			<Form
				method='post'
				className={s.form}
			>
				<p>
					<label htmlFor='body'>Text</label>
					<textarea
						id='body'
						required
						rows={3}
						name='body'
					/>
				</p>
				<p>
					<label htmlFor='name'>Your name</label>
					<input
						type='text'
						id='name'
						required
						name='author'
					/>
				</p>
				<p className={s.actions}>
					<Link
						to='..'
						type='button'
					>
						Cancel
					</Link>
					<button>Submit</button>
				</p>
			</Form>
		</Modal>
	)
}

export async function action({ request }: any) {
	const formData = await request.formData()
	const post = {
		body: formData.get('body'),
		author: formData.get('author'),
	} // alternative - Object.fromEntries(formData)
	await fetch('http://localhost:8080/posts', {
		method: 'POST',
		body: JSON.stringify(post),
		headers: {
			'Content-Type': 'application/json',
		},
	})

	return redirect('/')
}
