import s from './Post.module.css'

export default function Post({ author, body }: { author: string; body: string; }) {
  return <div className={s.post}>
    <p className={s.author}>{author}</p>
    <p className={s.text}>{body}</p>
  </div>
}