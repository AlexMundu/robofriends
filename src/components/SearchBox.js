import React from 'react';

const SearchBox = ({onSearchChange}) => {
	return (
		<div className='pa2'>
			<input 
			className='pa3 ba b--green bg-lightest-blue' 
			type='text' 
			placeholder='Search Robot'
			onChange={ onSearchChange } />
		</div>
	)
}

export default SearchBox;