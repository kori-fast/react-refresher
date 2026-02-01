import { Link } from 'react-router-dom'
import s from './Post.module.css'

export default function Post({ author, body, id }: { author: string; body: string; id: string }) {
	return (
		<div className={s.post}>
			<Link to={id}>
				<p className={s.author}>{author}</p>
				<p className={s.text}>{body}</p>
			</Link>
		</div>
	)
}
