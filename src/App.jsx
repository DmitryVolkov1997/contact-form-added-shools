// import { useEffect, useState } from 'react'
// import './App.css'
// import axios from 'axios'

// function App() {
// 	const [data, setData] = useState([])

// 	// const cities = []

// 	// cities.forEach(city => {
// 	// 	data.push({ value: city.name, label: city.name })
// 	// })

// 	// console.log(data)

// 	const shool = [
// 		{
// 			value: 'institution_type_id=1',
// 			label: '"ЮКО"',
// 		},
// 	]

// 	const getCitiesByRegion = async () => {
// 		await axios.post(
// 			`https://contact-form-2d4a6-default-rtdb.firebaseio.com/get_cities_by_region/${regions[0].value}.json`,
// 			regions
// 		)
// 	}

// 	return (
// 		<div className='App'>
// 			<button onClick={getCitiesByRegion}>Отправить</button>
// 		</div>
// 	)
// }

// export default App

import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'

function App() {
	const [data, setData] = useState([])

	// const cities = []

	// cities.forEach(city => {
	// 	data.push({ value: city.name, label: city.name })
	// })

	// console.log(data)

	const list = [
		{
			id: 4,
			name: 'Академия Болашак',
			institution_type_id: 3,
			city_id: 2,
			isDeleted: null,
			created_at: '2022-02-05T22:03:22.654+06:00',
			updated_at: '2022-02-05T22:03:22.654+06:00',
		},
		{
			id: 2,
			name: 'Карагандинский технический университет',
			institution_type_id: 3,
			city_id: 2,
			isDeleted: null,
			created_at: '2022-02-05T22:03:22.646+06:00',
			updated_at: '2022-02-05T22:03:22.646+06:00',
		},
		{
			id: 3,
			name: 'Карагандинский университет',
			institution_type_id: 3,
			city_id: 2,
			isDeleted: null,
			created_at: '2022-02-05T22:03:22.650+06:00',
			updated_at: '2022-02-05T22:03:22.650+06:00',
		},
		{
			id: 5,
			name: 'Карагандинский экономический университет',
			institution_type_id: 3,
			city_id: 2,
			isDeleted: null,
			created_at: '2022-02-05T22:03:22.657+06:00',
			updated_at: '2022-02-05T22:03:22.657+06:00',
		},
	]
	list.forEach(school => {
		data.push({ value: school.name, label: school.name })
	})

	console.log(data)

	const schools = [
		{
			label: 'Карагандинский Медицинский Интерколледж',
			value: 'Карагандинский Медицинский Интерколледж',
		},
		{
			label: 'Карагандинский Областной Высший Сестринский Колледж',
			value: 'Карагандинский Областной Высший Сестринский Колледж',
		},
		{
			label: 'Карагандинский агротехнический колледж',
			value: 'Карагандинский агротехнический колледж',
		},
		{
			label: 'Карагандинский банковский колледж',
			value: 'Карагандинский банковский колледж',
		},
		{
			label: 'Карагандинский горно-индустриальный колледж',
			value: 'Карагандинский горно-индустриальный колледж',
		},
		{
			label: 'Карагандинский гуманитарный колледж',
			value: 'Карагандинский гуманитарный колледж',
		},
		{
			label: 'Карагандинский железнодорожный колледж',
			value: 'Карагандинский железнодорожный колледж',
		},
		{
			label: 'Карагандинский колледж актуального образования «Болашак»',
			value: 'Карагандинский колледж актуального образования «Болашак»',
		},
		{
			label: 'Карагандинский колледж моды',
			value: 'Карагандинский колледж моды',
		},
		{
			label: 'Карагандинский колледж экономики и статистики',
			value: 'Карагандинский колледж экономики и статистики',
		},
		{
			label: 'Карагандинский коммерческий колледж',
			value: 'Карагандинский коммерческий колледж',
		},
		{
			label: 'Карагандинский машиностроительный колледж',
			value: 'Карагандинский машиностроительный колледж',
		},
		{
			label: 'Карагандинский медико-технический колледж',
			value: 'Карагандинский медико-технический колледж',
		},
		{
			label: 'Карагандинский профессионально-технический колледж',
			value: 'Карагандинский профессионально-технический колледж',
		},
		{
			label: 'Карагандинский технико-строительный колледж',
			value: 'Карагандинский технико-строительный колледж',
		},
		{
			label: 'Карагандинский транспортно-технологический колледж',
			value: 'Карагандинский транспортно-технологический колледж',
		},
		{
			label: 'Колледж «Международная Бизнес-Академия»  ',
			value: 'Колледж «Международная Бизнес-Академия»  ',
		},
		{
			label: 'Медицинский колледж при Карагандинском медицинском университет',
			value: 'Медицинский колледж при Карагандинском медицинском университет',
		},
		{
			label: 'Многопрофильный гуманитарно-технический колледж',
			value: 'Многопрофильный гуманитарно-технический колледж',
		},
		{
			label: 'Карагандинский высший политехнический колледж',
			value: 'Карагандинский высший политехнический колледж',
		},
		{
			label: 'Колледж инновационных технологий',
			value: 'Колледж инновационных технологий',
		},
	]

	// const getCitiesByRegion = async () => {
	// 	await axios.post(
	// 		`https://contact-form-2d4a6-default-rtdb.firebaseio.com/get_schools_by_city/region_id=7_19/institution_type_id=3.json`,
	// 		schools
	// 	)
	// }

	const getCitiesByRegion = async () => {
		await axios.post(
			`https://contact-form-2d4a6-default-rtdb.firebaseio.com/get_schools_by_city/region_id=7_2/institution_type_id=2.json`,
			schools
		)
	}

	return (
		<div className='App'>
			<button onClick={getCitiesByRegion}>Отправить</button>
		</div>
	)
}

export default App

// {
// 			value: 'другое учебное заведение',
// 			label: 'другое учебное заведение',
// 		},
