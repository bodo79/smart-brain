import React from 'react';
import './ImageLinkForm.css'


const ImageLinkForm = ({ onInputChange, onButtonSubmit}) => {
	return (
		<div>
			<p className='f3'>
				{'put a URL of a photo to detect the faces in it'}
			</p>
			<p className='f3'>
				{`copy & paste => https://i2-prod.mirror.co.uk/incoming/article14334083.ece/ALTERNATES/s615/3_Beautiful-girl-with-a-gentle-smile.jpg`}
			</p>
			<div className='center'>
				<div className='form center pa4 br3 shadow-5'>
					<input className='f4 pa2 w-70 center' type='tex' onChange={onInputChange}/>
					<button 
						className='w-30 grow f4 link ph3 pv2 dib white bg-light-purple' 
						onClick={onButtonSubmit} 
					>Send</button>
				</div>
			</div>
		</div>
	);
}

export default ImageLinkForm