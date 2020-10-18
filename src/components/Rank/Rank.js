import React from 'react';

const Rank = ({ user }) => {
	return (
		<div>
			<div className='black f3'>
				{`${user.name}, your current rank is...`}
			</div>
			<div className='black f1'>
				{`#${user.entries}`}
			</div>
		</div>
	);
}

export default Rank;