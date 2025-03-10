import React from 'react'
import { ItemContainer } from './styles'

const ItemRepo = ({repo, removeRepo}) => {
  const handleRemove = () =>{
    removeRepo(repo.id)
  }
  return (
    <ItemContainer>
        <h3>{repo.name}</h3>
        <p>{repo.full_name}</p>
        <a href={repo.html_url} target='blank'>Ver Repositorio</a><br />
        <a href="#" className='remover' onClick={handleRemove}>Remover</a>
        <hr />
    </ItemContainer>
  )
}

export default ItemRepo