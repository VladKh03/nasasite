import '../styles/Home.css'

import Upper from './HomeUpper'
import Body from './HomeBody'

export default function Home() {
  return (
		<div className="wrapper">
			<div className="content">
				<Upper/>
				<Body/>
			</div>
		</div>
  )
}