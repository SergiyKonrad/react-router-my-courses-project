import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import queryString from 'query-string'
import { useState, useEffect } from 'react'
import courses from '../data/courses'

const SORT_KEYS = ['title', 'slug', 'id']

// Function to sort the courses based on the selected key
function sortCourses(courses, key) {
  const sortedCourses = [...courses]
  if (!key || !SORT_KEYS.includes(key)) {
    return sortedCourses
  }
  sortedCourses.sort((a, b) => (a[key] > b[key] ? 1 : -1))
  return sortedCourses
}

const Courses = () => {
  const location = useLocation()
  const query = queryString.parse(location.search)
  const navigate = useNavigate()
  const [sortKey, setSortKey] = useState(query.sort)
  const [sortedCourses, setSortedCourses] = useState(
    sortCourses(courses, sortKey),
  )

  // Effect to handle sorting based on query param
  useEffect(() => {
    setSortedCourses(sortCourses(courses, sortKey))
  }, [sortKey])

  // Function to handle sorting and updating the query parameter
  const handleSort = (key) => {
    setSortKey(key)
    navigate(`?sort=${key}`)
  }

  return (
    <>
      <h1>{sortKey ? `Courses sorted by ${sortKey}` : 'Courses'}</h1>

      <div>
        <button onClick={() => handleSort('title')}>Sort by Title</button>
        <button onClick={() => handleSort('slug')}>Sort by Slug</button>
        <button onClick={() => handleSort('id')}>Sort by ID</button>
      </div>

      {sortedCourses.map((course) => (
        <div key={course.id}>
          <Link to={course.slug} className="courseLink">
            {course.title}
          </Link>
        </div>
      ))}
    </>
  )
}

export default Courses
