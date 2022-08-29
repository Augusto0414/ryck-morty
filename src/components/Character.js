import React from 'react'

const Character = ({characters = []}) => {
  return (
    <div className="row" >
      {
        characters.map(character => (
          <div className="col-md-3" key={character.id}>
            <div className="card mb-4 box-shadow">
              <img className="card-img-top" src={character.image} alt={character.name} />
              <div className="card-body">
                <p className="card-text">{character.name}</p>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="btn-group">
                    <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                    <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                  </div>
                  <small className="text-muted"> <p>{character.species}</p></small>
                </div>
              </div>
            </div>
          </div>
          
        )) 
      }  
    </div>
  )
}

export default Character