import { useState } from 'react'
import MainHeader from './components/MainHeader.tsx'
import PostsList from './components/PostsList.tsx'

function App() {
	const [isModalVisible, setIsModalVisible] = useState(false)

	const hideBackdrop = () => setIsModalVisible(false)
	const showBackdrop = () => setIsModalVisible(true)

	return (
		<>
			<MainHeader onCreatePost={showBackdrop} />
			<main>
				<PostsList
					isModalVisible={isModalVisible}
					hideBackdrop={hideBackdrop}
					posts={[
						{ author: 'Max', body: 'This is the first post' },
						{ author: 'Kori', body: 'Second awesome post!' },
					]}
				/>
			</main>
		</>
	)
}

export default App
