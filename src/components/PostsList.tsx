import Post from './Post'
import NewPost from './NewPost'
import s from './PostsList.module.css'
import { useState } from 'react'
import Modal from './Modal'

export default function PostsList({ hideBackdrop, isModalVisible, posts }: any) {
	const [bodyText, setBodyText] = useState('')
	const [authorText, setAuthorText] = useState('')

	const bodyChangeHandler = (event: any) => setBodyText(event.target.value)
	const authorChangeHandler = (event: any) => setAuthorText(event.target.value)

	return (
		<>
			{isModalVisible ? (
				<Modal onBackdropClick={hideBackdrop}>
					<NewPost
						onBodyChange={bodyChangeHandler}
						onAuthorChange={authorChangeHandler}
					/>
				</Modal>
			) : null}

			<ul className={s.posts}>
				<Post
					author={authorText}
					body={bodyText}
				/>

				{posts.map(({ author, body }: any) => (
					<li key={body}>
						<Post
							author={author}
							body={body}
						/>
					</li>
				))}
			</ul>
		</>
	)
}
