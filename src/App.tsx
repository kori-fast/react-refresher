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
					isPosting={isModalVisible}
					onStopPosting={hideBackdrop}
				/>
			</main>
		</>
	)
}

export default App
