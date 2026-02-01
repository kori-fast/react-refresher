import { useLoaderData } from 'react-router-dom'
import Post from './Post'
import s from './PostsList.module.css'

export interface PostData {
	id: string
	author: string
	body: string
}

interface PostsListProps {}

export default function PostsList({}: PostsListProps) {
	const posts = useLoaderData()

	return (
		<>
			{!posts.length && (
				<div style={{ textAlign: 'center', color: 'white' }}>
					<h2>No posts yet</h2>
					<p>Start adding some!</p>
				</div>
			)}
			{posts.length > 0 && (
				<ul className={s.posts}>
					{posts.map(({ id, author, body }: PostData) => (
						<li key={id}>
							<Post
								id={id}
								author={author}
								body={body}
							/>
						</li>
					))}
				</ul>
			)}
		</>
	)
}
