import React from 'react'

function Pagination({prev, next, onPrev, onNext}) {

	const handlePrev = () => {
		onPrev();
	}
	 const handleNext = () => {
		onNext();
	}

  return (
    <div>
	<ul className="pagination justify-content-center">
		<li className="page-item">
			{
				prev ? (
				<button className = "page-link" onClick={handlePrev}>
				Previous
			        </button>
				): 
				null
			}
		</li>
		<li className="page-item">
			{
				next ?
				(<button className = "page-link" onClick={handleNext}>
				Next
			        </button>
				):
			        null
			}
		</li>
	</ul>
    </div>
  )
}

export default Pagination