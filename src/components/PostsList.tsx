import Post from './Post'
import NewPost from './NewPost'
import s from './PostsList.module.css'
import Modal from './Modal'
import { useState } from 'react'

export interface PostData {
	author: string
	body: string
}

interface PostsListProps {
	onStopPosting: () => void
	isPosting: boolean
}

export default function PostsList({ onStopPosting, isPosting }: PostsListProps) {
	const [posts, setPosts] = useState<PostData[]>([])

	const handleAddPost = (post: PostData) => setPosts(existingPosts => [post, ...existingPosts])

	return (
		<>
			{isPosting ? (
				<Modal onBackdropClick={onStopPosting}>
					<NewPost
						onCancel={onStopPosting}
						onAddPost={handleAddPost}
					/>
				</Modal>
			) : null}
			{!posts.length ? (
				<div style={{ textAlign: 'center', color: 'white' }}>
					<h2>No posts yet</h2>
					<p>Start adding some!</p>
				</div>
			) : (
				<ul className={s.posts}>
					{posts.map(({ author, body }: PostData) => (
						<li key={author + body}>
							<Post
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
