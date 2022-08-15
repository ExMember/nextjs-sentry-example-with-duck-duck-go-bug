import Link from 'next/link'
import {useState, useEffect} from 'react'

export default function Index () {
	const [show, setShow] = useState(false)
	useEffect(() => {
		setShow(true)
	})
	return (
  <div style={{ maxWidth: 700, margin: '0 auto' }}>
		<h1>{show ? "Everything is fine" : "There is a bug"}</h1>
    <h2>Sentry Simple Example 🚨</h2>
  </div>
)
}

